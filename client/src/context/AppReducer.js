export default (state,action) =>{
    switch (action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading:false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // ID מועבר מהגלובל סטייט וזה בעצם הaction.payload
                //במצב מחיקה אנחנו בעצם עושים פילטר ומחזירים הכול חוץ מהאייטם עם הID שההעברנו
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[...state.transactions, action.payload]
            }
        case 'TRANSACTIONS_ERROR':
            return {
                ...state,
                error:action.payload
            }


        default:
            return state;
    }
}
