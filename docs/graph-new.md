# Graph proposal

```mermaid
graph TD;
  GetStarted(Get Started)-->NxIntro(Intro To Nx);;
  GetStarted-->Installation;
  GetStarted-->WhyNx(Why Nx);
  GetStarted-->5MinTutorialsNx(5 Min Tutorials);
    5MinTutorialsNx-->PackageBasedMonorepo(Package-Based monorepo);
    5MinTutorialsNx-->IntegratedMonorepo(Integrated monorepo);
    5MinTutorialsNx-->ReactStandalone(React standalone);
    5MinTutorialsNx-->AngularStandalone(Angular standalone);
    5MinTutorialsNx-->NodeStandalone(Node standalone);
  GetStarted-->CoreFeatures(Core Features);
    CoreFeatures-->RunTasks(Run Tasks);
    CoreFeatures-->CacheTaskResults(Cache Task Results);
    CoreFeatures-->ShareYourCache(Share Your Cache);
    CoreFeatures-->ExploretheGraph(Explore the Graph);
    CoreFeatures-->DistributeTaskExecution(Distribute Task Execution);
    CoreFeatures-->IntegratewithEditors(Integrate with Editors);
    CoreFeatures-->AutomateUpdatingDependencies(Automate Updating Dependencies);
  GetStarted-->PluginFeatures(Plugin Features);
    PluginFeatures-->UseTaskExecutors(Use Task Executors);
    PluginFeatures-->UseCodeGenerators(Use Code Generators);
    PluginFeatures-->EnforceProjectBoundaries(Enforce code boundaries);
  GetStarted-->Concepts;
    Concepts-->IntegratedReposPackage-BasedReposStandaloneApps(Integrated Repos vs. Package-Based Repos vs. Standalone Apps)
    Concepts-->MentalModel(Mental Model)
    Concepts-->Monorepos(Monorepos)
    Concepts-->HowCachingWorks(How Caching Works)
    Concepts-->ImproveWorstCaseCITimes(Improve Worst Case CI Times)
    Concepts-->TaskPipelineConfiguration(Task Pipeline Configuration)
    Concepts-->Affected(Affected)
    Concepts-->How-the-Project-Graph-is-Built(How the Project Graph is Built)
    Concepts-->Nx-Daemon(Nx Daemon)
    Concepts-->Architecture
      Architecture-->Folder-Structure(Folder Structure)
      Architecture-->Applications-and-Libraries(Applications and Libraries)
      Architecture-->Creating-Libraries(Creating Libraries)
      Architecture-->Library-Types(Library Types)
      Architecture-->Grouping-Libraries(Grouping Libraries)
      Architecture-->Buildable-and-Publishable-Libraries(Buildable and Publishable Libraries)
      Architecture-->Using-Nx-at-Enterprises(Using Nx at Enterprises)
      Architecture-->Micro-Frontend-Architecture(Micro Frontend Architecture)
      Architecture-->Dependency-Management(Dependency Management)
  GetStarted-->NxCloud(Nx Cloud)
    Nx-Cloud-->What-is-NxCloud(What is Nx Cloud);
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
    NxCloud-->NxCloudEnterprise(Running Nx Cloud Enterprise)
    NxCloud-->Illustrated-Distributed-Task-Execution(Illustrated Distributed Task Execution)

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

  Learn-->GettingStartedRecipes(Getting Started);
    GettingStartedRecipes-->SetUpANewWorkspace(Set up a new workspace)
    GettingStartedRecipes-->NPM/Yarn/PNPM-workspaces(NPM/Yarn/PNPM workspaces)
    GettingStartedRecipes-->Add-to-any-Project(Add to any Project)
    GettingStartedRecipes-->Nx-and-Lerna(Nx and Lerna)
    GettingStartedRecipes-->Preserving-Git-Histories(Preserving Git Histories)
    GettingStartedRecipes-->Manual-migration(Manual migration)
  Learn-->CoreRecipes(Core)
    CoreRecipes-->Define-Environment-Variables(Define Environment Variables)
    CoreRecipes-->Workspace-Watching(Workspace Watching)
    CoreRecipes-->Include-Assets-in-Build(Include Assets in Build)
    CoreRecipes-->Identify-Dependencies-Between-Folders(Identify Dependencies Between Folders)
    CoreRecipes-->Run-Root-Level-NPM-Scripts-with-Nx(Run Root-Level NPM Scripts with Nx)
    CoreRecipes-->JavaScript-and-TypeScript(JavaScript instead of TypeScript)
    CoreRecipes-->Using-ESLint-in-Nx-Workspaces(Using ESLint in Nx Workspaces)
    CoreRecipes-->Configuring-Browser-Support(Configuring Browser Support)
    CoreRecipes-->Rescope-Packages-from-nrwl-to-nx(Rescope Packages from nrwl to nx)
    CoreRecipes-->Customizing-Inputs(Customizing Inputs)
  Learn-->NxConsole(Nx Console)
    NxConsole-->Nx-Console-Telemetry(Nx Console Telemetry)
    NxConsole-->Nx-Console-Generate-Command(Nx Console Generate Command)
    NxConsole-->Nx-Console-Run-Command(Nx Console Run Command)
    NxConsole-->Nx-Console-Add-Dependency-Command(Nx Console Add Dependency Command)
    NxConsole-->Nx-Console-Project-Pane(Nx Console Project Pane)
    NxConsole-->Nx-Console-Keyboard-Shortcuts(Nx Console Keyboard Shortcuts)
  Learn-->DeepDive(Nx Cloud)
    DeepDive-->Authenticate-with-a-Single-Admin(Authenticate with a Single Admin)
    DeepDive-->Authenticate-with-GitHub(Authenticate with GitHub)
    DeepDive-->On-Prem-VM-Setup(On-Prem VM Setup)
    DeepDive-->Authenticate-with-GitLab(Authenticate with GitLab)
    DeepDive-->Authenticate-with-BitBucket(Authenticate with BitBucket)
    DeepDive-->Authenticate-via-SAML(Authenticate via SAML)
    DeepDive-->Advanced-Configuration(Advanced Configuration)
  Learn-->CI
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
  Learn-->Angular
    Angular-->From-Angular-CLI(From Angular CLI)
      From-Angular-CLI-->From-Angular-CLI-to-Integrated(From Angular CLI to Integrated)
      From-Angular-CLI-->From-Angular-CLI-Manually(From Angular CLI Manually)
      From-Angular-CLI-->From-Multiple-Angular-CLI-Repos(From Multiple Angular CLI Repos)
    Angular-->From-AngularJS(From AngularJS)
    Angular-->Use-Environment-Variables-in-Angular(Use Environment Variables in Angular)
    Angular-->Setup-Module-Federation-with-SSR-for-Angular-and-React(Setup Module Federation with SSR for Angular and React)
    Angular-->Advanced-Micro-Frontends-with-Angular-using-Dynamic-Federation(Advanced Micro Frontends with Angular using Dynamic Federation)
    Angular-->Setup-incremental-builds-for-Angular-applications(Setup Incremental builds for Angular applications)
    Angular-->Using-NgRx(Using NgRx)
    Angular-->Using-Data-Persistence-operators(Using Data Persistence operators)
    Angular-->Using-Tailwind-CSS-with-Angular-projects(Using Tailwind CSS with ngular projects)
    Angular-->Nx-Devkit-and-Angular-Devkit(Nx Devkit and Angular Devkit)
    Angular-->Nx-and-the-Angular-CLI(Nx and the Angular CLI)
  Learn-->React
    React-->From-CRA(From CRA)
    React-->Use-Environment-Variables-in-React(Use Environment Variables in React)
    React-->Setup-Module-Federation-with-SSR-for-Angular-and-React(Setup Module Federation with SSR for Angular and React)
    React-->React-Native-with-Nx(React Native with Nx)
    React-->Remix-with-Nx(Remix with Nx)
    React-->Adding-Images-Fonts-and-Files(Adding Images, Fonts, and Files)
    React-->JavaScript-and-TypeScript(JavaScript instead of TypeScript)
    React-->Using-Tailwind-CSS-in-React(Using Tailwind CSS in React)
    React-->React-18-Migration(React 18 Migration)
  Learn-->Executors
    Executors-->Use-Executor-Configurations(Use Executor Configurations)
    Executors-->Running-Custom-Commands(Running Custom Commands)
  Learn-->Module-Federation-and-Micro-Frontends(Module Federation and Micro Frontends)
    Module-Federation-and-Micro-Frontends-->Faster-Builds-with-Module-Federation(Faster Builds with Module Federation)
    Module-Federation-and-Micro-Frontends-->Nx-Micro-Frontend-Example(Nx Micro-Frontend Example)
  Learn-->Storybook
    Storybook-->Publishing-Storybook-One-main-Storybook-instance-for-all-projects(Publishing Storybook: One main Storybook instance for all projects)
    Storybook-->Publishing-Storybook-One-Storybook-instance-per-scope(Publishing Storybook: One Storybook instance per scope)
    Storybook-->Publishing-Storybook-One-main-Storybook-instance-using-Storybook-Composition(Publishing Storybook: One main Storybook instance using Storybook Composition)
  Learn-->Deployment
    Deployment-->Deploying-a-Node-App-to-Fly.io(Deploying a Node App to Fly.io)
    Deployment-->Add-and-Deploy-Netlify-Edge-Functions-with-Node(Add and Deploy Netlify Edge Functions with Node)
    Deployment-->Deploying-AWS-lambda-in-Node.js(Deploying AWS lambda in Node.js)
    Deployment-->Serverless-deployment-with-Deno-Deploy(Serverless deployment with Deno Deploy)
    Deployment-->Add-and-Deploy-Netlify-Edge-Functions-with-Deno(Add and Deploy Netlify Edge Functions with Deno)
    Deployment-->Deploying-Next.js-applications-to-Vercel(Deploying Next.js applications to Vercel)
  Learn-->Database
    Database-->Using-Prisma-with-NestJS(Using Prisma with NestJS)
    Database-->Using-Mongo-with-Fastify(Using Mongo with Fastify)
    Database-->Using-Redis-with-Fastify(Using Redis with Fastify)
    Database-->Using-Postgres-with-Fastify(Using Postgres with Fastify)
    Database-->Using-PlanetScale-with-Serverless-Fastify(Using PlanetScale with Serverless Fastify)
  Learn-->EnforceModuleBoundaries(Enforce Module Boundaries)
    EnforceModuleBoundaries-->Ban-Dependencies-with-Certain-Tags(Ban Dependencies with Certain Tags)
    EnforceModuleBoundaries-->Tag-in-Multiple-Dimensions(Tag in Multiple Dimensions)
    EnforceModuleBoundaries-->Ban-External-Imports(Ban External Imports)
    EnforceModuleBoundaries-->Tags-Allow-List(Tags Allow List)
  Learn-->PluginRecipes(Plugins);
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
  Learn-->AdvancedRecipes(Advanced)
    AdvancedRecipes-->Profiling-Build-Performance(Profiling Build Performance)
    AdvancedRecipes-->Advanced-Update-Process(Advanced Migration Process)
    AdvancedRecipes-->Disable-Graph-Links-Created-from-Analyzing-Source-Files(Disable Graph Links Created from Analyzing Source Files)
    AdvancedRecipes-->Troubleshoot-Cache-Misses(Troubleshoot Cache Misses)
    AdvancedRecipes-->Export-Project-Graph(Export Project Graph)
    AdvancedRecipes-->Resolve-Circular-Dependencies(Resolve Circular Dependencies)
    AdvancedRecipes-->Include-All-package.json-Files-as-Projects(Include All package.son Files as Projects)
    AdvancedRecipes-->Incremental-Builds(Incremental Builds)
    AdvancedRecipes-->Nx-and-the-Nx-Wrapper(Nx and the Nx Wrapper)
  Learn-->ExampleRepos(Example Repos)
    ExampleRepos-->Powering-Up-React-Development-With-Nx(Powering Up React Development With Nx)
    ExampleRepos-->Using-Apollo-GraphQL(Using Apollo GraphQL)
    ExampleRepos-->Large-Repo-and-Caching(Large Repo and Caching)
    ExampleRepos-->Large-Repo-and-DTE(Large Repo and DTE)

  Reference-->NxReference(Nx);
    NxReference-->Commands;
    NxReference-->Executors;
    NxReference-->nx.json;
    NxReference-->ProjectConfiguration(Project Configuration);
    NxReference-->.nxignore;
    NxReference-->EnvironmentVariables(Environment Variables);
  Reference-->NxCloudReference(Nx Cloud);
    NxCloudReference-->Configuration-Options(Configuration Options);
    NxCloudReference-->nx-cloud-CLI(nx-cloud CLI);
    NxCloudReference-->Environment-Variables(Environment Variables);
    NxCloudReference-->Server-API-Reference(Server API);
  Reference-->Glossary;
  Reference-->Changelog(Nx Changelog);
  Reference-->Release-Notes(Nx Cloud Release Notes);
```

## Section view

### Get Started

```mermaid
graph TD;
  GetStarted(Get Started)-->NxIntro(Intro To Nx);;
  GetStarted-->Installation;
  GetStarted-->WhyNx(Why Nx);
  GetStarted-->5MinTutorialsNx(5 Min Tutorials);
    5MinTutorialsNx-->PackageBasedMonorepo(Package-Based monorepo);
    5MinTutorialsNx-->IntegratedMonorepo(Integrated monorepo);
    5MinTutorialsNx-->ReactStandalone(React standalone);
    5MinTutorialsNx-->AngularStandalone(Angular standalone);
    5MinTutorialsNx-->NodeStandalone(Node standalone);
  GetStarted-->CoreFeatures(Core Features);
    CoreFeatures-->RunTasks(Run Tasks);
    CoreFeatures-->CacheTaskResults(Cache Task Results);
    CoreFeatures-->ShareYourCache(Share Your Cache);
    CoreFeatures-->ExploretheGraph(Explore the Graph);
    CoreFeatures-->DistributeTaskExecution(Distribute Task Execution);
    CoreFeatures-->IntegratewithEditors(Integrate with Editors);
    CoreFeatures-->AutomateUpdatingDependencies(Automate Updating Dependencies);
  GetStarted-->PluginFeatures(Plugin Features);
    PluginFeatures-->UseTaskExecutors(Use Task Executors);
    PluginFeatures-->UseCodeGenerators(Use Code Generators);
    PluginFeatures-->EnforceProjectBoundaries(Enforce code boundaries);
  GetStarted-->Concepts;
    Concepts-->IntegratedReposPackage-BasedReposStandaloneApps(Integrated Repos vs. Package-Based Repos vs. Standalone Apps)
    Concepts-->MentalModel(Mental Model)
    Concepts-->Monorepos(Monorepos)
    Concepts-->HowCachingWorks(How Caching Works)
    Concepts-->ImproveWorstCaseCITimes(Improve Worst Case CI Times)
    Concepts-->TaskPipelineConfiguration(Task Pipeline Configuration)
    Concepts-->Affected(Affected)
    Concepts-->How-the-Project-Graph-is-Built(How the Project Graph is Built)
    Concepts-->Nx-Daemon(Nx Daemon)
    Concepts-->Architecture
      Architecture-->Folder-Structure(Folder Structure)
      Architecture-->Applications-and-Libraries(Applications and Libraries)
      Architecture-->Creating-Libraries(Creating Libraries)
      Architecture-->Library-Types(Library Types)
      Architecture-->Grouping-Libraries(Grouping Libraries)
      Architecture-->Buildable-and-Publishable-Libraries(Buildable and Publishable Libraries)
      Architecture-->Using-Nx-at-Enterprises(Using Nx at Enterprises)
      Architecture-->Micro-Frontend-Architecture(Micro Frontend Architecture)
      Architecture-->Dependency-Management(Dependency Management)
  GetStarted-->NxCloud(Nx Cloud)
    Nx-Cloud-->What-is-NxCloud(What is Nx Cloud);
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
    NxCloud-->NxCloudEnterprise(Running Nx Cloud Enterprise)
    NxCloud-->Illustrated-Distributed-Task-Execution(Illustrated Distributed Task Execution)
```

### Learn

```mermaid
graph TD;
  Learn-->GettingStartedRecipes(Getting Started);
    GettingStartedRecipes-->SetUpANewWorkspace(Set up a new workspace)
    GettingStartedRecipes-->NPM/Yarn/PNPM-workspaces(NPM/Yarn/PNPM workspaces)
    GettingStartedRecipes-->Add-to-any-Project(Add to any Project)
    GettingStartedRecipes-->Nx-and-Lerna(Nx and Lerna)
    GettingStartedRecipes-->Preserving-Git-Histories(Preserving Git Histories)
    GettingStartedRecipes-->Manual-migration(Manual migration)
  Learn-->CoreRecipes(Core)
    CoreRecipes-->Define-Environment-Variables(Define Environment Variables)
    CoreRecipes-->Workspace-Watching(Workspace Watching)
    CoreRecipes-->Include-Assets-in-Build(Include Assets in Build)
    CoreRecipes-->Identify-Dependencies-Between-Folders(Identify Dependencies Between Folders)
    CoreRecipes-->Run-Root-Level-NPM-Scripts-with-Nx(Run Root-Level NPM Scripts with Nx)
    CoreRecipes-->JavaScript-and-TypeScript(JavaScript instead of TypeScript)
    CoreRecipes-->Using-ESLint-in-Nx-Workspaces(Using ESLint in Nx Workspaces)
    CoreRecipes-->Configuring-Browser-Support(Configuring Browser Support)
    CoreRecipes-->Rescope-Packages-from-nrwl-to-nx(Rescope Packages from nrwl to nx)
    CoreRecipes-->Customizing-Inputs(Customizing Inputs)
  Learn-->NxConsole(Nx Console)
    NxConsole-->Nx-Console-Telemetry(Nx Console Telemetry)
    NxConsole-->Nx-Console-Generate-Command(Nx Console Generate Command)
    NxConsole-->Nx-Console-Run-Command(Nx Console Run Command)
    NxConsole-->Nx-Console-Add-Dependency-Command(Nx Console Add Dependency Command)
    NxConsole-->Nx-Console-Project-Pane(Nx Console Project Pane)
    NxConsole-->Nx-Console-Keyboard-Shortcuts(Nx Console Keyboard Shortcuts)
  Learn-->DeepDive(Nx Cloud)
    DeepDive-->Authenticate-with-a-Single-Admin(Authenticate with a Single Admin)
    DeepDive-->Authenticate-with-GitHub(Authenticate with GitHub)
    DeepDive-->On-Prem-VM-Setup(On-Prem VM Setup)
    DeepDive-->Authenticate-with-GitLab(Authenticate with GitLab)
    DeepDive-->Authenticate-with-BitBucket(Authenticate with BitBucket)
    DeepDive-->Authenticate-via-SAML(Authenticate via SAML)
    DeepDive-->Advanced-Configuration(Advanced Configuration)
  Learn-->CI
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
  Learn-->Angular
    Angular-->From-Angular-CLI(From Angular CLI)
      From-Angular-CLI-->From-Angular-CLI-to-Integrated(From Angular CLI to Integrated)
      From-Angular-CLI-->From-Angular-CLI-Manually(From Angular CLI Manually)
      From-Angular-CLI-->From-Multiple-Angular-CLI-Repos(From Multiple Angular CLI Repos)
    Angular-->From-AngularJS(From AngularJS)
    Angular-->Use-Environment-Variables-in-Angular(Use Environment Variables in Angular)
    Angular-->Setup-Module-Federation-with-SSR-for-Angular-and-React(Setup Module Federation with SSR for Angular and React)
    Angular-->Advanced-Micro-Frontends-with-Angular-using-Dynamic-Federation(Advanced Micro Frontends with Angular using Dynamic Federation)
    Angular-->Setup-incremental-builds-for-Angular-applications(Setup Incremental builds for Angular applications)
    Angular-->Using-NgRx(Using NgRx)
    Angular-->Using-Data-Persistence-operators(Using Data Persistence operators)
    Angular-->Using-Tailwind-CSS-with-Angular-projects(Using Tailwind CSS with ngular projects)
    Angular-->Nx-Devkit-and-Angular-Devkit(Nx Devkit and Angular Devkit)
    Angular-->Nx-and-the-Angular-CLI(Nx and the Angular CLI)
  Learn-->React
    React-->From-CRA(From CRA)
    React-->Use-Environment-Variables-in-React(Use Environment Variables in React)
    React-->Setup-Module-Federation-with-SSR-for-Angular-and-React(Setup Module Federation with SSR for Angular and React)
    React-->React-Native-with-Nx(React Native with Nx)
    React-->Remix-with-Nx(Remix with Nx)
    React-->Adding-Images-Fonts-and-Files(Adding Images, Fonts, and Files)
    React-->JavaScript-and-TypeScript(JavaScript instead of TypeScript)
    React-->Using-Tailwind-CSS-in-React(Using Tailwind CSS in React)
    React-->React-18-Migration(React 18 Migration)
  Learn-->Executors
    Executors-->Use-Executor-Configurations(Use Executor Configurations)
    Executors-->Running-Custom-Commands(Running Custom Commands)
  Learn-->Module-Federation-and-Micro-Frontends(Module Federation and Micro Frontends)
    Module-Federation-and-Micro-Frontends-->Faster-Builds-with-Module-Federation(Faster Builds with Module Federation)
    Module-Federation-and-Micro-Frontends-->Nx-Micro-Frontend-Example(Nx Micro-Frontend Example)
  Learn-->Storybook
    Storybook-->Publishing-Storybook-One-main-Storybook-instance-for-all-projects(Publishing Storybook: One main Storybook instance for all projects)
    Storybook-->Publishing-Storybook-One-Storybook-instance-per-scope(Publishing Storybook: One Storybook instance per scope)
    Storybook-->Publishing-Storybook-One-main-Storybook-instance-using-Storybook-Composition(Publishing Storybook: One main Storybook instance using Storybook Composition)
  Learn-->Deployment
    Deployment-->Deploying-a-Node-App-to-Fly.io(Deploying a Node App to Fly.io)
    Deployment-->Add-and-Deploy-Netlify-Edge-Functions-with-Node(Add and Deploy Netlify Edge Functions with Node)
    Deployment-->Deploying-AWS-lambda-in-Node.js(Deploying AWS lambda in Node.js)
    Deployment-->Serverless-deployment-with-Deno-Deploy(Serverless deployment with Deno Deploy)
    Deployment-->Add-and-Deploy-Netlify-Edge-Functions-with-Deno(Add and Deploy Netlify Edge Functions with Deno)
    Deployment-->Deploying-Next.js-applications-to-Vercel(Deploying Next.js applications to Vercel)
  Learn-->Database
    Database-->Using-Prisma-with-NestJS(Using Prisma with NestJS)
    Database-->Using-Mongo-with-Fastify(Using Mongo with Fastify)
    Database-->Using-Redis-with-Fastify(Using Redis with Fastify)
    Database-->Using-Postgres-with-Fastify(Using Postgres with Fastify)
    Database-->Using-PlanetScale-with-Serverless-Fastify(Using PlanetScale with Serverless Fastify)
  Learn-->EnforceModuleBoundaries(Enforce Module Boundaries)
    EnforceModuleBoundaries-->Ban-Dependencies-with-Certain-Tags(Ban Dependencies with Certain Tags)
    EnforceModuleBoundaries-->Tag-in-Multiple-Dimensions(Tag in Multiple Dimensions)
    EnforceModuleBoundaries-->Ban-External-Imports(Ban External Imports)
    EnforceModuleBoundaries-->Tags-Allow-List(Tags Allow List)
  Learn-->PluginRecipes(Plugins);
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
  Learn-->AdvancedRecipes(Advanced)
    AdvancedRecipes-->Profiling-Build-Performance(Profiling Build Performance)
    AdvancedRecipes-->Advanced-Update-Process(Advanced Migration Process)
    AdvancedRecipes-->Disable-Graph-Links-Created-from-Analyzing-Source-Files(Disable Graph Links Created from Analyzing Source Files)
    AdvancedRecipes-->Troubleshoot-Cache-Misses(Troubleshoot Cache Misses)
    AdvancedRecipes-->Export-Project-Graph(Export Project Graph)
    AdvancedRecipes-->Resolve-Circular-Dependencies(Resolve Circular Dependencies)
    AdvancedRecipes-->Include-All-package.json-Files-as-Projects(Include All package.son Files as Projects)
    AdvancedRecipes-->Incremental-Builds(Incremental Builds)
    AdvancedRecipes-->Nx-and-the-Nx-Wrapper(Nx and the Nx Wrapper)
  Learn-->ExampleRepos(Example Repos)
    ExampleRepos-->Powering-Up-React-Development-With-Nx(Powering Up React Development With Nx)
    ExampleRepos-->Using-Apollo-GraphQL(Using Apollo GraphQL)
    ExampleRepos-->Large-Repo-and-Caching(Large Repo and Caching)
    ExampleRepos-->Large-Repo-and-DTE(Large Repo and DTE)
```

### Plugins

```mermaid
graph TD;
  Plugins-->PluginsIntro(Intro);
    PluginsIntro-->Getting-Started-with-Plugins(Getting Started with Plugins)
    PluginsIntro-->Plugin-Registry(Plugin Registry)
      Plugin-Registry-->OfficialPlugins(Official)
        OfficialPlugins-->PackagesWorkspace
        OfficialPlugins-->PackagesDevkit
        OfficialPlugins-->PackagesAngular
        OfficialPlugins-->PackagesCypress
        OfficialPlugins-->PackagesDetox
        OfficialPlugins-->PackagesEsbuild
        OfficialPlugins-->PackagesEslint-Plugin
        OfficialPlugins-->PackagesExpo
        OfficialPlugins-->PackagesExpress
        OfficialPlugins-->PackagesJest
        OfficialPlugins-->PackagesJs
        OfficialPlugins-->PackagesLinter
        OfficialPlugins-->PackagesNest
        OfficialPlugins-->PackagesNext
        OfficialPlugins-->PackagesNode
        OfficialPlugins-->PackagesPlugin
        OfficialPlugins-->PackagesReact
        OfficialPlugins-->PackagesReact-Native
        OfficialPlugins-->PackagesRollup
        OfficialPlugins-->PackagesRspack
        OfficialPlugins-->PackagesStorybook
        OfficialPlugins-->PackagesVite
        OfficialPlugins-->PackagesWeb
        OfficialPlugins-->PackagesWebpack
      Plugin-Registry-->CommunityPlugins(Community)
        Community-->nx-dotnet
        Community-->qwik-nx
        Community-->jscutlery-semver(jscutlery/semver)
      Plugin-Registry-->ThirdParty(Third-party)
  Plugins-->5MinTutorialsPlugins(5 Min Tutorials);
    5MinTutorialsPlugins-->Create-a-Local-Plugin(Create a Local Plugin)
    5MinTutorialsPlugins-->Maintain-a-Published-Plugin(Maintain a Published Plugin)
```

### API Reference

```mermaid
graph TD;
  Reference(API Reference)-->NxReference(Nx);
    NxReference-->Commands;
    NxReference-->Executors;
    NxReference-->nx.json;
    NxReference-->ProjectConfiguration(Project Configuration);
    NxReference-->.nxignore;
    NxReference-->EnvironmentVariables(Environment Variables);
  Reference-->NxCloudReference(Nx Cloud);
    NxCloudReference-->Configuration-Options(Configuration Options);
    NxCloudReference-->nx-cloud-CLI(nx-cloud CLI);
    NxCloudReference-->Environment-Variables(Environment Variables);
    NxCloudReference-->Server-API-Reference(Server API);
  Reference-->Glossary;
  Reference-->Changelog(Nx Changelog);
  Reference-->Release-Notes(Nx Cloud Release Notes);
```

# Additional notes

- `Nx-and-Turborepo(Nx and Turborepo)` should be just a link from `Why Nx?`, not a menu item.
- The same goes for some of the concepts in the core area
- Official packages should have just a link to them, optionally mutating the side menu with their own properties
