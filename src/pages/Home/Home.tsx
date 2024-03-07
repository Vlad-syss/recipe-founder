import { Container } from '../../uikit'
import style from './home.module.scss'

function Home() {
	return (
		<>
			<div className={style.wrapper}>
				<Container className={style.container}>
					<div className={style.header}>
						<h1>Find Meals For Your Ingredient</h1>
						<p>
							Real food doesn't have ingredient, real food is ingredients.
							<br />
							<span> - Jamie Oliver</span>
						</p>
					</div>
					<div>Search</div>
				</Container>
			</div>
		</>
	)
}

export { Home }
