import {combineReducers} from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditing from './itemEditing'


const myReducers = combineReducers ({ //combines lai cac reducer con
    tasks, //tasks: tasks
    isDisplayForm, //isDisplayForm: isDisplayForm
    itemEditing //ItemEditing: ItemEditing
})

export default myReducers