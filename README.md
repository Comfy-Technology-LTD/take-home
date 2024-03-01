# Reinsurance Broking Platform

## Description

Responsive ReactJS application for a reinsurance broking platform, focusing on insurance policy management features. Utilize TypeScript, GraphQL, TailwindCSS, GitHub & Git. It has one main application.

1. Broking platform for the organization 

## Technical Details

### Technologies used:

1. [Vite React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
2. [Storybook ](https://storybook.js.org/) for component development
3. [Turborepo](https://turbo.build/) for monorepo management

### Folder Structure (Monorepo)

1. `apps` contains the frontends
2. `packages` contains the shared components, utils and storybook preview
4. `apps/admin` contains the admin application
5. `apps/uipreview` storybook preview for the shared components
6. `packages/uicore` contains the shared components

### How to run the project

1. Clone the repo
2. Run `yarn install` to install all dependencies
3. Download [Turborepo](https://turbo.build/) and install globally  

#### Commands to run each application in dev

1. apps/admin `yarn dev`
2. apps/uipreview `yarn dev`
3. All applications `yarn turbo:dev`

#### The command to build the project

1. admin `yarn ad:bld`
2. uipreview ` yarn up:bld`
3. All applications `yarn turbo:build`






-----------------------

## Assignment Objectives
Develop a responsive ReactJS application for a reinsurance broking platform, focusing on insurance policy management features. Utilize TypeScript, GraphQL, TailwindCSS, GitHub & Git.

## Task Overview
Create, update, and delete insurance policies, implement document generation (PDF and Excel), and design an intuitive UI.

## Task Details and Description

### 1. Insurance Policy Dashboard
- Develop a dashboard for key metrics.
- Implement navigation for insurance policy management.

### 2. Insurance Policy CRUD Operations
- Create, update, and delete insurance policies using GraphQL queries.

### 3. Document Generation
- Implement functionality to generate PDF and Excel documents.
- Enable navigation to view and download generated documents.

### 4. User Interface
- Design a visually appealing UI with TailwindCSS for smooth policy management and document generation.

## Error Handling
Ensure robust error handling and consider edge cases for insurance policy operations and document generation.

## Documentation and Code Structure
Maintain clear and comprehensive documentation in the README.
Ensure well-organized code structure adhering to best practices.

## Submission Instructions
Utilize Git for version control and submit the project on GitHub.
Include a detailed README for setup instructions, task overview, and project structure.

## Evaluation Criteria
- Evaluate code quality, structure, and adherence to best practices.
- Assess TypeScript usage for static typing.
- Review GraphQL implementation for data interactions.
- Examine UI design using TailwindCSS for policy management and document generation.
- Check for effective error handling and consideration of edge cases.
- Inspect Git commit history for incremental development.
- Evaluate README completeness and clarity in providing setup instructions and project overview.
