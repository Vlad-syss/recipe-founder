import { QueryKey, UseQueryResult, useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { getAllRecipes } from '../../api'
import { RecipeType } from '../../types'
import RecipeSkeleton from '../Skeleton/RecipeSkeleton/RecipeSkeleton'
import { Recipe } from './Recipe'
import style from './recipes.module.scss'

interface RecipesProps {}

const Recipes: FC<RecipesProps> = () => {
	const [items, setItems] = useState(6)
	const {
		data,
		isError,
		isFetching,
	}: UseQueryResult<{ count: number; results: RecipeType[] }> = useQuery({
		queryKey: ['recipes'] as QueryKey,
		queryFn: getAllRecipes,
	})
	console.log(data)

	const formattedData = data?.results.slice(0, items)

	const loadMore = () => {
		setItems(prev => prev + 3)
	}

	return (
		<main className={style.main}>
			<h2>Your Search Results:</h2>
			<div className={style.items}>
				{isFetching ? (
					<>
						<RecipeSkeleton />
						<RecipeSkeleton />
						<RecipeSkeleton />
					</>
				) : isError ? (
					<p>Something go wrong...</p>
				) : !formattedData || formattedData.length === 0 ? (
					<p>Here will be your search results...</p>
				) : (
					formattedData.map((item: RecipeType) => {
						return <Recipe key={item.id} {...item} />
					})
				)}
			</div>
			<button onClick={loadMore}>
				{items === data?.results.length ? '' : 'ADD MORE'}
			</button>
		</main>
	)
}

export { Recipes }
