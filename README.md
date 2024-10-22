## Features
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [React Query](https://react-query.tanstack.com/)
* [React Router](https://reacttraining.com/react-router/)
* [Styled-Components](https://www.styled-components.com)
* [Workbox](https://developers.google.com/web/tools/workbox/) for offline support and caching
* [Webpack](https://webpack.js.org/) for bundling
* [ESLint](http://eslint.org) to maintain a consistent code style
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm start`
* Create production build: `$ npm run build`
* Start server: `$ npm run server`
* Remove build folder: `$ npm run clean`
* Run ESLint: `$ npm run lint`
* Run webpack-bundle-analyzer: `$ npm run analyzer`

## Deployment
Make sure all modules are installed:
`$ npm install`

Create a build for production, this will add a `/dist` folder to the root with all bundles.
`$ npm run build`

Run the server file to start server:
`$ npm run server`

For production we recommend to use [PM2](http://pm2.keymetrics.io/) to run the server with advanced process management.

## Development Workflow
### Components
The components are separated in `common`, `modules` and `pages`.
- The `common` folder includes components are self-contained and can be used through the entire app
- The `modules` are bundled components which depend on each other.
- The `pages` folder contain top level pages of the application

### Queries
To manage data throughout the while application this boilerplate makes use of [React Query](https://react-query.tanstack.com/). A simple query is similar to the following code snippet:

```typescript
export const useGetItems = () => {
  return useQuery<ServerResponse, Error, ReselectedData>(
    'items', // either a string, or an array
    async () => await api.get({ path: '/users' }),
    {
      select: (response) => {
        // format or select parts of the response
        return response;
      }
    },
  );
};
```



# Tasks

## Setup
This exercise contains 2 tasks which must be completed in the designated time. It requires candidate to setup create two pages:

1. **Pokemon** page
2. **Canvas** page

Candidate is required to use _**React Router DOM.**_


## Task 1 - Pokemon List and Search

This task requires candidate to create a page that displays a list of pokemons from an api, with search functionality

1. Build the table in the **Pokemon** page
2. Create a paginated table of Pokémon using _**Ant Design's**_ Table component.
2. Implement a search functionality using Ant Design's _Input_ component and _React Query_
3. Style the list container using _styled-components_.
4. Create custom _SCSS_ mixins for responsive breakpoints


## Task 2 - Canvas

This task requires candidate to create a page that allows selection of at least two shapes from a Canvas and allowing users to drag elements on the canvas.

1. Build the Canvas in the **Canvas** page
2. Use custom shapes or preferrably React-Konva shapes
3. implement dragging functionality on the canvas