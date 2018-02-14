import { createStore } from 'redux';

var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1 //1 tu a-z, -1 tu z-z
    }
}

var myReduce = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        state.status = !state.status
        return state
    }

    if(action.type === 'SORT') {
        var {by, value} = action; //by = action.by
        var {status}  = state;
        //console.log(action)
        state.sort = {
            by: action.sort.by,
            value: action.sort.value
        }
        return state
    }
    return state;
}
 
const store = createStore(myReduce);
console.log(store)
console.log('Default state:', store.getState())


//thuc hien thay doi status
var action = {
    type: 'TOGGLE_STATUS'
}
store.dispatch(action);
console.log('Toogle status: ', store.getState())

var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value : -1
    }
}
store.dispatch(sortAction);

console.log('sort: ', store.getState())

//thuc hien cong viec sap xep ten tu z-> a