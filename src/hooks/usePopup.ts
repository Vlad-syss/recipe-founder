import { Dispatch, SetStateAction } from 'react'

interface PopupActions {
	popupClose: () => void
	popupOpen: (currentPopup: any) => void
}

interface PopupProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	unlock: boolean
	timeout: number
	lock: string
}

const usePopup = ({
	isOpen,
	setIsOpen,
	unlock,
	timeout,
	lock,
}: PopupProps): PopupActions => {
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
		document.body.classList.add(lock)

		unlock = false
		setTimeout(() => {
			unlock = true
		}, timeout)
	}

	const bodyUnlock = () => {
		setTimeout(() => {
			document.body.style.paddingRight = '0px'
			document.body.classList.remove(lock)
		}, timeout)
	}

	return {
		popupClose,
		popupOpen,
	}
}

export { usePopup }
