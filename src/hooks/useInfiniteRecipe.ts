import {
	QueryKey,
	useInfiniteQuery,
	UseInfiniteQueryResult,
} from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getAllRecipes } from '../api'
import { getFilteredRecipes } from '../api/getFilteredRecipes'
import { InfinityRecipe, SearchKeys } from '../types'

interface hookProps {
	filteredData: SearchKeys[] | null
}

const useInfinityRecipe = ({ filteredData }: hookProps) => {
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
			try {
				if (filteredData) {
					return await getFilteredRecipes(pageParam, filteredData)
				} else {
					return await getAllRecipes(pageParam)
				}
			} finally {
				setIsFetchingFirstPage(false)
			}
		},
		getNextPageParam: (_, pages) => pages.length + 1,
		initialPageParam: 1,
		enabled: !!filteredData,
	})

	useEffect(() => {
		if (filteredData) {
			refetch()
		}
	}, [filteredData, refetch])

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
