import { Loader2, Search } from 'lucide-react'
import {
	ChangeEvent,
	Dispatch,
	FC,
	KeyboardEvent,
	MouseEventHandler,
	SetStateAction,
	memo,
	useCallback,
} from 'react'
import { Input } from '../../uikit'
import style from './display.module.scss'

interface ItemsSearchProps {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	onFocus: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur: (e: ChangeEvent<HTMLInputElement>) => void
	onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
	onClick: MouseEventHandler<HTMLButtonElement>
	isLoaded: boolean
}

const ItemsSearch: FC<ItemsSearchProps> = memo(
	({ value, onFocus, onBlur, onKeyDown, setValue, onClick, isLoaded }) => {
		const onChangeInput = useCallback(
			(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
			[value]
		)

		return (
			<div className={style.items__search}>
				<Input
					value={value}
					onChange={onChangeInput}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder='Type the keywords...'
					onKeyDown={onKeyDown}
					className={style.items__input}
				/>
				<button onClick={onClick} disabled={isLoaded}>
					{isLoaded ? <Loader2 strokeWidth={3} /> : <Search />}
				</button>
			</div>
		)
	}
)

export { ItemsSearch }
