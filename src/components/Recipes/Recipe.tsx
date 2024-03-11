import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useFavorite } from '../../store'
import style from './recipes.module.scss'

const Recipe = ({ id }) => {
	const checkInFavorite = useFavorite(state => state.checkInFavorite)
	const initialState = useFavorite(state => state.initialState)
	const isExist = initialState.some(r => r.id === id)

	return (
		<article className={style.item}>
			<div className={style.recipe_img} />
			<div className={style.recipe_info}>
				<h4>Recipe Title</h4>
				<p>Recipe description...</p>
				<Link to={`/products/:${id}`}>See The Recipe</Link>
			</div>
			<button onClick={() => checkInFavorite(id)}>
				<Heart size={20} fill={isExist ? '#fff' : 'transparent'} />
			</button>
		</article>
	)
}

export { Recipe }
