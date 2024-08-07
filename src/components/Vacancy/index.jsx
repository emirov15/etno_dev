import React from 'react'
import { Link } from 'react-router-dom'
import { VacancyList } from './VacancyList'
import useFetch from '../../hooks/useFetch'
import loadingImg from '../../assets/img/loading.svg'

const Vacancy = () => {
	const { data, loading } = useFetch()

	if (loading) {
		return (
			<div
				className='loading'
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<img src={loadingImg} alt='img' />
			</div>
		)
	}

	return (
		<div id='vacancies'>
			<div className='container'>
				<div className='vacancies'>
					<div className='vacancies__content'>
						<div className='filter'>
							<Link to={'/'}>
								<button>Добавить вакансию</button>
							</Link>
						</div>
						{data &&
							data.map((job: any) => {
								return (
									<VacancyList
										key={job.id}
										organization_name={job.organization_name}
										position={job.position}
										paymentType={job.paymentType}
										price_from={job.price_from}
										price_to={job.price_to}
										type={job.type}
										city={job.city}
										currency={job.currency}
										organization_icon={job.organization_icon}
									/>
								)
							})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Vacancy
