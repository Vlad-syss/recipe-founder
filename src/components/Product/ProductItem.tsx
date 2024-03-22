import { Heart } from 'lucide-react'
import { FC } from 'react'
import { useFavorite } from '../../store'
import { RecipeType } from '../../types'
import { DescriptionBlock } from './DescriptionBlock'
import { InstructionsBlock } from './InstructionsBlock'
import { NutritionsBlock } from './NutritionsBlock'
import { PrepareTimeBlock } from './PrepareTimeBlock'
import { RateBlock } from './RateBlock'
import style from './product-item.module.scss'

interface ProductProps {
	data: RecipeType
}

const ProductItem: FC<ProductProps> = ({ data }) => {
	const checkInFavorite = useFavorite(state => state.checkInFavorite)
	const initialState = useFavorite(state => state.initialState)
	const isExist = initialState.some(r => r.id === data.id)

	return (
		<div className={style.item}>
			<div className={style.rate}>
				<div className={style.image}>
					<img src={data.thumbnail_url} alt='image' />
				</div>
				<RateBlock data={data} />
				<PrepareTimeBlock data={data} />
				<NutritionsBlock data={data} />
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
				{data.description && <DescriptionBlock data={data} />}
				<InstructionsBlock data={data} />
			</div>
			<button onClick={() => checkInFavorite(data.id)}>
				<Heart size={27} fill={isExist ? '#fff' : 'transparent'} />
			</button>
		</div>
	)
}

export { ProductItem }
