# Redux : the industry state manager

1. So what's wrong with Context API?

: context will update each and every component on a state change even if some of the components aren't using that state. And no, react memo or other memoization stuff won't help either. that is why need for global state managers like zustand or redux arrises.

2. What are Enhancers?

: it is a function that takes the reducer wraps it with a special task, that will performed before or after the reducer runs.

3. What are MiddleWares?

: A middleware in Redux is a function that has access to the store's dispatch and getState methods. It allows you to intercept actions before and after they reach the reducer, and perform any asynchronous tasks or logging.

4. What is useSelector?

: (a)  useSelector hook, which lets your React components read data from the Redux store. useSelector accepts a single function, which we call a selector function. A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result.
(b) But, what happens if we dispatch an action? The Redux state will be updated by the reducer, but our component needs to know that something has changed so that it can re-render with the new state. We know that we can call store.subscribe() to listen for changes to the store, so we could try writing the code to subscribe to the store in every component. But, that would quickly get very repetitive and hard to handle.
(c) Fortunately, useSelector automatically subscribes to the Redux store for us! That way, any time an action is dispatched, it will call its selector function again right away. If the value returned by the selector changes from the last time it ran, useSelector will force our component to re-render with the new data. All we have to do is call useSelector() once in our component, and it does the rest of the work for us.
(warn) useSelector compares its results using strict === reference comparisons, so the component will re-render any time the selector result is a new reference! This means that if you create a new reference in your selector and return it, your component could re-render every time an action has been dispatched, even if the data really isn't different. For example, passing this selector to useSelector will cause the component to always re-render, because array.map() always returns a new array reference. so avoid using any of this methods.