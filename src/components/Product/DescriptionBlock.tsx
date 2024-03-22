import { FC } from 'react'
import { RecipeType } from '../../types'
import style from './product-item.module.scss'

interface DescriptionBlockProps {
	data: RecipeType
}

const DescriptionBlock: FC<DescriptionBlockProps> = ({ data }) => (
	<div className={style.block}>
		<h3>Description:</h3>
		<p>{data.description}</p>
	</div>
)

export { DescriptionBlock }
