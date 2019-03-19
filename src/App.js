import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Jumbotron from './components/Document';

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Blood and sand'
		}
		console.log('This is the constructor fo App Component')
		this.handler = this.handler.bind(this)
	}

	handler(e) {
		let val = e.target.value
		
		this.setState((state) => {
			state.title = val
			return { title: state.title }
		})
	}

	render() {
		return (
			<div>
				<div className="App container-fluid">
					<div className="row">
						<div className="col-1">
							<img src={logo} className="App-logo" alt="logo" />
						</div>
						<div className="col-11 text-left pt-2">
							<nav>Navegation</nav>
						</div>
					</div>
				</div>

				<Jumbotron title={this.state.title} />

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
