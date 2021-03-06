// App.js

// react
import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

// modules

// stylin
import './App.css';

// components
import Nav from './components/Nav';
import Main from './components/Main';
import SidebarLeft from './components/SidebarLeft'
import SidebarRight from './components/SidebarRight'

// util
import {getLsObj} from './util/localstorage';

// start
export default function App() {
	let initLsObj = getLsObj()

	// state
	const [loggedIn, setLoggedIn] = useState(false);
	const [lsObj, setLsObj] = useState(initLsObj);

	// utility functions
	const checkLsObj = () => {
		let _lsObj_ = getLsObj();
		setLsObj(() => {return {..._lsObj_}})
	}
	
	// effects
	useEffect(()=>{
		checkLsObj()
	}, [loggedIn])
	
  	return (
		<BrowserRouter>
			<div className="App">
				<Nav loginObj={{loggedIn, setLoggedIn}} lsObj={lsObj} checkLsObj={checkLsObj} />
				<SidebarLeft loggedIn={loggedIn} />
				<Main loginObj={{loggedIn, setLoggedIn}} lsObj={lsObj} />
				<SidebarRight />
			</div>
		</BrowserRouter>
  	)
}