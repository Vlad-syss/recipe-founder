import { Heart, ThumbsDown, ThumbsUp } from 'lucide-react'
import { FC } from 'react'
import { useFavorite } from '../../store'
import { RecipeType } from '../../types'
import style from './product-item.module.scss'

interface ProductProps {
	data: RecipeType
}

const ProductItem: FC<ProductProps> = ({ data }) => {
	const checkInFavorite = useFavorite(state => state.checkInFavorite)
	const initialState = useFavorite(state => state.initialState)
	const isExist = initialState.some(r => r.id === data.id)

	return (
		<>
			<div className={style.item}>
				<div className={style.rate}>
					<div className={style.image}>
						<img src={data.thumbnail_url} alt='image' />
					</div>
					<div className={style.block}>
						<h3>Rate:</h3>
						<p className={style.text}>
							<span>
								<ThumbsUp /> {data.user_ratings.count_positive}
							</span>
							<span>
								<ThumbsDown /> {data.user_ratings.count_negative}
							</span>
						</p>
					</div>
					<div className={style.block}>
						<h3>
							Prepare time:{' '}
							<span>
								{data.prep_time_minutes !== null
									? data.prep_time_minutes + 'mn'
									: "Information doesn't exist"}
							</span>
						</h3>
					</div>
					<div className={style.block}>
						<h3>Nutritions:</h3>
						<ul>
							<li>calories: {data.nutrition.calories}</li>
							<li>carbohydrates: {data.nutrition.carbohydrates}</li>
							<li>fat: {data.nutrition.fat}</li>
							<li>fiber: {data.nutrition.fiber}</li>
							<li>protein: {data.nutrition.protein}</li>
							<li>sugar: {data.nutrition.sugar}</li>
						</ul>
					</div>
				</div>
				<div className={style.description}>
					<div className={style.author}>
						<p>
							author: <span>{data.credits[0].name}</span>
						</p>
						{' | '}
						<p>
							types: <span>{data.credits[0].type}</span>
						</p>
					</div>
					<h2>{data.name}</h2>
					{data.description !== '' ? (
						<div className={style.block}>
							<h3>Description:</h3>
							<p>{data.description}</p>
						</div>
					) : (
						''
					)}

					<div className={style.block}>
						<h3>Instruction:</h3>
						<ul>
							{data.instructions.map((int, i) => (
								<li key={i}>{int.display_text}</li>
							))}
						</ul>
					</div>
				</div>
				<button onClick={() => checkInFavorite(data.id)}>
					<Heart size={27} fill={isExist ? '#fff' : 'transparent'} />
				</button>
			</div>
		</>
	)
}

export { ProductItem }
