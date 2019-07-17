# Give Me Pizza Web Client Application
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Technologies
- ReactJs. An awesome library to create dynamic user interfaces
- Ecma Script
- Redux. A library to keep a global state for the application. Redux sagas has been used in the application to handle asynchronous requests
- Jest and enzyme. As a test runner and simulator to manipulate a correct rendering and behavior of the react components

## Description
The application requires a environment variables defined in the `.env.example` file. 
`REACT_APP_API_URL` is the path to the server application by default. This is the same URL we have it available to run in the server application by default

To generate the bundled application files for production: 
```
npm run build
```

In order to start development mode:
```
npm run start
```

The folder structure is basically:
- components : All components that are not connected to external context or global state and can work by themselved.
- containers: All components that are connected to our global state, redux store in this case. Only the index files have the real connection to the store, and the component itself is keep free of the connection.
This is handled in this way due to make tests easier to write.
- redux: This folder handles the redux store / reducers / actions / sagas and watchers when is required. For example: Pizzas and Toppins need to do asynchronous requests but status neither app  do not.
- services.js: This file handles the requests we need to pizzas and toppings and their relationships

### Future Improvements
- Allow support for authorization and/or authentication. Each rquest should send a authorization token
an improvement for the logged user is important.
- Refactor the services file.
- Code coverage: currently, Unit tests are not covering all the code. I was able to push only full coverage for components and Pizzas page.
- Throttle some requests. currently, only when adding/removing toppings to pizza are throttled.
- Use of a CSS library / framework. In order to have a better presentation to the user. The use of some library would be nice



----------------------
----------------------
----------------------

# Original README from react scripts
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
