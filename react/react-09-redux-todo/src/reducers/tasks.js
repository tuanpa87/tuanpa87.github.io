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

var myReducers = (state=initialState, action) => {
    switch (action.types) {
        case types.LIST_ALL:
            return state

        default: return state;
    }
}

//truyen action vao Reducers


export default myReducers