import React from 'react'
import useFetch from '../../hooks/useFetch'
import OrganizationList from './OrganizationList'
import Loading from '../ui/Loading'


const Organizations = () => {
	const { data, loading } = useFetch({
		url: 'http://3.38.98.134/organizations',
	})

	if (loading) {
		return <Loading />
	}

	return (
		<div id='organizations'>
			<div className='container'>
				<div className='organizations'>
					<div className='organizations--cards'>
						{data &&
							data.map((el: any, idx: number) => {
								return (
									<OrganizationList
										key={idx}
										name={el.name}
										jobs_count={el.jobs_count}
										meetups_count={el.meetups_count}
										events_count={el.events_count}
									/>
								)
							})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Organizations
