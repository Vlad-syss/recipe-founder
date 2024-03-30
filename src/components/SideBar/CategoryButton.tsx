import clsx from 'clsx'
import { FC, memo, useCallback } from 'react'
import style from './side-bar.module.scss'

interface CategoryButtonProps {
	title: string
	icon: React.ReactNode
	isActive: boolean
	onClick: () => void
}

const CategoryButton: FC<CategoryButtonProps> = memo(
	({ title, icon, isActive, onClick }) => {
		const handleClick = useCallback(() => {
			onClick()
		}, [onClick])

		return (
			<button
				onClick={handleClick}
				className={clsx(style.categoryButton, { [style.active]: isActive })}
			>
				{icon}
				{title}
			</button>
		)
	}
)

export { CategoryButton }
