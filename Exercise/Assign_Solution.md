# Chapter 03 - Laying the Foundation

## 1. What is `JSX` ?

- JSX stands for **JavaScript XML**.
- It is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
- JSX places them in the DOM without any `createElement()` and/or `appendChild()` methods.
- JSX converts `HTML` tags into `React Elements`.
- JSX and React are two separate things.
- JSX is a syntax extension, while React is a JavaScript library.
- Using JSX you can write **Js Expressions** inside curly braces `{ }`.

  The expressions can be a React variable, or property, or any other valid JavaScript expression.

- Since browser's does not understand this **JSX** because it's not valid JavaScript code.
- So to convert it to browser understandable JavaScript code, we use a tool like ` Babel` which is a JavaScript compiler/transpiler.

  ## Rules for writing **JSX**

  ### 1. Return a single root element.

  - To return multiple elements from a component, wrap them with a single parent tag.

    For example, you can use a ` <div> <div/>`.

  - If you don’t want to add an extra `<div> <div/> `to your markup, you can write `< >` and `< />` instead.
  - This empty tag is called a **Fragment**. These `Fragments` let you group things without leaving any trace in the browser HTML tree.

  ### 2. Close all the tags.

  - JSX requires tags to be explicitly closed.

    eg: **self-closing** tags like `<img>` must become `<img />` , and wrapping tags like `<li> oranges` must be written as `<li> oranges </li>`.

  ### 3. camelCase for ~~all~~ most of the things!

  ### Example 1 using JSX:

  ```javascript
  const myElement = <h1>I Love JSX!</h1>;
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(myElement);
  ```

  ### Example 2 Without JSX:

  ```javascript
  const myElement = React.createElement("h1", {}, "I do not use JSX!");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(myElement);
  ```

## 2. Superpowers of `JSX`.

- Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single **`.jsx`** file.
- JSX is easy to maintain and debug.

  ### Example

  ```javascript
  function greeting(user) {
  	//JSX
  	return <h1>{user}, How are you!!!</h1>;
  }
  ```

## 3. Role of `type` attribute in script tag? What options can I use there?

The `type` attribute specifies the type of the script.

The `type` attribute identifies the content between the `<script>` and `</script>` tags.

It has a default value which is `text/javascript`.

### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```js
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : This value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can `import` or `export` other files or modules inside it.
- `text/babel` : This value indicates that the script is of `babel` type and required `babel` to transpile it.
- `application/json`: As the name suggest the `type` is used to indicate that the script is written in `JSON format`.

## 4. `{TitleComponent()}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

The Difference is stated below:

Considering if the `TitleComponent` is a component

- `{TitleComponent()}` :

  By this way you can also call `TitleComponent` component as a function `TitleComponent()` in jsx. Since components are basically functions in React which returns a `JSX`.

  Have to embed the `TitleComponent()` inside `{ }` when it is called as a function, for example
  `{TitleComponent()}` in `JSX`.

  Here `TitleComponent()` returns `js object` which contains `type` of the element which is returned by the component.

- `<TitleComponent/>` :

  In this way `TitleComponent` can be directly rendered/ called in `JSX`.

  Components can also be called/rendered as a `self closing tag` when it doesn't have any **children** or **content**.

  The return value will be a `JSX` element , which is a **React Element** .

- `<TitleComponent></TitleComponent>` :

  We use `<TitleComponent> </TitleComponent>` with opening and closing tags when it has **childComponents** or **Content** to render `JSX`.

  ### Example

  ```js
  <TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
  </TitleComponent>
  ```
