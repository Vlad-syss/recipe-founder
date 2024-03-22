import { FC } from 'react'
import { RecipeType } from '../../types'
import style from './product-item.module.scss'

interface PrepareTimeBlockProps {
	data: RecipeType
}

const PrepareTimeBlock: FC<PrepareTimeBlockProps> = ({ data }) => (
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
)

export { PrepareTimeBlock }
