import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './wrapper';

const names = [
	'Peter',
	'Rich',
	'Minh',
	'Morty',
	'Rick',
];

const tabs = [
	{title: 'one', content: 'first tab'},
	{title: 'two', content: 'second tab'},
	{title: 'three', content: 'third tab'}
];

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Wrapper names={names} tabs={tabs} />, root);
});
