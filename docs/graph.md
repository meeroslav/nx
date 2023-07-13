```mermaid
graph TD;
    Nx-->GettingStarted;
      GettingStarted(Getting Started)-->NxIntro(Intro To Nx);
      GettingStarted(Getting Started)-->Installation;
      GettingStarted(Getting Started)-->WhyNx(Why Nx);
      GettingStarted(Getting Started)-->5MinTutorialsNx(5 Min Tutorials);
        5MinTutorialsNx-->PackageBasedMonorepo(Package-Based monorepo);
        5MinTutorialsNx-->IntegratedMonorepo(Integrated monorepo);
        5MinTutorialsNx-->ReactStandalone(React standalone);
        5MinTutorialsNx-->AngularStandalone(Angular standalone);
        5MinTutorialsNx-->NodeStandalone(Node standalone);
    Nx-->CoreFeatures(Core Features);
      CoreFeatures-->RunTasks(Run Tasks);
      CoreFeatures-->CacheTaskResults(Cache Task Results);
      CoreFeatures-->ShareYourCache(Share Your Cache);
      CoreFeatures-->ExploretheGraph(Explore the Graph);
      CoreFeatures-->DistributeTaskExecution(Distribute Task Execution);
      CoreFeatures-->IntegratewithEditors(Integrate with Editors);
      CoreFeatures-->AutomateUpdatingDependencies(Automate Updating Dependencies);
      CoreFeatures-->EnforceProjectBoundaries(Enforce Project Boundaries);
    Nx-->PluginFeatures(Plugin Features);
      PluginFeatures-->UseTaskExecutors(Use Task Executors);
      PluginFeatures-->UseCodeGenerators(Use Code Generators);
    Nx-->Concepts;
      Concepts-->IntegratedReposPackage-BasedReposStandaloneApps(Integrated Repos vs. Package-Based Repos vs. Standalone Apps)
      Concepts-->MentalModel(Mental Model)
      Concepts-->HowCachingWorks(How Caching Works)
      Concepts-->ImproveWorstCaseCITimes(Improve Worst Case CI Times)
      Concepts-->TaskPipelineConfiguration(Task Pipeline Configuration)
      Concepts-->Affected(Affected)
      Concepts-->MoreConcepts(More Concept Guides)
        MoreConcepts-->Customizing-Inputs(Customizing Inputs)
        MoreConcepts-->Incremental-Builds(Incremental Builds)
        MoreConcepts-->Illustrated-Distributed-Task-Execution(Illustrated Distributed Task Execution)
        MoreConcepts-->Nx-and-Turborepo(Nx and Turborepo)
        MoreConcepts-->Monorepos(Monorepos)
        MoreConcepts-->Dependency-Management(Dependency Management)
        MoreConcepts-->Code-Sharing(Code Sharing)
        MoreConcepts-->Using-Nx-at-Enterprises(Using Nx at Enterprises)
        MoreConcepts-->Nx-Daemon(Nx Daemon)
        MoreConcepts-->Nx-and-the-Angular-CLI(Nx and the Angular CLI)
        MoreConcepts-->Folder-Structure(Folder Structure)
        MoreConcepts-->Nx-Devkit-and-Angular-Devkit(Nx Devkit and Angular Devkit)
        MoreConcepts-->Micro-Frontend-Architecture(Micro Frontend Architecture)
        MoreConcepts-->Applications-and-Libraries(Applications and Libraries)
        MoreConcepts-->Creating-Libraries(Creating Libraries)
        MoreConcepts-->Library-Types(Library Types)
        MoreConcepts-->Grouping-Libraries(Grouping Libraries)
        MoreConcepts-->Buildable-and-Publishable-Libraries(Buildable and Publishable Libraries)
        MoreConcepts-->How-the-Project-Graph-is-Built(How the Project Graph is Built)
        MoreConcepts-->Nx-and-the-Nx-Wrapper(Nx and the Nx Wrapper)
        MoreConcepts-->Managing-your-Global-Nx-Installation(Managing your Global Nx Installation)
    Nx-->NxReference(Nx Reference);
      NxReference-->Commands;
      NxReference-->nx.json;
      NxReference-->ProjectConfiguration(Project Configuration);
      NxReference-->.nxignore;
      NxReference-->EnvironmentVariables(Environment Variables);
      NxReference-->Packages;
      NxReference-->NxDevkit(Nx Devkit);
      NxReference-->Glossary;
      NxReference-->Changelog;

    NxCloud(Nx Cloud)-->Nx-Cloud-Intro(Nx Cloud Intro);
      Nx-Cloud-Intro-->What-is-NxCloud(What is Nx Cloud);
    NxCloud-->SetUp(Set Up);
      SetUp-->Record-Non-Nx-Commands(Record Non-Nx Commands);
      SetUp-->Enable-GitHub-PR-Integration(Enable GitHub PR Integration);
      SetUp-->Enable-Bitbucket-Cloud-PR-Integration(Enable Bitbucket Cloud PR Integration);
      SetUp-->Enable-GitLab-MR-Integration(Enable GitLab MR Integration);
    NxCloud-->AccountManagement(Account Management);
      AccountManagement-->Users
      AccountManagement-->Authenticate-with-Google-Identity(Authenticate with Google Identity)
      AccountManagement-->Access-Tokens(Access Tokens)
      AccountManagement-->Security-Scenarios(Security Scenarios)
      AccountManagement-->End-to-End-Encryption(End to End Encryption)
    NxCloud-->DeepDive(Deep dive - Enterprise + On Prem);
      DeepDive-->Get-Started(Get Started)
      DeepDive-->Authenticate-with-a-Single-Admin(Authenticate with a Single Admin)
      DeepDive-->Authenticate-with-GitHub(Authenticate with GitHub)
      DeepDive-->On-Prem-VM-Setup(On-Prem VM Setup)
      DeepDive-->Authenticate-with-GitLab(Authenticate with GitLab)
      DeepDive-->Authenticate-with-BitBucket(Authenticate with BitBucket)
      DeepDive-->Authenticate-via-SAML(Authenticate via SAML)
      DeepDive-->Advanced-Configuration(Advanced Configuration)
    NxCloud-->NxCloudReference(Reference);
      NxCloudReference-->Configuration-Options(Configuration Options);
      NxCloudReference-->nx-cloud-CLI(nx-cloud CLI);
      NxCloudReference-->Environment-Variables(Environment Variables);
      NxCloudReference-->Server-API-Reference(Server API Reference);
      NxCloudReference-->Release-Notes(Release Notes);

    Packages(Official Packages Reference)-->PackagesNx(Nx)
      PackagesNx-->PackagesNxDocs(Documents)
      PackagesNx-->PackagesNxExecutors(Executors)
    Packages-->PackagesWorkspace(Workspace)
      PackagesWorkspace-->PackagesWorkspaceDocs(Documents)
      PackagesWorkspace-->PackagesWorkspaceExecutors(Executors)
      PackagesWorkspace-->PackagesWorkspaceGenerators(Generators)
    Packages-->PackagesDevkit(Devkit)
      PackagesDevkit-->PackagesDevkitDocs(Documents)
    Packages-->PackagesAngular(Angular)
      PackagesAngular-->PackagesAngularDocs(Documents)
      PackagesAngular-->PackagesAngularExecutors(Executors)
      PackagesAngular-->PackagesAngularGenerators(Generators)
    Packages-->PackagesCypress(Cypress)
      PackagesCypress-->PackagesCypressDocs(Documents)
      PackagesCypress-->PackagesCypressExecutors(Executors)
      PackagesCypress-->PackagesCypressGenerators(Generators)
    Packages-->PackagesDetox(Detox)
      PackagesDetox-->PackagesDetoxDocs(Documents)
      PackagesDetox-->PackagesDetoxExecutors(Executors)
      PackagesDetox-->PackagesDetoxGenerators(Generators)
    Packages-->PackagesEsbuild(Esbuild)
      PackagesEsbuild-->PackagesEsbuildDocs(Documents)
      PackagesEsbuild-->PackagesEsbuildExecutors(Executors)
      PackagesEsbuild-->PackagesEsbuildGenerators(Generators)
    Packages-->PackagesEslint-Plugin(Eslint Plugin)
      PackagesEslint-->PackagesEslintDocs(Documents)
    Packages-->PackagesExpo(Expo)
      PackagesExpo-->PackagesExpoDocs(Documents)
      PackagesExpo-->PackagesExpoExecutors(Executors)
      PackagesExpo-->PackagesExpoGenerators(Generators)
    Packages-->PackagesExpress(Express)
      PackagesExpress-->PackagesExpressDocs(Documents)
      PackagesExpress-->PackagesExpressGenerators(Generators)
    Packages-->PackagesJest(Jest)
      PackagesJest-->PackagesJestDocs(Documents)
      PackagesJest-->PackagesJestExecutors(Executors)
      PackagesJest-->PackagesJestGenerators(Generators)
    Packages-->PackagesJs(Js)
      PackagesJs-->PackagesJsDocs(Documents)
      PackagesJs-->PackagesJsExecutors(Executors)
      PackagesJs-->PackagesJsGenerators(Generators)
    Packages-->PackagesLinter(Linter)
      PackagesLinter-->PackagesLinterDocs(Documents)
      PackagesLinter-->PackagesLinterExecutors(Executors)
      PackagesLinter-->PackagesLinterGenerators(Generators)
    Packages-->PackagesNest(Nest)
      PackagesNest-->PackagesNestDocs(Documents)
      PackagesNest-->PackagesNestGenerators(Generators)
    Packages-->PackagesNext(Next)
      PackagesNext-->PackagesNextDocs(Documents)
      PackagesNext-->PackagesNextExecutors(Executors)
      PackagesNext-->PackagesNextGenerators(Generators)
    Packages-->PackagesNode(Node)
      PackagesNode-->PackagesNodeDocs(Documents)
      PackagesNode-->PackagesNodeExecutors(Executors)
    Packages-->PackagesPlugin(Plugin)
      PackagesPlugin-->PackagesPluginDocs(Documents)
      PackagesPlugin-->PackagesPluginExecutors(Executors)
      PackagesPlugin-->PackagesPluginGenerators(Generators)
    Packages-->PackagesReact(React)
      PackagesReact-->PackagesReactDocs(Documents)
      PackagesReact-->PackagesReactExecutors(Executors)
      PackagesReact-->PackagesReactGenerators(Generators)
    Packages-->PackagesReact-Native(React Native)
      PackagesReact-->PackagesReactDocs(Documents)
      PackagesReact-->PackagesReactExecutors(Executors)
      PackagesReact-->PackagesReactGenerators(Generators)
    Packages-->PackagesRollup(Rollup)
      PackagesRollup-->PackagesRollupExecutors(Executors)
      PackagesRollup-->PackagesRollupGenerators(Generators)
    Packages-->PackagesRspack(Rspack)
      PackagesRspack-->PackagesRspackDocs(Documents)
      PackagesRspack-->PackagesRspackExecutors(Executors)
      PackagesRspack-->PackagesRspackGenerators(Generators)
    Packages-->PackagesStorybook(Storybook)
      PackagesStorybook-->PackagesStorybookDocs(Documents)
      PackagesStorybook-->PackagesStorybookExecutors(Executors)
      PackagesStorybook-->PackagesStorybookGenerators(Generators)
    Packages-->PackagesVite(Vite)
      PackagesVite-->PackagesViteDocs(Documents)
      PackagesVite-->PackagesViteExecutors(Executors)
      PackagesVite-->PackagesViteGenerators(Generators)
    Packages-->PackagesWeb(Web)
      PackagesWeb-->PackagesWebDocs(Documents)
      PackagesWeb-->PackagesWebExecutors(Executors)
      PackagesWeb-->PackagesWebGenerators(Generators)
    Packages-->PackagesWebpack(Webpack)
      PackagesWebpack-->PackagesWebpackDocs(Documents)
      PackagesWebpack-->PackagesWebpackExecutors(Executors)
      PackagesWebpack-->PackagesWebpackGenerators(Generators)

    Plugins-->PluginsIntro(Intro);
      PluginsIntro-->Getting-Started-with-Plugins(Getting Started with Plugins)
      PluginsIntro-->Plugin-Registry(Plugin Registry)
        Plugin-Registry-->PackagesNx
        Plugin-Registry-->PackagesWorkspace
        Plugin-Registry-->PackagesDevkit
        Plugin-Registry-->PackagesAngular
        Plugin-Registry-->PackagesCypress
        Plugin-Registry-->PackagesDetox
        Plugin-Registry-->PackagesEsbuild
        Plugin-Registry-->PackagesEslint-Plugin
        Plugin-Registry-->PackagesExpo
        Plugin-Registry-->PackagesExpress
        Plugin-Registry-->PackagesJest
        Plugin-Registry-->PackagesJs
        Plugin-Registry-->PackagesLinter
        Plugin-Registry-->PackagesNest
        Plugin-Registry-->PackagesNext
        Plugin-Registry-->PackagesNode
        Plugin-Registry-->PackagesPlugin
        Plugin-Registry-->PackagesReact
        Plugin-Registry-->PackagesReact-Native
        Plugin-Registry-->PackagesRollup
        Plugin-Registry-->PackagesRspack
        Plugin-Registry-->PackagesStorybook
        Plugin-Registry-->PackagesVite
        Plugin-Registry-->PackagesWeb
        Plugin-Registry-->PackagesWebpack
        Plugin-Registry-->ExternalPlugins(...External links to 3rd-party plugins)
    Plugins-->5MinTutorialsPlugins(5 Min Tutorials);
      5MinTutorialsPlugins-->Create-a-Local-Plugin(Create a Local Plugin)
      5MinTutorialsPlugins-->Maintain-a-Published-Plugin(Maintain a Published Plugin)
    Plugins-->PluginRecipes(Recipes);
      PluginRecipes-->Write-a-Simple-Executor(Write a Simple Executor)
      PluginRecipes-->Compose-Executors(Compose Executors)
      PluginRecipes-->Write-a-Simple-Generator(Write a Simple Generator)
      PluginRecipes-->Compose-Generators(Compose Generators)
      PluginRecipes-->Provide-Options-for-Generators(Provide Options for Generators)
      PluginRecipes-->Create-Files(Create Files)
      PluginRecipes-->Modify-Files(Modify Files)
      PluginRecipes-->Write-a-Migration(Write a Migration)
      PluginRecipes-->Create-a-Preset(Create a Preset)
      PluginRecipes-->Modify-the-Project-Graph(Modify the Project Graph)
      PluginRecipes-->Identify-Custom-Projects(Identify Custom Projects)

    Recipes-->GettingStartedRecipes(Getting Started);
      GettingStartedRecipes-->SetUpANewWorkspace(Set up a new workspace)
    Recipes-->NxConsole(Nx Console)
      NxConsole-->Nx-Console-Telemetry(Nx Console Telemetry)
      NxConsole-->Nx-Console-Generate-Command(Nx Console Generate Command)
      NxConsole-->Nx-Console-Run-Command(Nx Console Run Command)
      NxConsole-->Nx-Console-Add-Dependency-Command(Nx Console Add Dependency Command)
      NxConsole-->Nx-Console-Project-Pane(Nx Console Project Pane)
      NxConsole-->Nx-Console-Keyboard-Shortcuts(Nx Console Keyboard Shortcuts)
    Recipes-->CI
      CI-->CI-Setup(CI Setup)
      CI-->Prepare-applications-for-deployment-via-CI(Prepare applications for deployment via CI)
      CI-->Setting-up-Azure-Pipelines(Setting up Azure Pipelines)
      CI-->Find-the-Last-Successful-Commit-in-Azure-Pipelines(Find the Last Successful Commit in Azure Pipelines)
      CI-->Setting-up-CircleCI(Setting up CircleCI)
      CI-->Setting-up-GitHub-Actions(Setting up GitHub Actions)
      CI-->Setting-up-Jenkins(Setting up Jenkins)
      CI-->Setting-up-GitLab(Setting up GitLab)
      CI-->Setting-up-Bitbucket(Setting up Bitbucket)
      CI-->Troubleshooting-Nx-Install-Issues(Troubleshooting Nx Install Issues)
    Recipes-->AdoptingNx(Adopting Nx)
      AdoptingNx-->NPM/Yarn/PNPM-workspaces(NPM/Yarn/PNPM workspaces)
      AdoptingNx-->Add-to-any-Project(Add to any Project)
      AdoptingNx-->From-CRA(From CRA)
      AdoptingNx-->From-Angular-CLI(From Angular CLI)
      AdoptingNx-->Nx-and-Lerna(Nx and Lerna)
      AdoptingNx-->From-AngularJS(From AngularJS)
      AdoptingNx-->Preserving-Git-Histories(Preserving Git Histories)
      AdoptingNx-->Manual-migration(Manual migration)
    Recipes-->AdoptingNxFromAngularCLI(Adopting Nx From Angular CLI)
      AdoptingNxFromAngularCLI-->From-Angular-CLI(From Angular CLI)
      AdoptingNxFromAngularCLI-->From-Angular-CLI-to-Integrated(From Angular CLI to Integrated)
      AdoptingNxFromAngularCLI-->From-Angular-CLI-Manually(From Angular CLI Manually)
      AdoptingNxFromAngularCLI-->From-Multiple-Angular-CLI-Repos(From Multiple Angular CLI Repos)
    Recipes-->Executors
      Executors-->Use-Executor-Configurations(Use Executor Configurations)
      Executors-->Running-Custom-Commands(Running Custom Commands)
    Recipes-->EnvironmentVariablesRecipes(Environment Variables)
      EnvironmentVariablesRecipes-->Define-Environment-Variables(Define Environment Variables)
      EnvironmentVariablesRecipes-->Use-Environment-Variables-in-React(Use Environment Variables in React)
      EnvironmentVariablesRecipes-->Use-Environment-Variables-in-Angular(Use Environment Variables in Angular)
    Recipes-->Module-Federation-and-Micro-Frontends(Module Federation and Micro Frontends)
      Module-Federation-and-Micro-Frontends-->Faster-Builds-with-Module-Federation(Faster Builds with Module Federation)
      Module-Federation-and-Micro-Frontends-->Setup-Module-Federation-with-SSR-for-Angular-and-React(Setup Module Federation with SSR for Angular and React)
      Module-Federation-and-Micro-Frontends-->Advanced-Micro-Frontends-with-Angular-using-Dynamic-Federation(Advanced Micro Frontends with Angular using Dynamic Federation)
      Module-Federation-and-Micro-Frontends-->Nx-Micro-Frontend-Example(Nx Micro-Frontend Example)
    Recipes-->Storybook
      Storybook-->Publishing-Storybook-One-main-Storybook-instance-for-all-projects(Publishing Storybook: One main Storybook instance for all projects)
      Storybook-->Publishing-Storybook-One-Storybook-instance-per-scope(Publishing Storybook: One Storybook instance per scope)
      Storybook-->Publishing-Storybook-One-main-Storybook-instance-using-Storybook-Composition(Publishing Storybook: One main Storybook instance using Storybook Composition)
    Recipes-->Deployment
      Deployment-->Deploying-a-Node-App-to-Fly.io(Deploying a Node App to Fly.io)
      Deployment-->Add-and-Deploy-Netlify-Edge-Functions-with-Node(Add and Deploy Netlify Edge Functions with Node)
      Deployment-->Deploying-AWS-lambda-in-Node.js(Deploying AWS lambda in Node.js)
      Deployment-->Serverless-deployment-with-Deno-Deploy(Serverless deployment with Deno Deploy)
      Deployment-->Add-and-Deploy-Netlify-Edge-Functions-with-Deno(Add and Deploy Netlify Edge Functions with Deno)
      Deployment-->Deploying-Next.js-applications-to-Vercel(Deploying Next.js applications to Vercel)
    Recipes-->Database
      Database-->Using-Prisma-with-NestJS(Using Prisma with NestJS)
      Database-->Using-Mongo-with-Fastify(Using Mongo with Fastify)
      Database-->Using-Redis-with-Fastify(Using Redis with Fastify)
      Database-->Using-Postgres-with-Fastify(Using Postgres with Fastify)
      Database-->Using-PlanetScale-with-Serverless-Fastify(Using PlanetScale with Serverless Fastify)
    Recipes-->EnforceModuleBoundaries(Enforce Module Boundaries)
      EnforceModuleBoundaries-->Ban-Dependencies-with-Certain-Tags(Ban Dependencies with Certain Tags)
      EnforceModuleBoundaries-->Tag-in-Multiple-Dimensions(Tag in Multiple Dimensions)
      EnforceModuleBoundaries-->Ban-External-Imports(Ban External Imports)
      EnforceModuleBoundaries-->Tags-Allow-List(Tags Allow List)
    Recipes-->ExampleRepos(Example Repos)
      ExampleRepos-->Powering-Up-React-Development-With-Nx(Powering Up React Development With Nx)
      ExampleRepos-->Using-Apollo-GraphQL(Using Apollo GraphQL)
      ExampleRepos-->Large-Repo-and-Caching(Large Repo and Caching)
      ExampleRepos-->Large-Repo-and-DTE(Large Repo and DTE)
    Recipes-->OtherRecipes(Other)
      OtherRecipes-->Run-Root-Level-NPM-Scripts-with-Nx(Run Root-Level NPM Scripts with Nx)
      OtherRecipes-->Disable-Graph-Links-Created-from-Analyzing-Source-Files(Disable raph Links Created from Analyzing Source Files)
      OtherRecipes-->Workspace-Watching(Workspace Watching)
      OtherRecipes-->Advanced-Update-Process(Advanced Update Process)
      OtherRecipes-->JavaScript-and-TypeScript(JavaScript and TypeScript)
      OtherRecipes-->React-Native-with-Nx(React Native with Nx)
      OtherRecipes-->Remix-with-Nx(Remix with Nx)
      OtherRecipes-->Adding-Images-Fonts-and-Files(Adding Images, Fonts, and Files)
      OtherRecipes-->Setup-incremental-builds-for-Angular-applications(Setup Incremental builds for Angular applications)
      OtherRecipes-->Profiling-Build-Performance(Profiling Build Performance)
      OtherRecipes-->Using-ESLint-in-Nx-Workspaces(Using ESLint in Nx Workspaces)
      OtherRecipes-->Configuring-Browser-Support(Configuring Browser Support)
      OtherRecipes-->Using-Tailwind-CSS-in-React(Using Tailwind CSS in React)
      OtherRecipes-->React-18-Migration(React 18 Migration)
      OtherRecipes-->Using-Tailwind-CSS-with-Angular-projects(Using Tailwind CSS with ngular projects)
      OtherRecipes-->Using-NgRx(Using NgRx)
      OtherRecipes-->Using-Data-Persistence-operators(Using Data Persistence operators)
      OtherRecipes-->Troubleshoot-Cache-Misses(Troubleshoot Cache Misses)
      OtherRecipes-->Export-Project-Graph(Export Project Graph)
      OtherRecipes-->Resolve-Circular-Dependencies(Resolve Circular Dependencies)
      OtherRecipes-->Include-All-package.json-Files-as-Projects(Include All package.son Files as Projects)
      OtherRecipes-->Include-Assets-in-Build(Include Assets in Build)
      OtherRecipes-->Identify-Dependencies-Between-Folders(Identify Dependencies Between Folders)
      OtherRecipes-->Rescope-Packages-from-nrwl-to-nx(Rescope Packages from nrwl to nx)
      OtherRecipes-->Standalone-NgRx-APIs(Standalone NgRx APIs)
```
