import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getQuery } from '../utils'
import { Grid } from '../components/Grid'
import { searchRequest } from '../api/search'

export const Search = () => {
	const location = useLocation()
	const [items, setItems] = useState(undefined)

	const search = async value => {
		const { data } = await searchRequest(value)
		console.log(data)
		setItems(data)
	}

	useEffect(() => {
		const query = getQuery(location, 'q')

		if (query) {
			search(query)
		}
	}, [location.search])

	return (
		<>
			<div>{items ? <Grid items={items} /> : 'Loading...'}</div>
		</>
	)
}
