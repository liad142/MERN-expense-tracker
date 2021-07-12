const Transaction = require('../modules/Transaction')

// get all transactions
//@route : GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}


//  ADD transactions
//@route : POST /api/v1/transactions
exports.addTransactions = async (req, res, next) => {

    try {
        const {text, amount} = req.body;
        const transaction = await Transaction.create(req.body)
        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        //מוציא לנו את הERROS במערך עם כל הERRORS
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'server error'
            })
        }
    }

}


//  DELETE transactions
//@route : Delete /api/v1/transactions/:id
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        }
        await transaction.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}


