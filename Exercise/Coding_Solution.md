# Chapter 03 - Laying the Foundation Coding Assignment

## Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

```js
const header = React.createElement(
	"div",
	{
		className: "title",
		key: "title",
	},
	[
		React.createElement(
			"h1",
			{
				key: "h1",
			},
			"This is h1 Tag"
		),
		React.createElement(
			"h2",
			{
				key: "h2",
			},
			"This is h2 Tag"
		),
		React.createElement(
			"h3",
			{
				key: "h3",
			},
			"This is h3 Tag"
		),
	]
);
```

## Create the `same element using JSX`

  ```js
const header = (
  <div className="title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);
```

## Create a `functional component of the same with JSX`

```js
const Header = () => {
  return (
    <div className="title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
};
```

##  Pass `attribute into the tag in JSX`

```js
const Header = () => {
  return (
    <div className="title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
```

## `Component Composition` (Add a component inside another)

```js
const AnotherComponent = function() {
    return <h2> This is Another Component</h2>
}

const Header = () => {
  return (
    <div className="title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <AnotherComponent/>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
```

## `{TitleComponent()}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

```js
const element = <h1>This is React Element</h1>; // This is React element or JSX

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This is Title Element</h2>;
}; // This is TitleComponent

const Header = () => {
  return (
    <div className="title" key="title">
      {/* This is {TitleComponent()} */}
      {TitleElement()}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      {<TitleElement/>}
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      {<TitleElement></TitleElement>}
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};//This is HeaderComponent
```

## Create a `Header Component from scratch` using `Functional Component with JSX`

- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice

```js
const Header = () => {
    return( 
        <>
        <header className="header">
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="center">
                <input className="search" type="text" placeholder="Search anything you want..."/>
                <button type="submit">Submit</button>
            </div>
            <div className="right">
                <img src={userIcon} alt="User Icon"/>
            </div>
        </header>
        </>
    )
}
```
