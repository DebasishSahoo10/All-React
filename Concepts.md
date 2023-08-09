# React Concepts

1. What is Code Splitting? What are the ways to do?

: (a) Code Splitting is a technique where we reduce the bundle size to fasten the initial load by not bundling those pieces of our app which is not needed or shown on the very first render. In this process the bundler (Webpack, Parcel, Rollup etc.) we are using plays a big role, they simply don't bundles the chunks that is dynamically imported.
(b) There are mainly two ways for this : Dynamic Imports to call a fucntion/component when it is needed. Or using React.Lazy and Suspense to load a Route when user vists that route.
(c) Dynamic Imports works better when used for heavy functions and large data holding components. To lazy load a whole route, we should use Route based Dynamic Imports.
(d) So How normal Dynamic Imports works : you import a component with "import('/pathname')" and then attach a (.then) to it access it.
(e) How Does React.lazy works : you just dynamically import a route path and then wrap under "lazy()" and store it in variable. then when we are going to use that component we can just use "<Suspense></Suspense>" wrapper and provide a fallback for it.

2. Why we initialise the useRef with a null?

: useRef is used to reference the DOM elements, hence if we leave it un-initialised, then its value will be undefined and React will be unsure of our intention with it. So it's better to initialise with a null.

3. What's the difference between a state variable(useState) vs. a normal variable in react?

: changing a normal variable won't change the state, but a state variable can change the state of the application.

4. What is difference between Controlled and Uncontrolled Component?

: In a controlled component, we change and get the values of elements through our hooks and the logic. In an uncontrolled component, we get the reference of an element from the HTML or from the actual DOM and then we can use it.

5. What are Error Boundries?

: Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
: Error boundaries work similar to a JavaScript catch {} block, but for components. If a JavaScript error happens inside a component, it used to corrupt React’s internal state and cause it to emit cryptic errors. Error boundaries help in removing these errors and display a fallback UI

6. What are the three major rules of using a hook?

: Hooks should start with "use": This is a naming convention in React. React will warn you if your hook doesn't start with "use". 
: Only Call Hooks at the Top Level: Hooks should not be called inside loops, conditions, or nested functions.
: Only Call Hooks from React Functions: Hooks should not be called from regular JavaScript functions.

7. What are the types of the side effects present in React?

: Two. One which needs cleanup after performing like subscriptions. And second that doesn't need a cleanup like fetch calls, console logging, DOM Manipulations

8. Reusable Dynamic Functions vs. Custom Hooks vs. Higher Order Component

: Reusable Functions can't use hooks in them, because hooks can only be declared inside Components
: That's why need of higher order components came. HOC are functions that takes a component, performs a logic on it and returns a better improved components. but it is a bit complicated
: and then comes the custom hooks for rescue. they work just like a function but they can have their own state, it means they can use hooks inside them

9. 