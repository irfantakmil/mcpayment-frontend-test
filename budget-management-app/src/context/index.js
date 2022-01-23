import React, {createContext, useReducer} from 'react';
import appReducer from '../reducer';
import { deleteTransaction, addTransaction } from '../action';

const initialState = {
    transactions: [
        {id:1, text:'Movie', amount:50, type:'expense'},
        {id:2, text:'Salary', amount:300, type:'income'},
    ]
}

const MainContext = createContext(initialState);

const MainProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);;

    function deleteFunction(id){
        dispatch(deleteTransaction(id));
    }

    function addFunction(transaction){
        dispatch(addTransaction(transaction))
    }

    return (
        <MainContext.Provider value={{
            transactions: state.transactions,
            deleteFunction,
            addFunction
        }}>
            {children}
        </MainContext.Provider>
    )
}

export {MainContext, MainProvider};