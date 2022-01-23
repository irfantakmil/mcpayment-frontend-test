import { DELETE_TRANSACTION, ADD_TRANSACTION } from "../types"

export const deleteTransaction = (id) => ({
    type: DELETE_TRANSACTION,
    payload:id
})

export const addTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction
})