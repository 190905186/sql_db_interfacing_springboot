const { configureStore } = require('@reduxjs/toolkit')
const {createStore}= require("redux")
// Actions

const debit="DEBIT"
const credit="CREDIT"

// Actions Implementation

// For debiting the money
const debitMoney=(debitValue)=>{
    
    return {
        type:debit,
        value:debitValue
    }
}

// For crediting the money
const creditMoney=(creditValue)=>{
    
    return {
        type:credit,
        value:creditValue
    }
}

// Initial State
const accountState={
    money:1000,
    cur:"INR"
}

// Reducers

const creditDebitReducer=(state=accountState,action)=>{
    switch(action.type){
        case "DEBIT" :{
            
            return {
                ...state,
                money:state.money-action.value
            }
        }
        case "CREDIT":{
            
            return {
                ...state,
                money:state.money+action.value
            }
        }
        default: return state
    }
}

// Store

const store=createStore(creditDebitReducer)

// subscribing 

store.subscribe(()=>{
    console.log("The money present in the account after updating is",store.getState())
    console.log(store.action)
})

// Dispatching a debit action
store.dispatch(debitMoney(20))
// Dispatching a credit action
store.dispatch(creditMoney(1000))
