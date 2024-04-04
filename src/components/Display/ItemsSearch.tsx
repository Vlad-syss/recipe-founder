import { Search } from 'lucide-react'
import { ChangeEvent, FC, KeyboardEvent, memo } from 'react'
import { Input } from '../../uikit'
import style from './display.module.scss'

interface ItemsSearchProps {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onFocus: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur: (e: ChangeEvent<HTMLInputElement>) => void
	onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
}

const ItemsSearch: FC<ItemsSearchProps> = memo(
	({ value, onChange, onFocus, onBlur, onKeyDown }) => {
		return (
			<div className={style.items__search}>
				<Input
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder='Type the keywords...'
					onKeyDown={onKeyDown}
					className={style.items__input}
				/>
				<button>
					<Search />
				</button>
			</div>
		)
	}
)

export { ItemsSearch }
