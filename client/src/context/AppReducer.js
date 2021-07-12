export default (state,action) =>{
    switch (action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // ID מועבר מהגלובל סטייט וזה בעצם הaction.payload
                //במצב מחיקה אנחנו בעצם עושים פילטר ומחזירים הכול חוץ מהאייטם עם הID שההעברנו
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.payload ,...state.transactions]
            }


        default:
            return state;
    }
}
