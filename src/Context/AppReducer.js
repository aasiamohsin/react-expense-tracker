import { Actions } from './GlobalContext'

export const AppReducer = (state, action) => {
    switch(action.type) {
        case Actions.DeleteTransaction:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        
        case Actions.AddTransaction:
            return{ 
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return
    }
}