import { Outlet } from 'react-router-dom'
import { Favorite } from './components/Favorites/Favorite'
import { Container } from './uikit'

function App() {
	return (
		<>
			<div className='wrapper'>
				<Container className='container'>
					<Favorite />
					<Outlet />
				</Container>
			</div>
		</>
	)
}

export { App }
