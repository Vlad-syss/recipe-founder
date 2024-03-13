import { Heart } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useFavorite } from '../../store'
import { RecipeType } from '../../types'
import style from './recipes.module.scss'

interface RecipeProps extends RecipeType {}

const Recipe: FC<RecipeProps> = ({ id, description, name, thumbnail_url }) => {
	const checkInFavorite = useFavorite(state => state.checkInFavorite)
	const initialState = useFavorite(state => state.initialState)
	const isExist = initialState.some(r => r.id === id)

	const formattedDescription = description
		? description.substring(0, 100) + '...'
		: ''

	return (
		<article className={style.item}>
			<div
				className={style.recipe_img}
				style={{
					background: `url(${thumbnail_url}) no-repeat center`,
					backgroundSize: 'cover',
				}}
			/>
			<div className={style.recipe_info}>
				<h4>{name}</h4>
				<p
					dangerouslySetInnerHTML={{
						__html: formattedDescription || 'No description',
					}}
				/>
				<Link to={`/products/${id}`}>See The Recipe</Link>
			</div>
			<button onClick={() => checkInFavorite(id)}>
				<Heart size={20} fill={isExist ? '#fff' : 'transparent'} />
			</button>
		</article>
	)
}

export { Recipe }
