import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { FC, memo } from 'react'
import { RecipeType } from '../../types'
import style from './product-item.module.scss'

interface RateBlockProps {
	data: RecipeType
}

const RateBlock: FC<RateBlockProps> = memo(({ data }) => (
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
))

export { RateBlock }
