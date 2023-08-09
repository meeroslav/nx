import {
  joinPathFragments,
  offsetFromRoot,
  ProjectConfiguration,
  Tree,
  updateJson,
} from '@nx/devkit';
import { join } from 'path';
import { NormalizedSchema } from '../schema';

interface PartialEsLintrcOverride {
  parserOptions?: {
    project?: string[];
  };
}

interface PartialEsLintRcJson {
  extends: string | string[];
  overrides?: PartialEsLintrcOverride[];
}

function offsetFilePath(
  project: ProjectConfiguration,
  pathToFile: string,
  offset: string
): string {
  if (!pathToFile.startsWith('..')) {
    // not a relative path
    return pathToFile;
  }
  const pathFromRoot = join(project.root, pathToFile);
  return joinPathFragments(offset, pathFromRoot);
}

/**
 * Update the .eslintrc file of the project if it exists.
 *
 * @param schema The options provided to the schematic
 */
export function updateEslintConfig(
  tree: Tree,
  schema: NormalizedSchema,
  project: ProjectConfiguration
) {
  const offset = offsetFromRoot(schema.relativeToRootDestination);

  const eslintRcPath = join(schema.relativeToRootDestination, '.eslintrc.json');

  if (!tree.exists(eslintRcPath)) {
    // no .eslintrc found. nothing to do
    return;
  }

  updateJson<PartialEsLintRcJson>(tree, eslintRcPath, (eslintRcJson) => {
    if (typeof eslintRcJson.extends === 'string') {
      eslintRcJson.extends = offsetFilePath(
        project,
        eslintRcJson.extends,
        offset
      );
    } else if (eslintRcJson.extends) {
      eslintRcJson.extends = eslintRcJson.extends.map((extend: string) =>
        offsetFilePath(project, extend, offset)
      );
    }

    eslintRcJson.overrides?.forEach(
      (o: { parserOptions?: { project?: string | string[] } }) => {
        if (o.parserOptions?.project) {
          o.parserOptions.project = Array.isArray(o.parserOptions.project)
            ? o.parserOptions.project.map((p) =>
                p.replace(project.root, schema.relativeToRootDestination)
              )
            : o.parserOptions.project.replace(
                project.root,
                schema.relativeToRootDestination
              );
        }
      }
    );
    return eslintRcJson;
  });
}