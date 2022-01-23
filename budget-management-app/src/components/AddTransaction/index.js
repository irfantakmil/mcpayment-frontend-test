import React, {useContext,useState} from 'react';
import { MainContext } from '../../context';


const AddTransaction = () => {
    const [transactionName, setTransactionName] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("income");

    const context = useContext(MainContext);



    const submitTransaction = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text: transactionName,
            amount: +amount,
            type: transactionType
        }

        context.addFunction(newTransaction);
    }

    return (
        <div className='add_container'>
            <h2>Add transaction</h2>
            <form onSubmit={submitTransaction}>
                <div>
                    <label>Transaction's name</label>
                    <input type="text" value={transactionName} onChange={(e) => setTransactionName(e.target.value)} placeholder="Enter transaction's name"/>
                </div>
                <label>Transaction's type</label>
                <div className='select_option'>
                    <select id="transaction" value={transactionType} onChange={(e) => {
                        const selectedType = e.currentTarget.value;
                        setTransactionType(selectedType);
                        console.log(selectedType);
                    }}>
                        <option value="income">income</option>
                        <option value="expense">expense</option>
                    </select>
                </div>
                <div>
                    <label>Transaction's amount</label>
                    <input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"/>
                </div>
                <button className="add_btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;