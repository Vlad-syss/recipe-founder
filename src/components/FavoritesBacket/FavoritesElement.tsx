import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RecipeType } from '../../types'
import style from './favorites-backet.module.scss'

const FavoritesElement: FC<RecipeType> = ({
	name,
	thumbnail_url,
	credits,
	id,
}) => {
	const author = credits[0].name

	return (
		<div className={style.item}>
			<div className={style.image}>
				<img src={thumbnail_url} alt='recipe-img' />
			</div>
			<div className={style.desc}>
				<h3>{name}</h3>
				<p>author: {author}</p>
				<Link to={`products/${id}`}>Get Recipe</Link>
			</div>
		</div>
	)
}

export { FavoritesElement }
