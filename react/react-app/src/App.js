import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
	render() { //hien thi giao dien cho nguoi dung
		return ( //JSX
			<div>
				<h1>App Components</h1>
				<Header />  	{/* khong co tag dong nen viet the nay cho do nham */}

			</div>
			
		);
	}
}

export default App;
