import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions' 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null, //dùng để xác định task đang sửa
      //filter: { //dung de filter form TaskList
       // name: '',
        //status: -1 
      //},
      //keyword: '', //dùng cho chức năng tìm kiếm
      sortBy: 'name',
      sortValue: 1
    }
  }


  //chức năng thêm
  onToogleForm = () => {
    // if (this.state.isDisplayForm && this.state.taskEditing !== null) {
    //   //khi dang mo form sửa
    //   this.setState({
    //     isDisplayForm: true,
    //     taskEditing: null
    //   })
    // } else {
    //   //mac dinh
    //   this.setState({
    //     isDisplayForm: !this.state.isDisplayForm,
    //     taskEditing: null
    //   })
    // }
    this.props.onToogleForm();
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  //chức năng cập nhật trạng thái
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    console.log(id);
    var index = this.findIndex(id)
    console.log(index);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks: tasks,
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  findIndex = (id) => {
    var result = -1;
    var { tasks } = this.state;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    return result
  }

  //chức năng xóa
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id)
    console.log(index);
    if (index !== -1) {
      tasks.splice(index, 1 ); 
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  }

  //chức năng sửa task
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id)
    console.log(index);
    var taskEditing = tasks[index]
    //console.log(taskEditing)
    if (index !== -1) {
      this.setState({
        taskEditing: taskEditing 
      });
      //console.log(this.state.taskEditing) 
      //log tren se log lai state cu chua duoc update 
    }
    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    //console.log(filterName, '-' , filterStatus , typeof filterStatus)
    filterStatus = parseInt(filterStatus, 10)
    //console.log(typeof filterStatus)
    this.setState ({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }

  //chức năng search
  onSearch = (keyword) => {
    console.log(keyword)
    this.setState({
      keyword: keyword.toLowerCase()
    })
  }

  //chuc nang sap xep
  onSort = (sortBy, sortValue) => {
    console.log(sortBy, sortValue)
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }


  render() {
    var {taskEditing } = this.state; // ~ var tasks = this.state.tasks
    var {filter }  = this.state; 
    //console.log(filter)
    var { keyword } = this.state; 
    var {sortBy, sortValue} = this.state


    var {isDisplayForm} = this.props
    //filter task list
    // if (filter) {  
    //   //!x will return true for every "falsy" value (empty string, 0, null, false, undefined, NaN) 
    //   if(filter.name) { //kiểm tra khác (empty string, 0, null, false, undefined, NaN) 
       
    //     //task nay sẽ render ở chỗ TaskList phía dưới nhé
    //     //filter methol js: filter (Test function) trả lại những giá trị thỏa mãn đk của test function
    //     tasks = tasks.filter((task) => { //gắn lại task
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1
    //     }) 
    //   }

      //filter theo status
      // tasks = tasks.filter((task) => { //gắn lại task
      //   if (filter.status === -1) {
      //     return task
      //   } else {
      //     return task.status === (filter.status === 1 ? true : false)
      //       // chuyển lại giá trị 0 1 về true false cho filter.status
      //   }
      // })

    //}
    // if (sortBy === 'name') {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue;  // cai nao return ve 1 thi thuc hien cai do
    //     else if (a.name < b.name) return -sortValue //sortValue = 1 or -1
    //     else return 0
    //   })
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue;  
    //     else if (a.status  < b.status ) return sortValue 
    //     else return 0
    //   })
    // }
 
    
    //chuc nang tim kiem
    // if (keyword) {
    //   tasks = tasks.filter((task) => { //gắn lại task
    //     return task.name.toLowerCase().indexOf(keyword) !== -1
    //   }) 
    // }

    var elmTaskForm = (isDisplayForm) ? <TaskForm 
                                        task={taskEditing}/>  //truyền prop này để sửa task 
                                      : ''
    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>

          <div className="row">
            {/* Form */}
            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
              {elmTaskForm}
            </div>
            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onToogleForm}
              >
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              {/* <button
                type="button"
                className="ml-5 btn btn-danger"
                onClick={this.onGenarateData}>
                Generate Data
              </button> */}

              {/* Search & Sort */}
              <TaskControl 
                onSearch={this.onSearch} 
                onSort={this.onSort}
                sortBy= {sortBy}
                sortValue = {sortValue}
              />

              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* List */}
                  <TaskList 
                    onUpdateStatus={this.onUpdateStatus} 
                    onDelete = {this.onDelete}
                    onUpdate = {this.onUpdate}
                    onFilter = {this.onFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { //chuyen state tu store chung thanh props 
  return {
     isDisplayForm: state.isDisplayForm
   }
} 

const mapDispatchToProps = (dispatch, props) => { //chuyen dispatch (action ) thanh tu store props 
  return {
    onToogleForm: () => {
      dispatch(actions.toggleForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

