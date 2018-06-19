import React, {Component} from 'react';

import classes from './Person.css';


class Person extends Component {
    constructor (props) {
        super(props);
        console.log('[Person.js] inside constructor', props)
      }
    
      componentWillMount() {
        console.log('[Person.js] inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Person.js] inside componentDidMount()')
      }
    

    render() {
        console.log('[Person.js] inside render()')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;


// const person = ( props ) => {
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

// export default person;