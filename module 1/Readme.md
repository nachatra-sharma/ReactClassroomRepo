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

# Questions

1. What is emmet?
2. What is the difference between library and framework?
3. what is CDN? why do we use it?
4. Why react is known as react?
5. What is crossorigin in script tags?
6. What is the differnece between react and react-dom?
7. what is the difference between react.developement.js and react.production.js file via CDN?
8. What is async and defer?
