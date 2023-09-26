const {createStore}= require("redux")
// Single Action
// npm install redux
const BUY_CAKE="BUY_CAKE"
//Action creatin
function buyCake()
{
    return{
        type: 'BUY_CAKE',
        message: "Cake Action......."
    }
}
// initialState of the Object
const initialCakeState={
    numberOfCakes : 10
}
//Reducer
const reducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numberOfCakes : state.numberOfCakes - 1,
        }
        default : return state
    }
}
//Store
const store=createStore(reducer)
console.log("Initial State", store.getState())
store.subscribe(()=>console.log('Update state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())