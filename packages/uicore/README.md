# UI Core: Reinsurance Broking Platform - ReactJS Application

## Description

UI components built in isolation. This can be shared in all your applications without installing. It can be bundled and shared with external applications

1. Broking platform for the organization

### Folder Structure (Monorepo)

1. `src` contains the source code
2. `assets` contains svg icons and images
3. `components` contains shared and application specific components
4. `lib` contain mostly data sources eg. utils, hooks.

### How to run the project

1. Clone the repo
2. Run `yarn install` to install all dependencies
3. Download [Turborepo](https://turbo.build/) and install globally

#### Commands to run admin application in dev

1. The uicore is not built manually before used locally.
   `react vite` by default transpile the source code.

2. `Nextjs` The uicore is not built manually before used locally.
   Add

```javascrpt
transpilePackages: [<package-name>],
```

to your nextjs configuation file.

#### The command to build the project

1. admin `yarn up:bld`
2. All applications `yarn turbo:build`
