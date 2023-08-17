import {configureStore as createStore } from '@reduxjs/toolkit'
import { DECREMENT, INCREMENT, RESET, SET } from './Actions'

const initialState = {count : 0}

const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {count : state.count + (action.payload ? action.payload : 1)}
    }
    if (action.type === RESET) {
        return {count : 0}
    }
    if (action.type === DECREMENT) {
        return {count : state.count -  (action.payload ? action.payload : 1)}
    }
    if (action.type === SET) {
        return {count : action.payload}
    }
    return state
}

export const store = createStore({reducer : reducer})