# React Concepts

1. What is Code Splitting? What are the ways to do?

: (a) Code Splitting is a technique where we reduce the bundle size to fasten the initial load by not bundling those pieces of our app which is not needed or shown on the very first render. In this process the bundler (Webpack, Parcel, Rollup etc.) we are using plays a big role, they simply don't bundles the chunks that is dynamically imported.
(b) There are mainly two ways for this : Dynamic Imports to call a fucntion/component when it is needed. Or using React.Lazy and Suspense to load a Route when user vists that route.
(c) Dynamic Imports works better when used for heavy functions and large data holding components. To lazy load a whole route, we should use Route based Dynamic Imports.
(d) So How normal Dynamic Imports works : you import a component with "import('/pathname')" and then attach a (.then) to it access it.
(e) How Does React.lazy works : you just dynamically import a route path and then wrap under "lazy()" and store it in variable. then when we are going to use that component we can just use "<Suspense></Suspense>" wrapper and provide a fallback for it.

2. Why we initialise the useRef with a null?

: useRef is used to reference the DOM elements, hence if we leave it un-initialised, then its value will be undefined and React will be unsure of our intention with it. So it's better to initialise with a null.