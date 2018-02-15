import {combineReducers} from 'redux'
import tasks from './tasks'

const myReducers = combineReducers ({ //combines lai cac reducer con
    tasks //tasks: tasks
})

export default myReducers