import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {numberWithCommas} from '../utilis/format'



const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {/*Math.abs return the positive number always , and the sign is for the minus*/}
                {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
                <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
            </li>
    );
};

export default Transaction;
