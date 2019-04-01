import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

const SkiCounter = ({total, powder, backcountry, goal}) => {
	return (
		<section>
			<div>
				<p>Total Days: {total}</p>
				<p>Powder: {powder}</p>
				<p>Backcountry: {backcountry}</p>
				<p>Goal: {goal}</p>
			</div>
		</section>
	);
}

render(
	<SkiCounter
		total={skiData.total}
		powder={0}
		backcountry={0}
		goal={0}
	/>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
