import {configureStore as createStore } from '@reduxjs/toolkit'

const initialState = {count : 0}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {count : state.count + 1}
    }
    return state
}

export const store = createStore({reducer : reducer})