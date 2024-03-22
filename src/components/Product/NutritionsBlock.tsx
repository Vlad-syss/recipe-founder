import { FC } from 'react'
import { RecipeType } from '../../types'
import style from './product-item.module.scss'

interface NutritionsBlockProps {
	data: RecipeType
}

const NutritionsBlock: FC<NutritionsBlockProps> = ({ data }) => (
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
)

export { NutritionsBlock }
