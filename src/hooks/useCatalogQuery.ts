import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getAllRecipes } from '../api'
import { getFilteredRecipes } from '../api/getFilteredRecipes'
import { ResultsRecipes, SearchKeys } from '../types'

export interface useCatalogProps {
	filteredData: SearchKeys[] | null
	page: number
}

const useCatalogQuery = ({ filteredData, page }: useCatalogProps) => {
	const [isFetchingFirstPage, setIsFetchingFirstPage] = useState(true)
	const { data, isError, isFetching, refetch }: UseQueryResult<ResultsRecipes> =
		useQuery<ResultsRecipes, Error>({
			queryKey: ['catalogRecipes', page],
			queryFn: async () => {
				try {
					if (filteredData && filteredData.length > 0) {
						return await getFilteredRecipes(page, filteredData, 15)
					} else {
						return await getAllRecipes(page, 15)
					}
				} finally {
					setIsFetchingFirstPage(false)
				}
			},
			enabled: true,
		})

	useEffect(() => {
		if (filteredData) {
			refetch()
		}
	}, [filteredData, refetch])

	useEffect(() => {
		refetch()
	}, [page, refetch])

	return {
		data,
		isError,
		isFetching,
		isFetchingFirstPage,
		refetch,
	}
}

export { useCatalogQuery }
