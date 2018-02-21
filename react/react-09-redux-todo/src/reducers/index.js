import {combineReducers} from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'


const myReducers = combineReducers ({ //combines lai cac reducer con
    tasks, //tasks: tasks
    isDisplayForm //isDisplayForm: isDisplayForm
})

export default myReducers