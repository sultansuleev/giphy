import { useState } from 'react'

export const SearchForm = ({ onSubmit }) => {
	const [value, setValue] = useState('initialState')

	const submitHandler = e => {
		e.preventDefault()

		if (value) {
			onSubmit(value)
		}
	}

	const changeHandler = e => {
		setValue(e.currentTarget.value)
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				onChange={changeHandler}
				value={value}
				name='search'
				title='Enter Search Query'
			/>
			<button>Submit</button>
		</form>
	)
}
