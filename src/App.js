import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Document from './components/Document';

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'blood and sand'
		}
		console.log('This is the construvtor fo App Component')
	}

	handler(e) {
		console.log(e.target.value)
	}

	render() {
		return (
			<div>
				<div className="App container-fluid">
					<img src={logo} className="App-logo" alt="logo" />
					<nav>
						Navegation
					</nav>
				</div>

				<Document title='Titulo del Jumbotron' />

				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>
							<input className='form-control' onChange={this.handler}></input>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
