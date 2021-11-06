import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    category: 'View all'
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function setCategory(category) {
        dispatch({
            type: 'SET_CATEGORY',
            payload: category
        })
    }
    

    return (
        <GlobalContext.Provider value={{ category: state.category, setCategory }}>{children}</GlobalContext.Provider>
    )
}
