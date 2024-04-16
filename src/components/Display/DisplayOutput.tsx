import { FC, memo, useEffect, useState } from 'react'
import { RecipeType } from '../../types'
import { SkeletonForCatalog } from '../Skeleton/CatalogSkeleton'
import { DisplayCard } from './DisplayCard'
import style from './display.module.scss'

interface DisplayOutputProps {
	isLoading: boolean
	isError: boolean
	data: RecipeType[] | undefined
}

const DisplayOutput: FC<DisplayOutputProps> = memo(
	({ isLoading, data, isError }) => {
		const [showContent, setShowContent] = useState(false)

		useEffect(() => {
			const showTimeout = setTimeout(() => {
				setShowContent(true)
			}, 0)

			const hideTimeout = setTimeout(() => {
				setShowContent(false)
			}, 300)

			return () => {
				clearTimeout(showTimeout)
				clearTimeout(hideTimeout)
			}
		}, [data])
		if (isError) {
			return <p>Something go wrong...</p>
		}
		return (
			<div className={`${style.output} ${showContent && style.show}`}>
				{isLoading ? (
					<SkeletonForCatalog />
				) : (
					data?.map((recipe: RecipeType) => (
						<DisplayCard recipe={recipe} key={recipe.id} />
					))
				)}
			</div>
		)
	}
)

export { DisplayOutput }
