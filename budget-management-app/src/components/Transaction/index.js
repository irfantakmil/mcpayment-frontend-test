import React,{useContext} from 'react';
import { MainContext } from '../../context';

const Transaction = ({transaction}) => {
    const {deleteFunction} = useContext(MainContext);
    console.log(transaction);
    return (
        <>
            <li className={transaction.type === "expense" ? "negative"  : "income" ? "positive" : null}>
                <h4>{transaction.text}</h4> 
                <h4><span>${Math.abs(transaction.amount)}</span></h4> 
                <h4>{transaction.type}</h4>
                <button className="delete_btn" onClick={()=>deleteFunction(transaction.id)}>Delete</button>
            </li>
        </>
    )
}

export default Transaction;