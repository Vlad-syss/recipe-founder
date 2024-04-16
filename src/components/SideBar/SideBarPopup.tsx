import clsx from 'clsx'
import { Dispatch, FC, MouseEvent, SetStateAction, useRef } from 'react'
import { Filters } from '../../types'
import style from './side-bar.module.scss'

interface SideBarPopupProps {
	isOpen: boolean
	popupClose: () => void
	setIsOpen: Dispatch<SetStateAction<boolean>>
	filters: Filters | undefined
}

const SideBarPopup: FC<SideBarPopupProps> = ({
	isOpen,
	popupClose,
	filters,
}) => {
	const ref = useRef<HTMLDivElement>(null)

	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		if (ref.current && event.target === ref.current) {
			popupClose()
		}
	}
	return (
		<div
			className={clsx(style.wrapper, isOpen && style.active)}
			ref={ref}
			onClick={handleClick}
		>
			<div className={style.modal}>
				<p className={style.error}>
					*
					<span>
						"Unfortunately, the current API version does not support the
						filtering feature. We are working on developing this capability, but
						it is currently unavailable.
						<br />
						<br />
						If you wish, you can check out our{' '}
						<a
							href='https://github.com/Vlad-syss/recipe-founder.git'
							target='_blank'
						>
							GitHub
						</a>{' '}
						repository and perhaps even contribute by creating the functionality
						you need. Your assistance and collaboration in this matter would be
						greatly appreciated.
						<br />
						<br />
						We apologize for any inconvenience and thank you for your
						understanding!"
					</span>
				</p>
				<h3 className={style.title}> - Selected Filters:</h3>
				<pre className={style.data}>{JSON.stringify(filters, null, 3)}</pre>
			</div>
		</div>
	)
}

export { SideBarPopup }
