import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { getQuery } from '../utils'
import { Grid } from '../components/Grid'
import { searchRequest } from '../api/search'
import { LoadMoreButton } from '../components/LoadMoreButton'

export const Search = () => {
	const location = useLocation()
	const [items, setItems] = useState(undefined)
	const [query, setQuery] = useState(location.search)
	const [offset, setOffset] = useState(0)
	const limit = 25

	const search = async value => {
		const { data } = await searchRequest(value, limit, offset)
		setItems(data)
	}

	const more = async value => {
		const { data } = await searchRequest(value, limit, offset)
		setItems(items ? [...items, ...data] : data)
	}

	const loadMore = () => {
		setOffset(offset + limit)
	}

	useEffect(() => {
		const query = getQuery(location, 'q')

		if (query) {
			setQuery(query)
		}
	}, [location.search])

	useEffect(() => {
		search(query)
	}, [query])

	useEffect(() => {
		more(query)
	}, [offset])

	return (
		<>
			<Helmet>
				<title>Giphy | Search</title>
			</Helmet>
			<div>
				{items ? <Grid items={items} /> : 'Loading'}{' '}
				<LoadMoreButton onClick={loadMore} />
			</div>
		</>
	)
}
