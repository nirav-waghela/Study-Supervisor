This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For logging in the user pick any emailId from Data.js with password.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# Learner details

## Problem Statement

Create and application where you can see the list of learners and stats of them

- Application should contain two pages

  - Learners list Page (Page 1): Diplays the list of learners
  - Learner stats page (Page 2): Displays the learner stats including profile details

> On clicking the individual learner item on Page 1 you should redirect to Page 2. You should use `react-router` to redirect from one page to another

- Page 2 should contain the following details of the learner

  - Profile details of the learner like email, phone, github, linkedin profiles etc
  - Attendance count since 3 months
  - number of commits and lines of code written since 3 months

> You can choose any graph type of your choise to display stats of learner
- Implement login authentication on frontend such that user need to login before accessing the learner's details. User can access learner's list page with/without login also. Use Redux state to manage the login state.

### Optional
- Implement Backend API and database of your choice for this application and integrate it with the frontend
- Host your application on any cloud platform like Heroku, AWS etc

#### Technologies to be used:

- **ReactJS** for creating user interfaces
- **Redux** for managing application state
- You can use any React UI library
- Creating Backend API is optional, you can use fake data to generate any data needed

### Factors you will be tested on

- Code readability & maintainability
- Functionality and/or UX
- Breakdown of problem
- Testing & Documentation
