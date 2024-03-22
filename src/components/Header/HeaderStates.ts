import {
	ChangeEvent,
	KeyboardEvent,
	MouseEvent,
	useCallback,
	useState,
} from 'react'
import { getRecipesComplete } from '../../api'

interface HeaderStatesProps {
	onFilterChange: (event: any) => void
}

const useHeaderStates = ({ onFilterChange }: HeaderStatesProps) => {
	const [value, setValue] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const onChangeInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
		[value]
	)

	const onBlurInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) =>
			(e.target.placeholder = 'Type the keywords of meal devided by ","...'),
		[value]
	)

	const onFocusInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => (e.target.placeholder = ''),
		[value]
	)

	const handleSubmit = useCallback(async () => {
		setIsLoading(true)
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

			onFilterChange(formattedFilteredData)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}, [onFilterChange, value])

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

	return {
		value,
		onChangeInput,
		onBlurInput,
		onFocusInput,
		handleInteraction,
		isLoading,
	}
}

export { useHeaderStates }
