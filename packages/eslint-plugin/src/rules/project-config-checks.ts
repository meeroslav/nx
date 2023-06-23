import { AST } from 'jsonc-eslint-parser';
import { normalizePath, workspaceRoot } from '@nx/devkit';
import { createESLintRule } from '../utils/create-eslint-rule';
import { findProject, getSourceFilePath } from '../utils/runtime-lint-utils';
import { readProjectGraph } from '../utils/project-graph-utils';

export const RULE_NAME = 'project-config-checks';

export type Options = [
  {
    allowedTags?: string[];
  }
];

export type MessageIds = 'invalidTag';

export default createESLintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: `Checks dependencies in project's package.json for version mismatches`,
      recommended: 'error',
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
      },
    ],
    messages: {
      invalidTag: 'Tag "{{tag}}" does not match the expected {{validTags}}',
    },
  },
  defaultOptions: [
    {
      allowedTags: undefined,
    },
  ],
  create(context, [{ allowedTags }]) {
    if (!(context.parserServices as any).isJSON) {
      return {};
    }
    const fileName = normalizePath(context.getFilename());

    // support only package.json and project.json
    if (
      !fileName.endsWith('/package.json') &&
      !fileName.endsWith('/project.json')
    ) {
      return {};
    }

    const projectPath = normalizePath(globalThis.projectPath || workspaceRoot);
    const sourceFilePath = getSourceFilePath(fileName, projectPath);
    const { projectGraph, projectRootMappings, projectFileMap } =
      readProjectGraph(RULE_NAME);

    if (!projectGraph) {
      return {};
    }

    const sourceProject = findProject(
      projectGraph,
      projectRootMappings,
      sourceFilePath
    );

    // check if source project exists
    if (!sourceProject) {
      return {};
    }

    const prefix = fileName.endsWith('/package.json')
      ? 'JSONExpressionStatement > JSONObjectExpression > JSONProperty[key.value=nx] > JSONObjectExpression'
      : 'JSONExpressionStatement > JSONObjectExpression';

    return {
      [`${prefix} > JSONProperty[key.value=tags] > JSONArrayExpression > JSONLiteral`]:
        (node: AST.JSONLiteral) => {
          if (allowedTags) {
            // TODO: check if tag is valid
          }
        },
    };
  },
});
