import { NotebookText } from 'lucide-react'
import style from './favorite.module.scss'

const Favorite = () => {
	return (
		<div className={style.like}>
			<span>0</span>
			<button>
				<NotebookText size={30} />
			</button>
		</div>
	)
}

export { Favorite }
