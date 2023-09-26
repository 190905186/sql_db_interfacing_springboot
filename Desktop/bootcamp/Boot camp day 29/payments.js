const redux = require('redux')
const reduxLogger = require('redux-logger')
const { createStore } = require("redux")
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const combineReducer = redux.combineReducers
const bindActionCreators = redux.bindActionCreators
// Actions

const MOBILE_RECHARGE = "MOBILE_RECHARGE"
const ELECTRIC_BILLS = "ELECTRIC_BILLS"

// Actions Implementation

// For Mobile recharge
const mobileRecharge = (mobileRechargeValue) => {

    return {
        type: MOBILE_RECHARGE,
        value: mobileRechargeValue
    }
}

// For Electric bills
const electricBills = (electricBillsValue) => {

    return {
        type: ELECTRIC_BILLS,
        value: electricBillsValue
    }
}

// Initial State
const accountState = {
    money: 1000
}

const jioRetailerState = {
    balance: 30400
}

const apspdclState = {
    balance: 40500
}

// Reducers

const payments = (state = accountState, action) => {
    if (action.type === MOBILE_RECHARGE || action.type === ELECTRIC_BILLS) {
        return {
            ...state,
            money: state.money - action.value
        }
    }
    return state

}

const jioRetailer = (state = jioRetailerState, action) => {
    if (action.type === MOBILE_RECHARGE) {
        return {
            ...state,
            balance: state.balance + action.value
        }
    }
    return state
}

const apspdcl = (state = apspdclState, action) => {
    if (action.type === ELECTRIC_BILLS) {
        return {
            ...state,
            balance: state.balance + action.value
        }
    }
    return state
}

const totalPayments = combineReducer({
    Yours: payments,
    Jio: jioRetailer,
    APSPDCL: apspdcl
}
)

// Store
const store = createStore(totalPayments, applyMiddleware(logger))

// subscribing 
store.subscribe(() => {
})

const actions = bindActionCreators(
    {
        mobileRecharge, electricBills
    },
    store.dispatch
)

actions.mobileRecharge(30)
actions.electricBills(40)