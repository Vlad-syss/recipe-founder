import { NotebookText } from 'lucide-react'
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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

	const popupOpen = (currentPopup: any) => {
		if (currentPopup && isOpen === true) {
			popupClose()
		} else {
			bodyLock()
		}
		setIsOpen(true)
	}

	const popupClose = () => {
		setIsOpen(false)
		bodyUnlock()
	}

	const bodyLock = () => {
		const padding = window.innerWidth - document.body.offsetWidth + 'px'

		document.body.style.paddingRight = padding
		document.body.classList.add(style.lock)

		unlock = false
		setTimeout(() => {
			unlock = true
		}, timeout)
	}

	const bodyUnlock = () => {
		setTimeout(() => {
			document.body.style.paddingRight = '0px'
			document.body.classList.remove(style.lock)
		}, timeout)
	}

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
