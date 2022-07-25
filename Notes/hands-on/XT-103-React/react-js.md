# React JS

## Intro 

- [ReactJS]( https://reactjs.org/ )
- [Angular](https://angular.io/)
- [ReactNative](https://reactnative.dev/) - For mobile Applications

- ReactJS created by Facebook introduced in 2011
- First stable version released in 2014
- During that time angular is very slow compared to react because of virtual dom feature in react.
- Angular is good for single page application 
- Angular is difficult to move from piece by piece
- Angular follows some specific structure
- React will give you the freedom in structuring 
- Frameworks are good for building user interfaces ( Building blocks )
- Build small pieces (components) and join together to form a page 

## what is React JS
- React is a JavaScript library for building user interfaces.
- React is used to build single page applications.
- React allows us to create reusable UI components.

## Advanages of Libraries and Frameworks (React, Angular, Vue (new) , Svelte(new) , Eber , Knockout)

- Component based - Allow you to build small pieces of the UI and compose them together
    - Reuse smaller pieces in many places
        - Customized via some props (attributes)
    - Helps a team work on independent pieces of the application UI
    - Most of the common UI concerns like event handling , DOM manipulation are taken care by the   libraries/ frameworks
    - Allow you to tie data to the UI
        - you are only concerned about the data, and the library/framework takes care of manipulating the DOM to reflect the data. 
        - when data changes, the UI updates automatically ( data binding is a popular name for this concept)
    - Angular also takes care of data fetching, routing ( change the page when the url changes in a SPA)
    - React leaves these concerns to the developers preferences
        - You have to use other libraries when working with React
- Business Cases
    - You have a team of good JS Developers - you can use React. 
    - Angular is good for people who usually do not work with JS
    - Performance-wise Angular and React are similar 
- React is a "library" -> only concerned with building UI
- Angular is a "framework" -> there is a set architecture for the app, you need to structure files and folders in a certain way, and it address most of app development concerns.
    
## virtual DOM
- React Element is not a DOM node but it is like a DOM node
- React Element is a special kind of object
- DOM Node is heavy weight . It have so many unneccesary properties
- React Element is light weighted which contains only required properties
- The react Element has children and props (attributes)
- The elements are related to one another in a tree structure - The "Virtual DOM"
- React element is an object

## Advantages of React
- Use of Virtual DOM to improve efficiency
- SEO friendly: React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
- Reusable components
- Huge ecosystem of libraries to choose from: React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.


## components

- We can define a component in one of 2 ways
    - A class or A function
- Till react version16.7 it was very clear when to define a class component (statefull), and when to define a function component (stateless)
    - When you have a one time render component (UI) for the component does not change over time -(function component)
        - A button whose UI/ asssociated data does not change with time - A button on github.com repo page
    - When you have a component whose data (State) changes with tie, and UI re -renders to show updated data - class component
        - A like button along with number of likes on Twitter - it gets refreshed and shows the latest likes
        - A gmail list of emails
        - A paginated list of products
        
- In react 16.8 "hooks " was introduced - function components can also store data, refresh data, and refresh the UI
    - In general , developers prefer function component for everything now
    - Hooks are very complicated to understand - you can run into bugs
    - Using hooks with function components will lead to more maintainable and reusable code

##  Problems with setting state very Fast 
- If to many state changes happen react batch the state change . It wont change everytime 
- Ex: Moneycontrol, chart data changes immediately after every mouse move. i.e it creates so many set states within a second. 
- If we change the value manullay then it calls the setState everytime which makes my page not responding
- So, its good to give it to React,  it batches the state change (render wont happen immediately )

## Pure Function

- Does not use or does not set global variables
- Pure function is always give same output for same input 
- Produces no side effects - It never change global varaibles or its properties (inputs -> props and state)
- Pure functions can call only other pure functions 

## Render in class

- It is just to show UI

## Life Cycles

- Three Phases
    1. Mounting Phase - ex: render 
    2. Update phase - state and props changes
    3. Unmounting phase - component is destroyed
- Did functions - occur after render
- Will functions - occur before render
- we cna call setState in componentDidMount and componentDidUpdate

- We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

- We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

### componentDidMount

- The componentDidMount() method runs after the component output has been rendered to the DOM. 

### componentWillUnmount
- If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped. For clean up tasks

## Error Handling

- Parent can catch the error thrown by its children 

### defaultProps
- If props is not passed then what should be its value
### propTypes
- To indicate type of the props

## Hooks
- Hooks are set of function that React provides
    - 10 built in hooks (use<hook>)
    - useState, useEffect, useContext , useRef,  ...
- Hooks add super power to function components 
    - useState() adds state to function component
        - add state (i.e data that changes over time) to a function component, and when the state changes the function runs again, and re-renders the UI
    - useEffect() adds lifecycle method like functionality to function component
        - start data fetch after initial render
        - stat " ticking " the clock after rendering the clock for the first time
- Hooks are only for function components
    - we cannot use hooks in class components - it will result in an error
    - we cannot call hooks anywhere Except function component, Custom hooks can call other hookss, but custom hooks themselves can be called ONLY from function components 
- Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

### Why Hooks

- Disadvantages of class components
    - The logic for a particular feature implemented in the class will be spread across multiple lifecycle methods
    - Like fetch should be done in componentDidMount, clearinterval should be done in cwum 
    - Reusing state and logic across similar class components involves complex design patterns like HOC and render props

- Advantages of hooks
    - state and logic for a feature is grouped together inside a component
    - Clean code
    - The state and logic can be moved out of the component to a seperate function
        - This helps us to share state and logic across components which do something similar 
        - Ex: AJAX call, requiredValidation which shares across all input validation

- Problems with hooks
    - Hooks have a steep learning hooks
        - Easy to go wrong with hooks 

## useState
- The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.

## Keys in React

- A key is a special string attribute that needs to be included when using lists of elements.
- Keys help react identify which elements were added, changed or removed.
- Keys should be given to array elements for providing a unique identity for each element.
- Without keys, React does not understand the order or uniqueness of each element.
- With keys, React has an idea of which particular element was deleted, edited, and added.
- Keys are generally used for displaying a list of data coming from an API.
- ***Note- Keys used within arrays should be unique among siblings. They need not be globally unique.

# JSX

- JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
- As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.

## Difference btw Functional and class components
- Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on a feature basis. After the introduction of Hooks, functional components are equivalent to class components.

## What is the virtual DOM? How does react use the virtual DOM to render the UI?
- virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.
- It's like blue print of the Real DOM. When any state changes then it will update the virtual dom not real dom
- Updating virtual dom is faster than updating real dom.

## Why was virtual DOM introduced? 
- DOM manipulation is quite slow when compared to other operations in JavaScript. - The efficiency of the application gets affected when several DOM manipulations are being done. 
- Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.
- For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating.

## How Virtual DOM Works
- For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties. 
- The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. 
- Consider a virtual DOM object as a blueprint of the real DOM object. Whenever a JSX element gets rendered, every virtual DOM object gets updated.

- **Note- One may think updating every virtual DOM object might be inefficient, but that’s not the case. Updating the virtual DOM is much faster than updating the real DOM since we are just updating the blueprint of the real DOM.

- React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects. 
- Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated. 
- After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

## what is controlled and uncontrolled components in react js ?
- Controlled and uncontrolled components are just different approaches to handling input from elements in react. 
- Controlled component is component that get the changed value from the callback function 
- uncontrolled component is component that have the one from the DOM. 
- For example, When input value is changed,we can use onChange function in Controlled Component and also we can get the value using DOM like ref.
- Controlled components in React are those in which form data is handled by the component’s state.
- Controlled components are predictable because the state of the form elements is handled by the component
- Uncontrolled components are not predictable because, during the lifecycle of a component, the form elements can lose their reference and may be changed/affected by other sources
- Controlled components enable you to effectively employ form validation to your forms. It doesn’t matter what changes the form elements. Their values are safe in our local states, so that’s where we perform our validation
- With controlled components, you are very much in control of your form elements’ values. You can dictate how they go and what can and cannot be inserted

## Difference between props and state object

### React Props
- Every React component accepts a single object argument called props (which stands for “properties”). 
-  These props can be passed to a component using HTML attributes and the component accepts these props as an argument.
- props are immutable

### React State
- Every component in react has a built-in state object, which contains all the property values that belong to that component.
In other words, the state object controls the behaviour of a component. Any change in the property values of the state object leads to the re-rendering of the component.
- Note- State object is not available in functional components but, we can use React Hooks to add state to a functional component.
- State is owned by the component and locally scoped
- state is Writeable/Mutable
- has setState() method to modify properties, Changes to state can be asynchronous, can only be passed as props
- Using props, we can pass data from one component to another.

## props drilling
- Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. - To pass data between such components, we pass props from a source component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.
- The disadvantage of using prop drilling is that the components that should otherwise be not aware of the data have access to the data.

## Difference between useRef and createRef
- useRef is a hook adn createRef is a function
- useRef uses the same ref throughout while createRef create a new ref everytime. So value stored in useRef persists between re renders. but value stored in creatRef not persists btw re renders as createRef creates new ref everytime.
- we use createRef in class components and which is not possible in functional components. use useRef in functional components
- You can't set a new value for createRef. But you can for useRef.
- React's useRef hook is a great tool to persist data between renders without causing a rerender and to manipulate the DOM directly. It should only be used sparingly in situations where React doesn't provide a better alternative.

## How can we store the component first-time mount props value? 
- using useRef we can store the first time mount props. As values in useRef persists between re renders
- const ref = React.useRef(props); 
- So whenever you print ref it will print the initial props only. 
## Side Effects in React
- Side effects are all the operations that affect your component and can't be done during rendering. Things like fetching data, subscriptions or manually changing the DOM are all examples of side effects, and things you've most likely done in the past.
- A side effect is any execution that affects something outside the scope of the function being executed. For example, if a function modifies a global variable, then that function is introducing a side effect — the global variable doesn’t belong to the scope of the current function.
Some examples of side effects in React components are:
- Making asynchronous API calls for data
- Setting a subscription to an observable
- Manually updating the DOM element
- Updating global variables from inside a function

<script>
    import React, { useEffect } from "react";

    function SimpleUseEffect() {
    
    useEffect(() => {
        document.getElementById("userName").value = "Mayank";
    });
    
    return (
        <div>
        <b>A Simple use of useEffect...</b>
        </div>
    )
    }
</script>

- This code introduces a side effect to the function component by updating a DOM element. Since the DOM element does not belong to this function, updating the DOM inside the useEffect hook introduces a side effect to the component.

## useEffect
- The useEffect React Hook is used for performing the side effects in functional components. With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change. 
- useEffect is called after the render and screen updates

## The Difference Between useEffect and useLayoutEffect
It’s all in the timing.

- useEffect runs asynchronously and after a render is painted to the screen.
- So that looks like:
    - You cause a render somehow (change state, or the parent re-renders)
    - React renders your component (calls it)
    - The screen is visually updated
    - THEN useEffect runs
- useLayoutEffect, on the other hand, runs synchronously after a render but before the screen is updated. That goes:
    - You cause a render somehow (change state, or the parent re-renders)
    - React renders your component (calls it)
    - useLayoutEffect runs, and React waits for it to finish.
    - The screen is visually updated
- Most of the time, useEffect is the right choice. If your code is causing flickering, switch to useLayoutEffect and see if that helps.


## life cycle functions
- React lifecycle hooks will have the methods that will be automatically called at different phases in the component lifecycle and thus it provides good control over what happens at the invoked point. It provides the power to effectively control and manipulate what goes on throughout the component lifecycle.

## Different phases 
There are four different phases in the lifecycle of React component. They are:

- Initialization: During this phase, React component will prepare by setting up the default props and initial state for the upcoming tough journey.
- Mounting: Mounting refers to putting the elements into the browser DOM. Since React uses VirtualDOM, the entire browser DOM which has been currently rendered would not be refreshed. This phase includes the lifecycle methods componentWillMount and componentDidMount.
- Updating: In this phase, a component will be updated when there is a change in the state or props of a component. This phase will have lifecycle methods like componentWillUpdate, shouldComponentUpdate, render, and componentDidUpdate.
- Unmounting: In this last phase of the component lifecycle, the component will be removed from the DOM or will be unmounted from the browser DOM. This phase will have the lifecycle method named componentWillUnmount.

## Different Lifecycle methods
The various lifecycle methods are:

- constructor(): This method will be called when the component is initiated before anything has been done. It helps to set up the initial state and initial values.
- getDerivedStateFromProps(): This method will be called just before element(s) rendering in the DOM. It helps to set up the state object depending on the initial props. The getDerivedStateFromProps() method will have a state as an argument and it returns an object that made changes to the state. This will be the first method to be called on an updating of a component.
- render(): This method will output or re-render the HTML to the DOM with new changes. The render() method is an essential method and will be called always while the remaining methods are optional and will be called only if they are defined.
- componentDidMount(): This method will be called after the rendering of the component. Using this method, you can run statements that need the component to be already kept in the DOM.
- shouldComponentUpdate(): The Boolean value will be returned by this method which will specify whether React should proceed further with the rendering or not. The default value for this method will be True.
- getSnapshotBeforeUpdate(): This method will provide access for the props as well as for the state before the update. It is possible to check the previously present value before the update, even after the update.
- componentDidUpdate(): This method will be called after the component has been updated in the DOM.
- componentWillUnmount(): This method will be called when the component removal from the DOM is about to happen.

## How does the performance of using Hooks will differ in comparison with the classes?
- React Hooks will avoid a lot of overheads such as the instance creation, binding of events, etc., that are present with classes.
- Hooks in React will result in smaller component trees since they will be avoiding the nesting that exists in HOCs (Higher Order Components) and will render props which result in less amount of work to be done by React.


## creating React App
- npx create-react-app foldername

## Lifting state up
- In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.

## Error Boundaries
- Introduced in version 16 of React, Error boundaries provide a way for us to catch errors that occur in the render phase.
- In what places can an error boundary detect an error?
    - Render phase
    - Inside a lifecycle method
    - Inside the constructor

## Custom Hook
- A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks. It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for component hierarchy restructuring.
## HOC - higher order component pattern

- While developing larger applications we need to keep our code DRY, therefore, we want an abstraction that allows us to define this logic in a single place and share it across components. HOC allows us to create that abstraction.
- Similar to custom hook , but this is for class
- An HOC is a function  not a component
- It will accept a component as argument/ or create and return a component
- Shared logic will be part of this created component
- HOC is a function that takes in a component and returns a component.

## Profiling the react app
- React allows us to measure the performance of our apps using the Profiler in the React DevTools. There, we can gather performance information every time our application renders.

- The profiler records how long it takes a component to render, why a component is rendering, and more. From there, we can investigate the affected component and provide the necessary optimization.

- To use the profiler, we must install the React DevTools for our browser of choice. If you don’t have it installed yet, head over to their extension page and install it (choose Chrome here or Firefox here).

- Now, we should see the Profiler tab when working on a React project.
## Few techniques to optimize React app performance.
- Maintaining State Colocation -
    - This is a process of moving the state as close to where you need it as possible.
- Memoizing React components to prevent unnecessary re-renders
    - React.memo
    - use useCallback hook
    - use useMemo hook
- Code-splitting in React using dynamic import() ( Lazy Loading )
- Windowing or list virtualization in React applications
- LazyLoading the images


## Server side

- With a client-side rendering solution, you redirect the request to a single HTML file and the server will deliver it without any content (or with a loading screen) until you fetch all the JavaScript and let the browser compile everything before rendering the content.

- WIth client slide loading first page is time taking beacuse it have to load bundle.js which is huge in size 

- currently we are following client side rendering
- First page load will be faster. No delay in loading html with server side rendering

- Server side is no use once initial loading is done 

## lazy loadings

- The React.lazy function lets you render a dynamic import as a regular component.
- when you really required particular component,  then load that 
- Static imports given at start
- Dynamic imports can be given anywhere - created new bundle and load it whenever required
- These dynamic imports buldes are not get added in the initial bundle (which comes during loading the first page)
- Suspense component -> it will load dynamic import
- React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.

- The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

## Props Drilling

- Passing the props from parent to child or grand child etc.
- We need to store common state in common ancestors. This leads to props being "drilled" down (passed around to children and their children even though they may not directly require it). The functions to make changes in the shared state are again drilled down, The react app becomes a __mess of props__.

## How React is SEO friendly?
- Googlebot processes JavaScript web apps in three main phases:
- Crawling Rendering Indexing
- Googlebot crawls, renders using Javascript, and indexes a page.
- React is Server-Side Rendering which means that you run the Javascript code on the server before you send the files to the user for the first time.
- That means that the visitor can see the content directly without having to wait for React to run first, It can make the page a little bit faster (especially on older computers) but more importantly it means that Google doesn’t need to run Javascript to read the content of the page.

## Why Next JS
- React allows server side rendering. To make server side apps Next. js makes your life easier through several tools and conventions available out of the box, and it is backed by a very active open source community as well

## stateless component
- Stateless functional component is, its a component that has no state or constructor or any lifecycle hooks and are fully controlled by their parents. They only render a react component.

## why we should never update state directly
- React, keeps a track record of all its virtual DOM. Whenever a change happens, all the components are rendered and this new virtual DOM is then compared with the old virtual DOM. Only the differences found are then reflected in the original DOM.
- So, it’s obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won’t be able to see that there is a change of the state and so it won’t be reflected in the original DOM until we reload.

## State management Libraries

- State management libraries provide a solution to problem of props drilling
    - They give a "store" to store the common state for the app (global variable)
    - They provide a predictable way to make changes to the shared state
        - Easy to debug when things go wrong
    - They provide a way to retrieve th state wherever required, and re-render UI
- A solution is given by the Flux pattern (proposed by react team)
- Examples: Redux , Mobx , Flux (original )

## Middleware

- A function in redux to excute side effects
- Excuted either when an action is dispatched , when state updates i.e before subscriber get to know
- can prevent the action from reaching the store

## thunk middleware
- Allows you to cature action and sideeffect in a function and instead of dispatching plain objects thunks dispatch function instead of object

## SPA
- An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown

## React Reducer

- React Router refers to the standard library used for routing in React. It permits us for building a single-page web application in React with navigation without even refreshing the page when the user navigates. 
- It also allows to change the browser URL and will keep the user interface in sync with the URL.

## React Router
- npm install react-router-dom@latest

### Components
- Routers
    - At the core of every React Router application should be a router component.
    - BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. 
    - It is the parent component that is used to store all of the other components.
    - A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.
- Routing
    - Routing is the process of deciding which React elements will be rendered on a given page of your app, and how they will be nested. React Router provides two interfaces for declaring your routes.
    - <Routes> and <Route> are the primary ways to render something in React Router based on the current location. You can think about a <Route> kind of like an if statement; if its path matches the current URL, it renders its element! The <Route caseSensitive> prop determines if the matching should be done in a case-sensitive manner (defaults to false).
    - Whenever the location changes, <Routes> looks through all its children <Route> elements to find the best match and renders that branch of the UI. <Route> elements may be nested to indicate nested UI, which also correspond to nested URL paths.
- Navigation
    - React Router's navigation interfaces let you change the currently rendered page by modifying the current location. There are two main interfaces for navigating between pages in your app, depending on what you need.
    - <Link> and <NavLink> render an accessible <a> element, or a TouchableHighlight on React Native. This lets the user initiate navigation by clicking or tapping an element on the page.
    - useNavigate and <Navigate> let you programmatically navigate, usually in an event handler or in response to some change in state
    - A <Navigate> element changes the current location when it is rendered. It's a component wrapper around useNavigate, and accepts all the same arguments as props
    -  Any time that you want to force navigation, you can render a <Redirect>. When a <Redirect> renders, it will navigate using its to prop.


### React Router Hooks
- useNavigate 
    -  to navigate to another page or we can use <Navigate to ="" /> component
    - usage: let navigate = useNavigate();
             navigate('/about', { replace: true })
- useHistory
    - This is one of the most popular hooks provided by React Router. It lets you access the history instance used by React Router. Using the history instance you can redirect users to another page.
    - Properties: 
        - length: Returns a Number. The number of entries in the history stack
        - action: Returns a string representing the current action (PUSH, REPLACE, or POP).
        - location: Returns an object that represents the current location. It may have the following properties:
            - pathname: A string containing the path of the URL
            - search: A string containing the URL query string
            - hash: A string containing the URL hash fragment
            - state: An object containing location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.
    - Methods:
        - push(path, [state]): Pushes a new entry onto the history stack. Useful to redirect users to page
        - replace(path, [state]): Replaces the current entry on the history stack
        - go(n): Moves the pointer in the history stack by n entries
        - goBack(): Equivalent to go(-1).
        - goForward(): Equivalent to go(1).
        - block(prompt): Blocks navigation. It takes a callback as a parameter and invokes it after the navigation is blocked. Most useful when you want to first confirm if the user actually wants to leave the page.

- useParams
    - This hook returns an object that consists of all the parameters in URL. 
    - These URL parameters are defined in the Route URL
    - Ex: <Route path="/profile/:userName" component={Profile} />
    - useParams returns an object { userName: "johndoe " }
- useLocation
    -  This hook returns the location object used by the react-router.
    - This object represents the current URL and is immutable. Whenever the URL changes, the useLocation() hook returns a newly updated location object. 
    - Some of its use includes extracting the query parameters from the URL and doing something depending on the query parameters. 
    - The “search” property of the location object returns a string containing the query part of the URL.
- useRouteMatch
    -  Returns a match object that contains all the information like how the current URL matched with the Route path. 
    - Properties:
        - params: This is an object that contains the variable part of the URL.
        - isExact: This is a boolean value, indicating whether the entire URL matched with the given Router path.
        - path: A string that contains the path pattern.
        - URL: A string that contains the matched portion of the URL. It can be used for nested <Link />s and <Route />s