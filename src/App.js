import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { Trending } from './pages/Trending'
import { Search } from './pages/Search'
import { Details } from './pages/Details'
import { SearchForm } from './components/SearchForm'

import './App.css'

function App() {
	const navigate = useNavigate()
	const location = useLocation()

	const search = searchQuery => {
		navigate(`/search?q=${searchQuery}`)
	}
	return (
		<div className='App'>
			<header className='header'>
				<Link className='link' to={`/`}>
					Home
				</Link>
				<SearchForm onSubmit={search} />
			</header>
			<Routes location={location}>
				<Route
					exact
					path='/'
					element={<Trending />}
					render={props => <Trending {...props} />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/search`}
					element={<Search />}
					render={props => <Search {...props} />}
				/>
				<Route
					path='/gif/:id'
					element={<Details />}
					render={props => <Details {...props} />}
				/>
			</Routes>
		</div>
	)
}

export default App
