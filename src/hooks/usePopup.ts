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

const usePopup = ({ isOpen, setIsOpen, lock }: PopupProps): PopupActions => {
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

		// let isLocked = true // Initialize the variable

		// setTimeout(() => {
		// 	isLocked = false // Update the variable after the timeout
		// }, timeout)

		// return isLocked // Return the locking state if needed
	}

	const bodyUnlock = () => {
		document.body.style.paddingRight = '0px'
		document.body.classList.remove(lock)
	}

	return {
		popupClose,
		popupOpen,
	}
}

export { usePopup }
