import { NotebookText } from 'lucide-react'
import { useFavorite } from '../../store'
import style from './favorite.module.scss'

const Favorite = () => {
	const favorites = useFavorite(state => state.initialState)

	return (
		<div className={style.like}>
			<span>{favorites.length}</span>
			<button>
				<NotebookText size={30} />
			</button>
		</div>
	)
}

export { Favorite }
