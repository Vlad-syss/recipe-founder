import { FC, memo } from 'react'
import { RecipeType } from '../../types'
import { SkeletonForCatalog } from '../Skeleton/CatalogSkeleton'
import { DisplayCard } from './DisplayCard'
import style from './display.module.scss'

interface DisplayOutputProps {
	isLoading: boolean
	isError: boolean
	data:
		| {
				count: number
				results: RecipeType[]
		  }
		| undefined
}

const DisplayOutput: FC<DisplayOutputProps> = memo(
	({ isLoading, data, isError }) => {
		if (isError) {
			return <p>Something go wrong...</p>
		}
		return (
			<div className={style.output}>
				{isLoading ? (
					<SkeletonForCatalog />
				) : (
					data?.results.map((recipe: RecipeType) => (
						<DisplayCard recipe={recipe} key={recipe.id} />
					))
				)}
			</div>
		)
	}
)

export { DisplayOutput }
