import {combineReducers} from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditing from './itemEditing'
import filterTable from './filterTable'
import search from './search'



const myReducers = combineReducers ({ //combines lai cac reducer con
    tasks, //tasks: tasks
    isDisplayForm, //isDisplayForm: isDisplayForm
    itemEditing, //ItemEditing: ItemEditing
    filterTable, //filterTable : filterTable
    search //search : search  
})

export default myReducers