# Module 1

## How can you write your first program in html ?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Module 1</title>
    <style>
      * {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

## How can you write your first program in javascript ?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Module 1</title>
    <style>
      * {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const root = document.getElementById("root");
      const element = document.createElement("h1");
      element.innerText = "Hello World";
      root.appendChild(element);
    </script>
  </body>
</html>
```

## How we can create our first program using react?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Module 1</title>
    <style>
      * {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
      const heading = React.createElement(
        "h1",
        { name: "rishi" },
        "Namaste React"
      );
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);
    </script>
  </body>
</html>
```

## Key Points

- React is a library not a framework.
- React Element at the end of the day is object.
- Generally we have only one root and render tag.
- If there is something inside root element react will override everything that is present.

# Assignment of module 1

### 1. write this using react.

```html
<div id="container">
  <h1>Heading 1</h1>
  <h1>Heading 2</h1>
</div>
```

### Solution of the assignment 1

```javascript
const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h1", {}, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
```

### 2. write this using react.

```html
<div id="parent">
  <div id="child">
    <h1>Heading</h1>
  </div>
</div>
```

### Solution of the assignment 2

```javascript
const heading = React.createElement("h1", {}, "Heading");
const child = React.createElement("div", { id: "child" }, heading);
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

## Questions

1. What is emmet?
2. What is the difference between library and framework?
3. what is CDN? why do we use it?
4. Why react is known as react?
5. What is crossorigin in script tags?
6. What is the differnece between react and react-dom?
7. what is the difference between react.developement.js and react.production.js file via CDN?
8. What is async and defer?

# Module 2

## Key points :

```
1. bundler -> parcel, webpack, vite
2. package manager -> npm, yarn
3. create-react-app uses webpack as a bundler
4. Parcel is a bundler that will do some optimization stuffs an make our react web app production ready.
5. npm is a tool that help us to manage the packages and the installation part.
```

### 1. npm init -y << _npm init_

> This will initialize npm in our project repo and create a file name as **package.json**

> **Package.json** contains all the configuration for our project.

### 2. npm install -D parcel or npm install --save-dev parcel

> -D or --save-dev means it will download parcel as a development environment. Or, inshort we can say download parcel as a dev dependencies.

> It will create one file and one folder name as package-lock.json and node_modules respectivily.

> and made some changes in the package.json file.

1. node_modules = this a database for the packages we are using in our project.

2. package-lock.json = this file contains all the exact version of packages that our project needs.

3. why we install parcel as a dev dependencies? \
   **By installing Parcel as a dev dependency, you keep your production environment clean and only include the dependencies necessary for running your application in a production environment. Parcel is not needed for the production deployment of your application, so it's listed as a dev dependency to differentiate between dependencies needed for development and those needed for production.**

4. There are two types of dependencies we have:-\
   i. dev - dependencies = those dependencies which we use in development environment.\
   ii. dependencies = those dependencies are used in production environment.

5. Tilda and Caret in version\
   i. Tilda (~) install minor updates. for ex. 1.2.3, 1.2.4, 1.2.5 install but not 1.3.0\
   ii. Caret (^) install major updates. for ex. 1.2.3, 1.3.0, 1.4.0 install but not 2.0.0

### npm install

> run this code to get back your node modules.

### npm install react

### npm install react-dom or npm i react-dom

> for running our project use **npx parcel index.html**

### create a file name as app.js

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
```

### create index.html and use this script tag

```html
<script type="module" src="app.js"></script>
```

## Features of Parcel:

1. Image Optimization
2. Tree Shaking
3. Bundling
4. Code Spliting
5. HMR - Hot Module Replacement
6. File watcher algorithm
7. Minify
8. Cleaning our code
9. Dev and production build
10. Super fast build algorithm
11. Caching while developing
12. Compression
13. Old version compatibilty for older version browser
14. Manages port number
15. Consistent hashing algorithm
16. Create a server
17. Error handling
18. Diagnostic
19. Zero configuration
20. Transitive Dependencies

### To create a production build use command

```
npx parcel build index.html
```

### Transitive Dependencies

> I have a dependencies that are dependent on other dependencies and that other dependencies are also dependent on other one make a tree like structure that is known as transitive dependencies.

## Question

1. What is npm ?
2. What is parcel/webpack ? why do we need it.
3. what is .parcel-cache ?
4. What is npx ?
5. What is the difference between dependencies and dev dependencies ?
6. What is Tree Shaking ?
7. What is HMR (Hot module replacement) ?
8. what is dist folder ?

# Module 3

### Package.json

make this changes it helps us to run and build our react project fastly and it's a industry best parctices.

```javascript
"scripts": {
    "start": "parcel index.html", // dev build
    "build": "parcel build index.html", // production build
}
```

> For dev build run **npm run start** or **npm start**\
> For production build run command **npm run build**

### React.createElement -> Javascript Object -> HTML Element (Render)

## JSX (Javascript XML)

JSX is not html inside javascript. But we can say JSX have HTML like syntax.

```jsx
const heading = <h1>Hello World</h1>;
```

```jsx
const heading = (
    <h1 id="title">This is a JSX title</h1>
    <p>This is a sample para.</p>
)
```

### JSX Transpile before it reaches JS engine -> Parcel -> babel

> **JSX -> React.createElement -> JS Object -> HTML Element(Render)**

```jsx
const heading = <h1 className='heading'>Namaste Developer</h1>;
```

> why we use className instead of class?\
> Because class is a keyword in javascript so we can't use class directly so we use className

## React Component

1. Functional Component
2. Class Based Component

> <strong>What is functional component?</Strong>\
> <br>
> It is a normal javascript function. that return some peace of JSX code and react Element.\
> <br>
> While creating functional component we write first alphabet in captial latter.

### React Functional Component Example

```jsx
const Heading = () => {
  return (
    <div>
      <h1>Namaste React</h1>
      <p>This is a sample para</p>
    </div>
  );
};
```

### Passing element in a functional component

```javascript
const HeaderComponent = () => {
  return (
    <div>
      {heading} // this is how we pass a element
      <h1>This is a react functional component</h1>
      <p>This is a sample para</p>
    </div>
  );
};
```

### Different ways to render something on web

```jsx
root.render(<HeaderComponent />);
root.render(<HeaderComponent></HeaderComponent>);
// root.render({HeaderComponent()}); we can't do this
```

### component composition -

Passing component inside component is known as component composition.

```jsx
const ComponentComposition = () => {
  return (
    <div>
      <h1>How to nest a component inside component.</h1>
      {HeaderComponent()} // like this
      </HeaderComponent> // like this
      <HeaderComponent></HeaderComponent> // like this
    </div>
  );
};
```

### React Reconciliation

is the process by which react update the UI to reflect changes in the component state. React uses a virtual dom to update the UI.

## Question

1. What is JSX ?
2. React.createElement vs JSX
3. Benefit of JSX
4. Behind the scenes of JSX
5. Babel and parcel role in jsx
6. Component
7. Functional Component
8. Component Composition

# Module 4

### Key Points

1. Any piece of jsx component you write can have only one parent.
2. <React.Fragment></React.Fragment> or <></> empty tags
3. Props is like parameter to a function.
4. A representation of actual DOM is known as virtual DOM.
5. React Fiber is the new reconciliation engine in react 16 for diff-algorithm.
6. If single parent have multiple child we have to give all the child a unique key.

## Question

1. Why we need keys in react? When do we need keys in react?
2. What is props in react?

# Module 5

### Folder Structure

> Seperate file for seperate component.

```javascript
/***
 * Folder Structure
 *
 * src (Folder)
 *  -> App.js (File)
 *  -> Components (Folder)
 *    -> Component (Files)
 *  -> Utils (Folder)
 *    -> Constants.js (File)
 *
 *
 *
 *
 *
 ***/
```

There are two type of moduling in React.

1. ES Moduling
2. CJS Moduling
   > React is using ES Moduling

There are two type of import and export in ReactJS

1. Import -> Named Import and Default Import
2. Export -> Named Export and Default Export

```JavaScript
/**
 * Import
 * 1. import {Body} from './Components/Body.jsx'; (Named Import)
 * 2. import Body from './Components/Body.jsx'; (Default Import)
 *
 * Export
 * 1. export const Body = () => {return(JSX)}; (Named Export)
 * 2. export default Body;
 **/
```

> From single file if we want to export multiple things we use named export.

### Hooks

> Hooks are the normal JS function.

```javascript
import { useState } from "react";

const [listData, setListData] = useState([]);
```

> Whenever a state variable update react will rerender that component.

#### Diff Algo

> It finds oyt the difference between two virtual dom first is previous virtual dom and second is updated virtual dom.

## Question

1. Why do we need a useState hook?
2. What are react hooks?
