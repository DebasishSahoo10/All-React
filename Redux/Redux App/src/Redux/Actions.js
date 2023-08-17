export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'
export const DECREMENT = 'DECREMENT'
export const SET = 'SET'

export const Increment = (value) => ({type : INCREMENT, payload : value})
export const Reset = () => ({type : RESET})
export const Decrement = (value) => ({type : DECREMENT, payload : value})
export const Set = (value) => ({type : SET, payload : value})