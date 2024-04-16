import clsx from 'clsx'
import { MoveUp } from 'lucide-react'
import { Dispatch, FC, SetStateAction, memo } from 'react'
import style from './display.module.scss'

interface ItemsSortByProps {
	handlePopular: () => void
	isPopular: boolean
	setIsPopular: Dispatch<SetStateAction<boolean>>
	handleRecent: () => void
	isRecent: boolean
	setIsRecent: Dispatch<SetStateAction<boolean>>
}

const ItemsSortBy: FC<ItemsSortByProps> = memo(
	({
		handlePopular,
		isPopular,
		setIsPopular,
		handleRecent,
		isRecent,
		setIsRecent,
	}) => {
		return (
			<div className={style.items__sortBy}>
				<button
					onClick={() => {
						handlePopular()
						setIsPopular(prev => !prev)
						setIsRecent(false)
					}}
					className={clsx(isPopular && style.active)}
				>
					<MoveUp size={15} strokeWidth={3} />
					Popular
				</button>
				<button
					onClick={() => {
						handleRecent()
						setIsRecent(prev => !prev)
						setIsPopular(false)
					}}
					className={clsx(isRecent && style.active)}
				>
					<MoveUp size={15} strokeWidth={3} />
					Recent
				</button>
			</div>
		)
	}
)

export { ItemsSortBy }
