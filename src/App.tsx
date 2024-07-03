import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Vacancies from './components/Vacancies';

function App() {
    return (
			<div className=''>
				<Header />
				<Footer />
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/Vacancies' element={<Vacancies />} />
				</Routes>
			</div>
		)
}

export default App;
