import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { KeyboardEvent, MouseEvent, memo, useState } from 'react'
import { getRecipesComplete } from '../../api'
import { Input } from '../../uikit'
import { useHeaderStates } from './HeaderStates'
import style from './header.module.scss'

const Header = () => {
	const { onBlurInput, onChangeInput, onFocusInput, value } = useHeaderStates()
	const [names, setNames] = useState([''])
	const { data } = useQuery({
		queryKey: ['recipes', names],
		queryFn: () => getRecipesComplete(names),
	})

	const handleSubmit = () => {
		const name = value.trim().split(',')
		setNames(name)
		console.log(data)
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
					placeholder='Type the meal or meals devided by " , " ...'
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
