import { MinusSquare } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useFavorite } from '../../store'
import { RecipeType } from '../../types'
import style from './favorites-backet.module.scss'

const FavoritesElement: FC<RecipeType> = ({
	name,
	thumbnail_url,
	credits,
	id,
}) => {
	const removeFromBacket = useFavorite(state => state.removeFromBacket)
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
			<button className={style.remove} onClick={() => removeFromBacket(id)}>
				<MinusSquare />
			</button>
		</div>
	)
}

export { FavoritesElement }
