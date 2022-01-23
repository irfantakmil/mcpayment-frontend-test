import React, {useContext} from 'react';
import { MainContext } from '../../context';
import Transaction from '../Transaction';

const TransactionList = () => {
    const context = useContext(MainContext);

    return (
        <>
            <div id='transactions_container'>
                <h2 className='transactions_title'>Transactions</h2>
                <ul className='transactions_list'>
                    {context.transactions.map(transaction =>(
                    <Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TransactionList;

