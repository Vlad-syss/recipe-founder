import {
	ChangeEvent,
	KeyboardEvent,
	MouseEvent,
	useCallback,
	useMemo,
	useState,
} from 'react'
import { getRecipesComplete } from '../../api'
import { useCatalogQuery } from '../../hooks/useCatalogQuery'
import { SearchKeys } from '../../types'

const useDisplay = () => {
	const [isPopular, setIsPopular] = useState(false)
	const [isRecent, setIsRecent] = useState(false)
	const [value, setValue] = useState('')
	const [isLoaded, setIsLoaded] = useState(false)
	const [page, setPage] = useState(1)
	const [filteredData, setFilteredData] = useState<SearchKeys[] | null>(null)

	const handleFilterChange = (filteredData: SearchKeys[] | null) => {
		setFilteredData(filteredData)
	}
	const { data, isFetching, isError } = useCatalogQuery({
		page: page,
		filteredData: filteredData,
	})

	const onBlurInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) =>
			(e.target.placeholder = 'Type the keywords....'),
		[value]
	)

	const onFocusInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => (e.target.placeholder = ''),
		[value]
	)

	const handlePopular = useCallback(() => {
		if (!data || !data.results) return undefined
		return {
			count: 10,
			results: [...data.results].sort(
				(a, b) => b.user_ratings.score - a.user_ratings.score
			),
		}
	}, [data])

	const handleRecent = useCallback(() => {
		if (!data || !data.results) return undefined
		return {
			count: 10,
			results: [...data.results].sort((a, b) => b.created_at - a.created_at),
		}
	}, [data])

	const handleSubmit = useCallback(async () => {
		setIsLoaded(true)
		try {
			const name = value.trim().split(',')
			const filteredData = await getRecipesComplete(name)
			let formattedFilteredData = []

			if (Array.isArray(filteredData) && filteredData.length > 0) {
				formattedFilteredData = filteredData.flatMap((item: any) => {
					if (item && Array.isArray(item.results)) {
						return [...item.results]
					} else {
						return []
					}
				})
			}

			handleFilterChange(formattedFilteredData)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoaded(false)
		}
	}, [handleFilterChange, value])

	const handleInteraction = useCallback(
		(e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
			if ('key' in e && e.key === 'Enter') {
				handleSubmit()
			} else if ('type' in e && e.type === 'click') {
				handleSubmit()
			}
		},
		[handleSubmit]
	)
	const handlePages = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			if ('type' in e && e.type === 'click') {
				const direction = (e.target as HTMLButtonElement).getAttribute(
					'data-direction'
				)
				if (direction === 'prev') {
					setPage(prevPage => prevPage - 1)
				} else if (direction === 'next') {
					setPage(prevPage => prevPage + 1)
				}
			}
		},
		[page]
	)

	const sortedData = useMemo(() => {
		if (isFetching || !data || !data.results) {
			return []
		}
		if (isPopular) {
			return [...data.results].sort(
				(a, b) => b.user_ratings.score - a.user_ratings.score
			)
		} else if (isRecent) {
			return [...data.results].sort((a, b) => b.created_at - a.created_at)
		} else {
			return data.results
		}
	}, [data, isFetching, isPopular, isRecent])

	return {
		sortedData,
		data,
		isError,
		isFetching,
		handleInteraction,
		onBlurInput,
		onFocusInput,
		page,
		value,
		setPage,
		setValue,
		handlePopular,
		handleRecent,
		isPopular,
		isRecent,
		setIsPopular,
		setIsRecent,
		handlePages,
		isLoaded,
		filteredData,
	}
}

export { useDisplay }
