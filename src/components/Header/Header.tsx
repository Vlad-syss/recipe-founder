import { Search } from 'lucide-react'

import { Input } from '../../uikit'
import style from './header.module.scss'
import { useHeaderStates } from './HeaderStates'

const Header = () => {
	const { onBlurInput, onChangeInput, onFocusInput, value } = useHeaderStates()

	return (
		<header className={style.header}>
			<h1>Find Meals For Your Ingredient</h1>
			<p>
				Real food doesn't have ingredient, real food is ingredients.
				<br />
				<span> - Jamie Oliver</span>
			</p>
			<div className={style.input}>
				<Input
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
