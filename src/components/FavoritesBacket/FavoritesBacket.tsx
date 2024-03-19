import { useQuery, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import {
	Dispatch,
	FC,
	MouseEvent,
	SetStateAction,
	useEffect,
	useRef,
} from 'react'
import { getRecipesByIds } from '../../api'
import { Recipe } from '../../store/useFavorite'
import BacketSkeleton from '../Skeleton/BacketSkeleton'
import { FavoritesElement } from './FavoritesElement'
import style from './favorites-backet.module.scss'

interface BacketProps {
	isOpen: boolean
	favorites: Recipe[]
	setIsOpen: Dispatch<SetStateAction<boolean>>
	popupClose: () => void
}

const Skeleton = () => (
	<>
		<BacketSkeleton />
		<BacketSkeleton />
		<BacketSkeleton />
		<BacketSkeleton />
		<BacketSkeleton />
		<BacketSkeleton />
		<BacketSkeleton />
		<BacketSkeleton />
	</>
)

const FavoritesBacket: FC<BacketProps> = ({
	isOpen,
	favorites,
	popupClose,
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const queryClient = useQueryClient()

	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		if (ref.current && event.target === ref.current) {
			popupClose()
		}
	}

	const { data, isFetching } = useQuery({
		queryKey: ['favoriteRecipes'],
		queryFn: () => getRecipesByIds(favorites.map(item => item.id)),
		enabled: isOpen,
	})

	useEffect(() => {
		if (isOpen) {
			queryClient.invalidateQueries({ queryKey: ['favoriteRecipes'] })
		}
	}, [isOpen, favorites])

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
						<Skeleton />
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
