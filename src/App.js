import { Routes, Route, Link } from 'react-router-dom'
import { Trending } from './pages/Trending'
import { Search } from './pages/Search'
import { Details } from './pages/Details'

import './App.css'

function App() {
	return (
		<div className='App'>
			<header>
				<Link to={'/'}>HOME</Link>
				<Link to={'/test'}>TEST</Link>
			</header>
			<Routes>
				<Route
					exact
					path='/'
					element={<Trending />}
					render={props => <Trending {...props} />}
				/>
				<Route
					path='/search'
					element={<Search />}
					render={props => <Search {...props} />}
				/>
				<Route
					path='/details'
					element={<Details />}
					render={props => <Details {...props} />}
				/>
			</Routes>
		</div>
	)
}

export default App
