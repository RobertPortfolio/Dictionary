import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages';
import Header from '../header';

const App = () => {
	return(
		<div className="container-fluid">
			<Header />
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/sign" element={<LoginPage />} />
			</Routes>
		</div>
	);
};	

export default App;