import {
	QueryKey,
	useInfiniteQuery,
	UseInfiniteQueryResult,
} from '@tanstack/react-query'
import { useState } from 'react'
import { getAllRecipes } from '../api'
import { InfinityRecipe } from '../types'

const useInfinityRecipe = () => {
	const [isFetchingFirstPage, setIsFetchingFirstPage] = useState(true)

	const {
		data,
		isError,
		fetchNextPage,
		isFetching,
		isFetchingNextPage,
		refetch,
	}: UseInfiniteQueryResult<InfinityRecipe> = useInfiniteQuery({
		queryKey: ['recipes'] as QueryKey,
		queryFn: async ({ pageParam = 1 }) => {
			const response = await getAllRecipes(pageParam)
			setIsFetchingFirstPage(false)
			return response
		},
		getNextPageParam: (_, pages) => pages.length + 1,
		initialPageParam: 1,
	})

	return {
		data,
		isError,
		fetchNextPage,
		isFetching,
		isFetchingNextPage,
		isFetchingFirstPage,
		refetch,
	}
}

export { useInfinityRecipe }
