import { Dispatch, FC, SetStateAction } from 'react'
import './star-rating.scss'

interface StarProps {
	rating: number
	setRating: Dispatch<SetStateAction<number>>
}
const StarRating: FC<StarProps> = ({ rating, setRating }) => {
	const handleRatingChange = (value: number) => {
		setRating(value)
	}

	return (
		<fieldset className='rate'>
			<input
				type='radio'
				id='rating10'
				name='rating'
				value='10'
				onChange={() => handleRatingChange(10)}
				checked={rating === 10}
			/>
			<label htmlFor='rating10' title='5 stars'></label>
			<input
				type='radio'
				id='rating9'
				name='rating'
				value='9'
				onChange={() => handleRatingChange(9)}
				checked={rating === 9}
			/>
			<label className='half' htmlFor='rating9' title='4 1/2 stars'></label>
			<input
				type='radio'
				id='rating8'
				name='rating'
				value='8'
				onChange={() => handleRatingChange(8)}
				checked={rating === 8}
			/>
			<label htmlFor='rating8' title='4 stars'></label>
			<input
				type='radio'
				id='rating7'
				name='rating'
				value='7'
				onChange={() => handleRatingChange(7)}
				checked={rating === 7}
			/>
			<label className='half' htmlFor='rating7' title='3 1/2 stars'></label>
			<input
				type='radio'
				id='rating6'
				name='rating'
				value='6'
				onChange={() => handleRatingChange(6)}
				checked={rating === 6}
			/>
			<label htmlFor='rating6' title='3 stars'></label>
			<input
				type='radio'
				id='rating5'
				name='rating'
				value='5'
				onChange={() => handleRatingChange(5)}
				checked={rating === 5}
			/>
			<label className='half' htmlFor='rating5' title='2 1/2 stars'></label>
			<input
				type='radio'
				id='rating4'
				name='rating'
				value='4'
				onChange={() => handleRatingChange(4)}
				checked={rating === 4}
			/>
			<label htmlFor='rating4' title='2 stars'></label>
			<input
				type='radio'
				id='rating3'
				name='rating'
				value='3'
				onChange={() => handleRatingChange(3)}
				checked={rating === 3}
			/>
			<label className='half' htmlFor='rating3' title='1 1/2 stars'></label>
			<input
				type='radio'
				id='rating2'
				name='rating'
				value='2'
				onChange={() => handleRatingChange(2)}
				checked={rating === 2}
			/>
			<label htmlFor='rating2' title='1 star'></label>
			<input
				type='radio'
				id='rating1'
				name='rating'
				value='1'
				onChange={() => handleRatingChange(1)}
				checked={rating === 1}
			/>
			<label className='half' htmlFor='rating1' title='1/2 star'></label>
		</fieldset>
	)
}

export { StarRating }
