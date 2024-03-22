import { Search } from 'lucide-react'
import { FC, KeyboardEvent, MouseEvent, memo } from 'react'
import { getRecipesComplete } from '../../api'
import { Input } from '../../uikit'
import { useHeaderStates } from './HeaderStates'
import style from './header.module.scss'

interface HeaderProps {
	onFilterChange: (event: any) => void
}

const Header: FC<HeaderProps> = ({ onFilterChange }) => {
	const { onBlurInput, onChangeInput, onFocusInput, value } = useHeaderStates()

	const handleSubmit = async () => {
		const name = value.trim().split(',')
		const filteredData = await getRecipesComplete(name)
		const formattedFilteredData =
			filteredData?.flatMap((item: any) => [...item.results]) || []

		onFilterChange(formattedFilteredData)
	}

	const handleInteraction = (
		e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
	) => {
		if ('key' in e && e.key === 'Enter') {
			handleSubmit()
		} else if ('type' in e && e.type === 'click') {
			handleSubmit()
		}
	}

	return (
		<header className={style.header}>
			<StaticValues />
			<div className={style.input}>
				<Input
					value={value}
					onChange={onChangeInput}
					onFocus={onFocusInput}
					onBlur={onBlurInput}
					placeholder='Type the keywords of meal devided by ","...'
					onKeyDown={handleInteraction}
				/>
				<button onClick={handleInteraction}>
					<Search strokeWidth={3} size={30} />
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
