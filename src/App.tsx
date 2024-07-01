import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
		<div className=''>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				{/* <Route path='/' element={<Hero />} /> */}
			</Routes>
		</div>
	)
}

export default App;
