# Awesome phones 📱

## What is this? 🤔
You can see how a React app works with a custom API & MongoDB for data persistence.
<img 
     width="500"  
     src="https://user-images.githubusercontent.com/27022503/138403513-9e6901a1-427b-4b30-a8ed-018583870e1c.png" 
/>

<img 
     width="500"  
     src="https://user-images.githubusercontent.com/27022503/138441481-e312084a-2c77-462b-8c08-c366acd91705.gif" 
/>


## How to run the app 🚀

### First step 🚶‍♀️
You need a back to run the app. For this, you can visit this [repo](https://github.com/ElenaMLopez/awesome-phones-api) and clone it. There you can find a piece of complete information about how to run this back, it is quite easy if you have docker ^.^

After seeing the message `awesome-phones-api_mongo-seed_1 exited with code 0` in the console, (don't worry this is normal), you are able to run the front.

### Second step 🏃‍♀️

Run the app with Node.js. Open the folder in the console and run the 
#### `yarn install` or `npm install` 📦
After this, you can run:
#### `yarn start` or `npm run` 🎠

Now can visit your `localhost://8080` and see the result.

If you prefer **to use Docker**, you can do it too. After clone the repository and enter in the app folder you can run this Docker commands:

#### `docker build -t phones-front .`
After this you have a docker image to run with the next command:
#### `docker run -p 8080:8080 phones-front`

## How to test the app 🃏

You can test the app by running the following commands:
1. React-testing-library : **yarn test**
2. E2E test with cypress: **yarn cypress** (you must to have the app running)

## Contributing

### Bug and feature basic branch naming

Please, when you create a new branch, to resolve a bug or create a new feature, please name these branches like this:
- Feature: `Feature/<feature-name>#issue-number`
- Bug: `Bugfix/<bugfix-name>#issue-number`


Hope you like it! 😊 
And please, all constructive feedback is always the best to improve my knowledge, so thanks for it!!!


# React info:

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
