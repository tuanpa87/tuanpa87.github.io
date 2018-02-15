import * as types from './../constants/ActionTypes'   //import lai danh sach action duoi dang hang so

export const listAll = () =>  {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task //task: task
    }
}