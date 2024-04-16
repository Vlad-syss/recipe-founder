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

		// Instead of trying to modify the 'unlock' parameter directly,
		// you should handle the unlocking logic separately.

		// For example, you could have a local variable to track the locking state.
		let isLocked = true

		setTimeout(() => {
			isLocked = false // Unlock after the specified timeout
		}, timeout)
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
