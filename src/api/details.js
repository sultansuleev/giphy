import axios from 'axios'

const API_KEY = 'ryk14kVmx2hGWgC8dJAYzZdy10GBQQ9W'

export const getOne = async id => {
	const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
	const result = await axios.get(url)

	if (result.status >= 400) {
		throw Error('Something goes wrong')
	}

	return result.data
}
