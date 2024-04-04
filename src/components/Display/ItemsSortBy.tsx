import { MoveUp } from 'lucide-react'
import { FC, memo } from 'react'
import style from './display.module.scss'

interface ItemsSortByProps {}

const ItemsSortBy: FC<ItemsSortByProps> = memo(() => {
	return (
		<div className={style.items__sortBy}>
			<button>
				<MoveUp size={15} strokeWidth={3} /> Popular
			</button>
			<button>
				<MoveUp size={15} strokeWidth={3} /> Recent
			</button>
		</div>
	)
})

export { ItemsSortBy }
