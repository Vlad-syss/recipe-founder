import clsx from 'clsx'
import { Loader2, Search } from 'lucide-react'
import { FC, memo } from 'react'
import { Input } from '../../uikit'
import { useHeaderStates } from './HeaderStates'
import style from './header.module.scss'

interface HeaderProps {
	onFilterChange: (event: any) => void
}

const Header: FC<HeaderProps> = ({ onFilterChange }) => {
	const {
		onBlurInput,
		onChangeInput,
		onFocusInput,
		value,
		isLoading,
		handleInteraction,
	} = useHeaderStates({ onFilterChange: onFilterChange })

	return (
		<header className={style.header}>
			<StaticValues />
			<div className={clsx(style.input, isLoading ? style.disabled : '')}>
				<Input
					value={value}
					onChange={onChangeInput}
					onFocus={onFocusInput}
					onBlur={onBlurInput}
					placeholder="Type the keywords of meal devided by ','..."
					onKeyDown={handleInteraction}
					disabled={isLoading}
				/>
				<button onClick={handleInteraction} disabled={isLoading}>
					{isLoading ? (
						<Loader2 strokeWidth={3} size={30} />
					) : (
						<Search strokeWidth={3} size={30} />
					)}
				</button>
			</div>
		</header>
	)
}

const StaticValues = memo(() => (
	<>
		<h1>Find Meals For Your Ingredient</h1>
		<p>
			Real food doesn't have ingredient, real food is ingredients.
			<br />
			<span> - Jamie Oliver</span>
		</p>
	</>
))

export { Header }
