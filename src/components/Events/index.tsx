import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import EventsList from './EventsList'
import Loading from '../ui/Loading'
import { API } from '../../API/index'
import { ResourceItem2 } from '../../components/type/Events'



const Events = ({ count = -1 }) => {
		const { data, loading } = useFetch(
			{ 
			url: `${API}/events` 
		});

		if (loading) {
			return <Loading />
		}
	


	return (
		<div id='events'>
			<div className='container'>
				<div className='btn1'>
					<Link to={'/addEvents'}>
						{' '}
						<button>Добавить мероприятиe</button>
					</Link>
				</div>
				{data &&
					data.slice(0, count).map((el: ResourceItem2, index: number) => {
						return (
							<EventsList
								key={index}
								location={el.location}
								name={el.name}
								organization_name={el.organization_name}
								date={el.date}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default Events
