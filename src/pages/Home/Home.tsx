import { Header } from '../../components/Header/Header'
import { Recipes } from '../../components/Recipes/Recipes'
import { Container } from '../../uikit'
import style from './home.module.scss'

const Home = () => {
	return (
		<>
			<div className={style.wrapper}>
				<Container className={style.container}>
					<Header />
					<Recipes />
				</Container>
			</div>
		</>
	)
}

export { Home }
