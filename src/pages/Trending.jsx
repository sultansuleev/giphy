import { useEffect, useState } from 'react'
import { getTrending } from '../api/trending'
import { Grid } from '../components/Grid'

export const Trending = () => {
	const [items, setItems] = useState(undefined)

	const fetchTrending = async () => {
		const { data } = await getTrending(50)
		setItems(data)
	}

	useEffect(() => {
		fetchTrending()
	}, [])
	return <div>{items ? <Grid items={items} /> : 'Loading...'}</div>
}
