import React, { Component } from 'react';

class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elmStyle: {display: 'none'}
        }
    }

    onDropDown = () => {
        this.setState({
            elmStyle: {display: 'block'}
        })
    }

    offDropDown = () => {
        this.setState({
            elmStyle: {display: 'none'}
        })
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button" id="dropdownMenu1" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="true"
                    onClick={this.onDropDown}
                    onBlur={this.offDropDown}
                    >
                        Sắp Xếp 
                        <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul 
                    className="dropdown-menu" 
                    aria-labelledby="dropdownMenu1" 
                    style={this.state.elmStyle}
                    > 
                    {/* set style in react: style = {element's style object} */}
                    {/* style={{display: 'block', background: 'red'}} */}

                
                        <li>
                            <a role="button">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li>
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                        <li><a role="button">Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
