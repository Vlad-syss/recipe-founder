import { useIntersection } from '@mantine/hooks'
import { FC, useEffect } from 'react'
import { useInfinityRecipe } from '../../hooks'
import RecipeSkeleton from '../Skeleton/RecipeSkeleton'
import { RecipeList } from './RecipeList'
import style from './recipes.module.scss'

export const Skeleton = () => (
	<>
		<RecipeSkeleton />
		<RecipeSkeleton />
		<RecipeSkeleton />
	</>
)

interface RecipesProps {}

const Recipes: FC<RecipesProps> = () => {
	const {
		data,
		isError,
		fetchNextPage,
		isFetching,
		isFetchingNextPage,
		isFetchingFirstPage,
	} = useInfinityRecipe()

	const { ref, entry } = useIntersection({
		root: null,
		threshold: 1,
	})

	useEffect(() => {
		if (entry?.isIntersecting) fetchNextPage()
	}, [entry])

	const recipes = data?.pages.flatMap(page => page.results) || []

	return (
		<main className={style.main}>
			<h2>Your Search Results:</h2>
			<div className={style.items}>
				{isError ? (
					<p>Something go wrong...</p>
				) : isFetching && isFetchingFirstPage ? (
					<Skeleton />
				) : (
					<RecipeList recipes={recipes} />
				)}
				{isFetchingNextPage && <Skeleton />}
				<div ref={ref}></div>
			</div>
		</main>
	)
}

export { Recipes }
