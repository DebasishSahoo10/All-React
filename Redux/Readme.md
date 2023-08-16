# Redux : the industry state manager

1. So what's wrong with Context API?

: context will update each and every component on a state change even if some of the components aren't using that state. And no, react memo or other memoization stuff won't help either. that is why need for global state managers like zustand or redux arrises.

2. What are Enhancers?

: it is a function that takes the reducer wraps it with a special task, that will performed before or after the reducer runs.

3. What are MiddleWares?

: A middleware in Redux is a function that has access to the store's dispatch and getState methods. It allows you to intercept actions before and after they reach the reducer, and perform any asynchronous tasks or logging.