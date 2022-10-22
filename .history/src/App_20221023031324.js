import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Search/>
				<List/>
			</div>
		)
	}
}
