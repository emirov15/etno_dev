import React from 'react'
import LogoGlavnyi from '../../assets/img/logo-glavnyi.svg'
import { Link } from 'react-router-dom'
import { BiLogInCircle } from 'react-icons/bi'

const Header = () => {
	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<img src={LogoGlavnyi} alt='img' />
					<div className='header--nav'>
						<Link to={'/Vacancies'}>Вакансии</Link>
						<Link to={'/Events'}>Мероприятия</Link>
						<Link to={'/Video'}>Видео</Link>
						<Link to={'/Organizations'}>Организации</Link>
						<Link to={'/Community'}>Сообщество</Link>
					</div>
					<div className='header--icons'>
						<BiLogInCircle />
					</div>
					<div className='header--search'>
						<button>Войти</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
