# Redux : the industry state manager

1. So what's wrong with Context API?

: context will update each and every component on a state change even if some of the components aren't using that state. And no, react memo or other memoization stuff won't help either. that is why need for global state managers like zustand or redux arrises.

1. So how does Redux prevents Re-renders?

:  Redux uses selectors, which are functions that select a piece of state from the store rather than getting entire. Selectors can help prevent unnecessary renders by avoiding creating new references to the same data.
: Normalization: Redux encourages normalization of state shape, which involves storing data in a flattened, tabular format and looking up nested data using references (like IDs). This can help avoid unnecessary re-renders when nested data changes, as only the components that are connected to the changed data will re-render, not the entire application

2. What are Enhancers?

: it is a function that takes the reducer wraps it with a special task, that will performed before or after the reducer runs.

3. What are MiddleWares?

: A middleware in Redux is a function that has access to the store's dispatch and getState methods. It allows you to intercept actions before and after they reach the reducer, and perform any asynchronous tasks or logging.

4. What is useSelector?

: (a)  useSelector hook, which lets your React components read data from the Redux store. useSelector accepts a single function, which we call a selector function. A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result.
(b) But, what happens if we dispatch an action? The Redux state will be updated by the reducer, but our component needs to know that something has changed so that it can re-render with the new state. We know that we can call store.subscribe() to listen for changes to the store, so we could try writing the code to subscribe to the store in every component. But, that would quickly get very repetitive and hard to handle.
(c) Fortunately, useSelector automatically subscribes to the Redux store for us! That way, any time an action is dispatched, it will call its selector function again right away. If the value returned by the selector changes from the last time it ran, useSelector will force our component to re-render with the new data. All we have to do is call useSelector() once in our component, and it does the rest of the work for us.
(warn) useSelector compares its results using strict === reference comparisons, so the component will re-render any time the selector result is a new reference! This means that if you create a new reference in your selector and return it, your component could re-render every time an action has been dispatched, even if the data really isn't different. For example, passing this selector to useSelector will cause the component to always re-render, because array.map() always returns a new array reference. so avoid using any of this methods.

5. so what kind of state should go into redux? does input states or form states should go?

: usually we should avoid pushing micro states into redux. simply because even if redux is optimised, pushing small things into them is still heavy and un-necessary. so all the micro state should be managed by component logic and on a big user event like form submit it can be pushed to reedux all at once.

6. Difference between Connect API vs. Hooks way in Redux?

: (a) Redux hooks have simpler APIs than Connect API. they feel more react way.
(b) Hooks only subscribe components to the parts of the state they need, rather than the entire store.
(c) Hooks connect components directly to the store, while the Connect API wraps components in higher-order components.
(d) Conncet API has acheived Separation of concerns: Connected components are separated from presentational components.
(e) Caching: Connected components memoize the result of mapStateToProps.

7. What is the work of Immmer?

: Immer takes mutable state changing logic and changes it to the immutable logic.

8. Immer is built in Redux Toolkit?

: Yes, and due to this we can write mutable Javascript logic, which feels more simple than dealing with tens of spread operators. We can use Immer as dependecny in the vanilla redux but we alwys have to use a produce wrapper over there, and it feels like a extra thing to manage.

9. What is that one thing you a global state management must be used for apart from state management?

: it is to transfer all the small utilities functions to the state manager. Global state managers are like back-end of the components. so we can try to make our components clean and crisp, while pushing the utility logics like conditions, async work, filterisations to the state manager.

10. Why we need Redux Async Thunk?

: to make the async work to be a part of the state updates just like how a synchronous state update looks like. it also makes error handling and loading state handling easier.

11. What is a Slice?

: Slice in RTK, is a combination of state and reducer logic for updating that state, but with slice we can create small individual chunks of state that can be part of the whole larger state.

12. What is Redux Toolkit?

: Redux toolkit is an abstarction over Redux Core. RTK has also some extra utilities like Built-in Immer, built-in Combine Reducers, Async Thunk, Extra Reducers which make the state flow more streamlined with our requirements.  In a way we can say that these utilities help the componenets to be cleaner.

13. what are Extra Reducers?

: Extra Reducers are the action logics which gets triggered automatically when the dependency happens. Now the dependency in a general context can be a async work or an actions from another slice.