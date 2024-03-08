import { Search } from 'lucide-react'
import { ChangeEvent, useCallback, useState } from 'react'

import style from './header.module.scss'

const Header = () => {
	const [value, setValue] = useState('')

	const onChangeInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
		[value]
	)

	const onBlurInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) =>
			(e.target.placeholder = "Type the ingredients devided by ' , ' ..."),
		[value]
	)

	const onFocusInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => (e.target.placeholder = ''),
		[value]
	)

	return (
		<header className={style.header}>
			<h1>Find Meals For Your Ingredient</h1>
			<p>
				Real food doesn't have ingredient, real food is ingredients.
				<br />
				<span> - Jamie Oliver</span>
			</p>
			<div className={style.input}>
				<input
					id='search'
					value={value}
					onChange={onChangeInput}
					onFocus={onFocusInput}
					onBlur={onBlurInput}
					placeholder='Type the ingredients devided by " , " ...'
				/>
				<button>
					<Search strokeWidth={3} size={30} />
				</button>
			</div>
		</header>
	)
}

export { Header }
