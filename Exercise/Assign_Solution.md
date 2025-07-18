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

# Chapter 02 - Igniting Our App

## 1. What is `NPM` ?

- `NPM` is the `default` package manager for JavaScript's runtime Node.js.
- `NPM` is installed with **`NodeJS`**.
- It comes with a command-line interface `CLI` used to interact with the online database of `NPM`.
- This database is called the `NPM's Online Registry`, and it hosts `public` and `private` packages.
- To add or update packages/dependencies , we use the `NPM CLI` to interact with this database.

  ### How to initialize `npm`?

  ```sh
  npm init
  ```

  `package.json` will be generated when `npm init` is run , to initialize a **JavaScript/Node.js** projects , with these basic metadata provided by developers:

  `name` : the name of your JavaScript library/project

  `version` : the version of your project.

  `description`: the project's description.

  `license`: the project's license project.

We can use

```sh
npm init -y
```

to skip the setup step.

`NPM` can install all the dependencies of a project through the `package.json` file. It can also update and uninstall packages .

## 2. What is `Parcel/Webpack`? Why do we need it?

- `Parcel/Webpack` is type of a web application bundlers used for development and production purposes or to power our application with different types of functionalities and features.
- It offers blazing fast `Performance Utilization` , `Multicore Processing`, and requires `zero Configuration`.
- `Parcel` can take any type of file as an entry point, but an `HTML or JavaScript` file is a good place to start.
- `Parcel/Webpack` are type of bundlers that we use to power our application with different type functionalities and features.

  ### Parcel Features:

---

    - HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
    - File watcher algorithm - made with C++
    - Minification
    - Cleaning our code
    - DEV and production Build
    - Super fast building algorithm
    - Image optimization
    - Caching while development
    - Compresses
    - Compatible with older version of browser
    - HTTPS in dev
    - Port Number
    - Consistent hashing algorithm
    - Zero Configuration
    - Automatic code splitting

### Installation commands :

```sh
npm install -D parcel
```

here `-D` is called a flag which is used to indicate `npm` to install it as a `devDependencies`.
`Parcel` commands to run parcel in different environments.

- For `development` build :

```sh
npx parcel <entry_point>
```

- For `production` build :

```sh
npx parcel build <entry_point>
```

## 3. What is `.parcel-cache` ?

- `.parcel-cache` is used by `parcel `( bundler ) to reduce the building time.
- It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to `re-parse` and `re-analyze` everything from scratch.
- It's a key reason why parcel can be so fast in development mode.
- The `dist` folder contains the output of `Parcel` and the content of that folder is served by the `web server`.

## 4. What is `npx` ?

- The `npx` stands for `Node Package Execute`.
- It is a tool that is used to `execute` the `packages`.
- It comes with the `npm`. ` npx` is pre-bundled with `npm`.
- It is a `npm` package runner the major advantage is the ability to `execute` a `package` that `wasn’t previously installed`.
- This is useful because sometimes you just want to use some `CLI tools` but you `don’t want to install` them globally just to test them out.

## 5. What is difference between `dependencies` vs `devDependencies`?

### `dependencies`

---

- `Dependencies` are the packages that are required for your application to run properly.
- `Dependencies` are specified in the `dependencies` section of the `package.json`.

```json
"dependencies": {
  "express": "^4.17.1",
  "mongoose": "^5.12.13"
}
```

- These packages are installed when you run the `npm install` command and are stored in the `node_modules` folder.

```sh
npm install <package-name> --save
```

### `devDependencies`

---

- `DevDependencies` are the packages that are required for `development` and `testing` purposes only.
- These packages are not required for the application to run properly, but they are needed for tasks such as `building`, `testing`, and `linting` the code.
- `DevDependencies` are specified in the `devDependencies` section of the `package.json` file.

```json
"devDependencies": {
  "babel-cli": "^6.26.0",
  "eslint": "^7.28.0",
  "mocha": "^9.0.1"
}
```

- When you install a package as a `devDependency`, it’s also stored in the `node_modules` directory.

```sh
npm install <package-name> --save-dev
```

- If you want to only install the `dependencies` and not the `devDependencies` packages, you can set the `--production` flag.

## 6. What is Tree Shaking ?

- `Tree shaking` is a technique used `to remove unused code` from JavaScript bundles.
- In computing, tree shaking is a `dead code elimination technique` that is applied in order to `optimize code .`
- Tree shaking works by `analyzing the code `in your bundle and `identifying any code that is not used.`
- This `code` is then `removed from the bundle` , this can improve the `performance of your application` by reducing the `size` of the bundle.
- This is done by `bundlers like webpack/ parcel.`

## 7. What is Hot Module Replacement?

- `Hot Module Replacement (HMR)` improves the development experience by `automatically updating modules` in the browser `at runtime` without needing a `whole page refresh.`
- The `advantage` of this is that it doesn't lose your `application state` can be retained as you change small things.
- `HMR` is enabled for the `dev server`. When you change your files and save them, the `HMR` will `automatically` change your contents `without recompile and reload whole project.`
- `HMR` is the same as `Live Reload` with the difference that it only replaces the modules that have been `modified`, hence the word Replacement.

## 8. List down your favorite 5 superpowers of `Parcel` and describe any 3 of them in your own words.

### 5 superpowers of Parcel

---

- `HMR (Hot Module Replacement) `

  It adds , or removes modules while an application is running, `without a full reload.`

- `File watcher algorithm`

  File Watcher `monitors directories` on the file system and perform specific actions when desired files appear.

- `Minification`

  It is a process of removing unnecessary characters from code, such as `whitespace`, `comments`, and unused code.

  This can make your code smaller and faster to load.

- `Differential Bundling.`

  Basically it `creates different bundles` for `older browsers` and `modern browsers`.

  Since most of the older browsers don't support latest javascript `by providing polyfills.`

  When you use `<script type="module">` , `Parcel` automatically generates a `nomodule` `fallback` for old browsers as well, depending on your browser targets.

- `Image optimization`
- `Caching while development`

## 9. What is `.gitignore`? What should we add and not add into it?

- The **`.gitignore`** file is a text file that tells `Git` which `files` or `folders` to `ignore` in a project during `commit` to the `repository`.
- The types of files you should consider adding to a `.gitignore` file are any `files` that you do not need to be pushed into the `git`.
- Typically `any files` that can be installed by `npm install` can be ignored pushing into the `git`.

### The entries in this file can also follow a matching pattern.

```sh
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```

### This is an example of what the .gitignore file could look like:

```sh
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```

## 10. What is the difference between `package.json` and `package-lock.json`

`package.json`

- This file is mandatory for every project it is like a registry for the packages.
- It contains meta information about the project.
- Application `name/version/scripts/dependencies/devDependencies.`
- It lists the `packages` that your project depends on, as well as their `versions`.
- The `package.json` file is used by `Node.js` to install the dependencies of your project when you run` npm install`.

`package-lock.json`

- This file is automatically generated for those operations where `npm` modifies either the `node_module` tree or `package-json`.
- It is generated after an `npm install.`
- The `package-lock.json` file is a lock file that records the `exact versions` of the packages that were installed in your project.
- This is useful because it `ensures` that your project always uses the `same versions` of the `packages`, even if the versions of the packages changes in the registry.

For example in `package.json` file:

```sh
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

In `package.json` file **`~`** or **`^`**

- `Tilde (~) notation`:

  This notation freezes the major version and minor versions and will only `update all the future patch updates `. whereas

- `Caret (^) notation`

  It will automatically update all the future `minor and patch updates` and not the major.

> If none of them is present , that means only the version specified in `package.json` file is used in the development.

## 10. Why should I not modify `package-lock.json`?

- `package-lock.json` file contains the information about the dependencies and their versions used in the project.
- we should not modify it. Because its purpose is to `track` the entire `tree of dependencies` and the exact `version of each package` or library.
- `Deleting` it would cause `dependencies issues` in the production environment. So don't modify it, It's being handled automatically by `NPM`.

## 11. What is `node_modules` ? Is it a good idea to push that on git?

`node_modules` folder like a cache for the external modules that your project depends upon. When you `npm install` them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
Don't push `node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.

## 12. What is the `dist` folder?

A: The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

## 13. What is `browserslist`?

- Browserlist is a tool in which we specify which browser should be supported by our frontend application with the help of some queries in a config file.
- go to officla website of browserlist, copy given code and paste in package.json. "browserlist": [ ... ]
- go to browserlist.dev. This will show what to put in the above array.
