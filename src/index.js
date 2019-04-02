import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/*
let BooksList = [
	{ author: 'Fiedor Dovstoyeski', title: 'Crime and Punishment', pages: '578' },
	{ author: 'Virginia Wolf', title: 'Mrs. Dolloway', pages: '230' },
	{ author: 'Emily Bronte', title: 'Wuthering Heights', pages: '346' }
];

class Library extends React.Component {
	state = {
		open: false,
		data: [],
		loading: false
	}

	componentDidMount() {
		this.setState({
			loading: true
		})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/3')
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({ data, loading: false })
			});
	}

	componentDidUpdate() {
		console.log('Component was updated')
	}

	toggleLibrary = () => {
		this.setState(
			// cause its asyncronous it can take a while to get the value so its better
			// we display the prev as we wait for the new one
			prevState => ({
				open: !this.state.open
			})
		)
	}

	render() {

		const { books } = this.props

		return (
			<section>
				<h2>This library is {this.state.open ? 'open' : 'close'}</h2>
				{books.map(
					(book, i) => (
						<div name={`well_${i}`} key={i}>
							<p>Author: {book.author}</p>
							<p>Title: {book.title}</p>
							<p>Pages: {book.pages}</p>
						</div>
					)
				)}
				<input type="button" value="Toggle" onClick={this.toggleLibrary} />

				{
					this.state.data.map(
						(item) => (
							<div key={item.id}>
								<section>
									<p>{item.name} -  ${item.price} <br></br>
										{item.description}
									</p>
								</section>
							</div>
						)
					)}
				<p>

				</p>
			</section>
		);
	}
}*/

class FavouriteColorForm extends Component {
	state = { value: '' }
	newColor = e => {
		this.setState({ value: e.target.value })
	}

	submit = (e) => {
		console.log(`New Color: ${this.state.value} `)
		e.preventDefault()
	}

	render() {
		return (
			<div style={{ backgroundColor: this.state.value }}>
				<form onSubmit={this.submit}>
					<label>Favorite Color:
					<input
							type="color"
							onChange={this.newColor}
						></input>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

render(
	// <Library books={BooksList} />
	<div>
		<FavouriteColorForm />
	</div>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
