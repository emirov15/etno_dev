import React from 'react'
import logo from '../../assets/img/logo.jpg'
import logoHero from '../../assets/img/logo-hero.webp'

function hero() {
	return (
		<div id='hero'>
			<div className='container'>
				<div className='hero-title'>
					<h1>Последние мероприятия</h1>
				</div>
				<div className='hero'>
					<div className='hero--foto'>
						<img
							src='https://devkg.com/images/events/e975ab09a375897590241aaec11d51fa.png'
							data-v-17b3db24='img'
						/>
						<div className='hero--foto__text'>
							<h4>
								25 августа 2024 <span>17:00</span>
							</h4>
							<h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>

							<div className='hero--foto__text--par'>
								<div className='hero--foto__text--par__kor1'>
									<h6>Организатор</h6>
									<h2>InkubasiaLAB</h2>
								</div>
								<div className='hero--foto__text--par__kor2'>
									<h6>Когда</h6>
									<h2>Коворкинг-резорт ololoAkJol</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='jobs-list'>
					<div className='heros-title'>
						<h2>Последние вакансии</h2>
					</div>
					<div className='jobs-item content'>
						<div className='jobs-item-field icon'>
							<div className='preview images'>
								<picture>
									<img
										src='https://devkg.com/images/organizations/886e28d889f4c24ea73c66b80174110f.webp'
										alt=''
									/>
								</picture>
							</div>
						</div>
						<div className='information'>
							<div className='jobs-item-field company'>
								<span className='label'>Компания</span>
								Validon Agency
							</div>
							<div className='jobs-item-field position'>
								<span className='label'>Должность</span>
								Нr менеджер
							</div>
							<div className='jobs-item-field price'>
								<span className='label'>Оклад</span>
								От 60000 RUB в месяц
							</div>
							<div className='jobs-item-field type'>
								<span className='label'>Тип</span>
								Удаленная работа
							</div>
						</div>
					</div>
				</div>
				<div className='video-title'>
					<h1>Все видео</h1>
				</div>
				<div className='video-block'>
					<div className='main-block'>
						<div className='first__block'>
							<img src={logo} alt='img' />
							<div className='first__block-title'>
								<h2>
									{' '}
									ChatGPT — революция или мода? Как <br />
									нейросети могут помочь в работе
								</h2>
							</div>
							<br />
							<div className='first__block-organizer'>
								<span>Организатор</span>

								<h3> Kolesa Group</h3>
							</div>
							<div className='first__block-data'>
								<span>Когда</span>
								<br />
								<h3>12 сентября 2023</h3>
							</div>
						</div>
					</div>
					<div className='main-block'>
						<div className='first__block'>
							<img src={logoHero} alt='img' />
							<div className='first__block-title'>
								<h2>
									{' '}
									ChatGPT — революция или мода? Как <br />
									нейросети могут помочь в работе
								</h2>
							</div>
							<br />
							<div className='first__block-organizer'>
								<span>Организатор</span>

								<h3> Kolesa Group</h3>
							</div>
							<div className='first__block-data'>
								<span>Когда</span>
								<br />
								<h3>12 сентября 2023</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default hero
