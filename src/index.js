import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let BooksList = [
	{ author: 'Fiedor Dovstoyeski', title: 'Crime and Punishment', pages: '578' },
	{ author: 'Virginia Wolf', title: 'Mrs. Dolloway', pages: '230' },
	{ author: 'Emily Bronte', title: 'Wuthering Heights', pages: '346' }
];

const Library = ({ books }) => {
	return (
		<section>
			{books.map(
				(book,i) => (
					<div name={`well_${i}`} key={i}>
						<p>Author: {book.author}</p>
						<p>Title: {book.title}</p>
						<p>Pages: {book.pages}</p>
					</div>
				)
			)}

		</section>
	);
}

render(
	<Library books={BooksList} />
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
