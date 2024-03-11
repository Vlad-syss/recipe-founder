import { Header } from '../../components/Header/Header'
import { Recipes } from '../../components/Recipes/Recipes'
import style from './home.module.scss'

const Home = () => {
	return (
		<>
			<div className={style.wrapper}>
				<Header />
				<Recipes />
			</div>
		</>
	)
}

export { Home }
