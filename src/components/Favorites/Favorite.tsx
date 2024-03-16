import { NotebookText } from 'lucide-react'
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePopup } from '../../hooks'
import { useFavorite } from '../../store'
import { FavoritesBacket } from '../FavoritesBacket/FavoritesBacket'
import style from './favorite.module.scss'

const root = document.querySelector('#root')

const Favorite = () => {
	const favorites = useFavorite(state => state.initialState)
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)
	const timeout = 800
	let unlock = true

	const { popupClose, popupOpen } = usePopup({
		isOpen: isOpen,
		lock: style.lock,
		setIsOpen: setIsOpen,
		timeout: timeout,
		unlock: unlock,
	})

	return (
		<div className={style.like}>
			<span>{favorites.length}</span>
			<button onClick={() => popupOpen(btnRef.current)} ref={btnRef}>
				<NotebookText size={30} />
			</button>
			{root &&
				createPortal(
					<FavoritesBacket
						favorites={favorites}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						popupClose={popupClose}
					/>,
					root
				)}
		</div>
	)
}

export { Favorite }
