import * as types from './../constants/ActionTypes' //import lai danh sach action duoi dang hang so

var data = JSON.parse(localStorage.getItem('tasks'))

//test
/*
var initialState = [ 

// {
//     id: '1',
//     name: 'hocj react',
//     status: true
// }
];
*/

var initialState = (data) ? data : []

var myReducers = (state = initialState, action) => {
    switch (action.types) {
        case types.LIST_ALL:
            return state

        case types.ADD_TASK:
            console.log(action);
            var newTask = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state] //tranh tham chieu bo nho

        default: return state;
    }
}


var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + s4() + s4() + '-' + s4() + s4() + s4() + s4() + s4() + s4()
}



export default myReducers