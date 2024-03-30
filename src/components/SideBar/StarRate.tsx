import { FC, memo } from 'react'
import { StarRating } from '../../uikit'
import style from './side-bar.module.scss'

interface StarRateProps {
	rating: number
	setRating: React.Dispatch<React.SetStateAction<number>>
}

const StarRate: FC<StarRateProps> = memo(({ rating, setRating }) => {
	return (
		<div className={style.stars}>
			<p>Selected Rating: {rating !== null ? rating / 2 : 0}</p>
			<StarRating rating={rating} setRating={setRating} />
		</div>
	)
})

export { StarRate }
