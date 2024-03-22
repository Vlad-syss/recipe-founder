import { ChangeEvent, useCallback, useState } from 'react'

const useHeaderStates = () => {
	const [value, setValue] = useState('')

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
	return {
		value,
		setValue,
		onFocusInput,
		onChangeInput,
		onBlurInput,
	}
}

export { useHeaderStates }
