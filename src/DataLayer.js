import {createContext,useContext,useReducer} from 'react';

export const context=createContext();

export const DataLayer=({initialState,reducer,children}) => (
    <context.Provider value={useReducer(reducer, initialState)}>
        {children}
    </context.Provider>
)

export const DatalayerContext = () => useContext(context);