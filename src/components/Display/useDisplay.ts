import { useQuery } from '@tanstack/react-query'
import {
	ChangeEvent,
	KeyboardEvent,
	MouseEvent,
	useCallback,
	useState,
} from 'react'
import { getAllRecipes } from '../../api'

const useDisplay = () => {
	const [value, setValue] = useState('')
	const [page, setPage] = useState(1)
	const { data, isLoading, isError } = useQuery({
		queryKey: ['catalogRecipes', page],
		queryFn: () => getAllRecipes(page, 15),
	})

	const onChangeInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
		[value]
	)

	const onBlurInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) =>
			(e.target.placeholder = 'Type the keywords....'),
		[value]
	)

	const onFocusInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => (e.target.placeholder = ''),
		[value]
	)
	const handleSubmit = () => {}

	const handleInteraction = useCallback(
		(e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
			if ('key' in e && e.key === 'Enter') {
				handleSubmit()
			} else if ('type' in e && e.type === 'click') {
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
		[handleSubmit]
	)
	return {
		data,
		isError,
		isLoading,
		handleInteraction,
		onBlurInput,
		onChangeInput,
		onFocusInput,
		page,
		value,
		setPage,
		setValue,
	}
}

export { useDisplay }
