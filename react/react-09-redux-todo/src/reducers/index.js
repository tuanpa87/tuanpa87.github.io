import {combineReducers} from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditing from './itemEditing'
import filterTable from './filterTable'


const myReducers = combineReducers ({ //combines lai cac reducer con
    tasks, //tasks: tasks
    isDisplayForm, //isDisplayForm: isDisplayForm
    itemEditing, //ItemEditing: ItemEditing
    filterTable //filterTable : filterTable 
})

export default myReducers