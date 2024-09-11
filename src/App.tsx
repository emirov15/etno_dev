import React from 'react'
import './App.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Vacancies from './components/Vacancy'
import Events from './components/Events'
import Community from './components/Community'
import Video from './components/Video'
import Login from './components/Login/Login'
import Organizations from './components/Organizations'
import RouterProtector from './components/RouterProtector'
import AddVacan from './components/AddVacancy'
import AddEvents from './components/AddEvents'
import Auth from './components/Auth'

function App() {
	return (
		<div className=''>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/Vacancies' element={<Vacancies />} />
				<Route path='/events' element={<Events />} />
				<Route path='/video' element={<Video />} />
				<Route path='/organizations' element={<Organizations />} />
				<Route path='community' element={<Community />} />
				<Route path='/login' element={<Login />} />
				v <Route path='/auth' element={<Auth />} />
				<Route
					path='/addVacan'
					element={
						<RouterProtector>
							<AddVacan />
						</RouterProtector>
					}
				/>
				<Route
					path='/addEvents'
					element={
						<RouterProtector>
							<AddEvents />
						</RouterProtector>
					}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
