//This component handles the App template used on every page
import React, {Component} from 'react';
import {fetchSomething} from './SampleAction'

class Sample extends Component{
	render(){
		return (
			<div className ="container-fluid">
				<h1>EdTrack</h1>
				<h2>Performance Tracker</h2>
				<button onClick={fetchSomething}>Button</button>
			</div>
		);
	}
}

export default Sample;
