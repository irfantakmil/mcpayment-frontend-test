import React,{useContext} from 'react';
import { MainContext } from '../../context';


const ExpensesIncome = () => {
    const {transactions} = useContext(MainContext);
    const incomeTransactions = transactions.filter(item => item.type === "income");
    const expenseTransactions = transactions.filter(item => item.type === "expense");
    const incomeAmount = incomeTransactions.map(num => num.amount);
    const expenseAmount = expenseTransactions.map(num => num.amount);
   
    console.log(expenseTransactions);
    console.log(expenseAmount);
    

    const income = incomeAmount.reduce((total,num) => (total+=num),0);
    const expense = expenseAmount.reduce((total,num) => (total+=num),0);
    const balance = income - expense;

    return (
        <>
            <div>
                <h3>Current Balance</h3>
                <h2 className='balance'>${balance}</h2>
                <hr/>
            </div>
            <div>
                <h4>Income</h4>
                <h3 className='income'>${income}</h3>
                <hr/>
            </div>
            <div>
                <h4>Expense</h4>
                <h3 className='expense'>${expense}</h3>
                <hr/>
            </div>

        </>
    )
}

export default ExpensesIncome;