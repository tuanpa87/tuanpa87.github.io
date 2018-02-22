import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from '.././actions'

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = { //state để tìm kiếm 
            filterName: '',
            filterStatus: -1 //all: -1, active: 1, deactive : 0
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        var filter = { // lay tu this.state
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter)  //truyen states hien tai vao state chung
        this.setState({
            [name]: value
        })
    }

    render() {
        var { filterName, filterStatus } = this.state;
        var { tasks, filterTable } = this.props;
        console.log(filterTable)

        //filter on table, lay dieu kien o state chung redux
        //filter theo name
        if (filterTable.name) { //kiểm tra khác (empty string, 0, null, false, undefined, NaN) 

            //task nay sẽ render ở chỗ TaskList phía dưới nhé
            //filter methol js: filter (Test function) trả lại những giá trị thỏa mãn đk của test function
            tasks = tasks.filter((task) => { //gắn lại task
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
            })
        }

        //filter theo status
        tasks = tasks.filter((task) => { //gắn lại task
            if (filterTable.status === -1) {
                return task
            } else {
                return task.status === (filterTable.status === 1 ? true : false)
                // chuyển lại giá trị 0 1 về true false cho filter.status
            }
        })

        var elmTasks = tasks.map((task, index) => { //tạo các TaslItem con từ props truyền vào  
            return <TaskItem
                key={task.id} //truyền key duy nhất
                index={index}
                task={task}
            />
        })

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>
        );
    }
}


const mapStateToProps = (state) => { //chuyen state tu store chung thanh props cua TaskList
    return {
        tasks: state.tasks, //khai boa props todos
        filterTable: state.filterTable
    }
}

const mapDispatchToProps = (dispatch, props) => { //chuyen dispatch (action ) thanh tu store props 
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTask(filter))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
