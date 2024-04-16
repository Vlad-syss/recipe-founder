import { Heart, Star } from 'lucide-react'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavorite } from '../../store'
import { RecipeType } from '../../types'
import style from './display.module.scss'

const DisplayCard = memo(({ recipe }: { recipe: RecipeType }) => {
	const checkInFavorite = useFavorite(state => state.checkInFavorite)
	const initialState = useFavorite(state => state.initialState)
	const isExist = initialState.some(r => r.id === recipe.id)
	const navigate = useNavigate()

	const handleNavigate = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
		if (
			(e.target as HTMLElement).tagName.toLowerCase() === 'button' ||
			(e.target as HTMLElement).closest('button')
		)
			return

		navigate(`/products/${id}`)
	}

	const convertToStarsRatio = useCallback(
		(negative: number, positive: number) => {
			let totalReviews = negative + positive
			let ratio = positive / totalReviews
			let stars = ratio * 5

			stars = +stars.toFixed(1)

			return stars
		},
		[]
	)

	return (
		<div
			className={style.card}
			style={{
				background: `url(${recipe.thumbnail_url}) no-repeat center`,
				backgroundSize: 'cover',
			}}
			key={recipe.id}
			onClick={e => handleNavigate(e, recipe.id)}
		>
			<button onClick={() => checkInFavorite(recipe.id)}>
				<Heart size={23} fill={isExist ? '#f68c0a' : 'transparent'} />
			</button>
			<span>
				<Star fill='#f6c70a' />
				{convertToStarsRatio(
					recipe.user_ratings.count_negative,
					recipe.user_ratings.count_positive
				)}
			</span>
			<h3>{recipe.name}</h3>
		</div>
	)
})

export { DisplayCard }
