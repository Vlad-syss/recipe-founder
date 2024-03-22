import clsx from 'clsx'
import { Dispatch, FC, MouseEvent, SetStateAction, useRef } from 'react'
import { useFavoriteRecipesQuery } from '../../hooks'
import { Recipe } from '../../store/useFavorite'
import { SkeletonForBacket } from '../Skeleton/BacketSkeleton'
import { FavoritesElement } from './FavoritesElement'
import style from './favorites-backet.module.scss'

interface BacketProps {
	isOpen: boolean
	favorites: Recipe[]
	setIsOpen: Dispatch<SetStateAction<boolean>>
	popupClose: () => void
}

const FavoritesBacket: FC<BacketProps> = ({
	isOpen,
	favorites,
	popupClose,
}) => {
	const ref = useRef<HTMLDivElement>(null)

	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		if (ref.current && event.target === ref.current) {
			popupClose()
		}
	}

	const { data, isFetching } = useFavoriteRecipesQuery(isOpen, favorites)

	return (
		<div
			className={clsx(style.wrapper, isOpen && style.active)}
			ref={ref}
			onClick={handleClick}
		>
			<div className={style.modal}>
				<h3 className={style.title}>Favorites Recipes:</h3>
				<div className={style.items}>
					{isFetching ? (
						<SkeletonForBacket />
					) : data?.length !== 0 && !!data ? (
						data.map(item => <FavoritesElement key={item.id} {...item} />)
					) : (
						<p>There are no favorite recipes!</p>
					)}
				</div>
			</div>
		</div>
	)
}

export { FavoritesBacket }
