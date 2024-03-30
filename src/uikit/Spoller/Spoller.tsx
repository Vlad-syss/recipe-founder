import clsx from 'clsx'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FC, JSX, memo, useEffect, useRef, useState } from 'react'
import style from './spoller.module.scss'

interface SpollerProps {
	title: string
	className?: string
	children: string | JSX.Element | JSX.Element[]
	isOpen?: boolean
}

const Spoller: FC<SpollerProps> = memo(
	({ title, children, className, isOpen }) => {
		const [isExpanded, setIsExpanded] = useState(isOpen ? true : false)
		const [contentHeight, setContentHeight] = useState(0)
		const contentRef = useRef<HTMLDivElement>(null)

		useEffect(() => {
			if (contentRef.current) {
				setContentHeight(contentRef.current.scrollHeight)
			}
		}, [isExpanded])

		const toggleSpoller = () => {
			setIsExpanded(!isExpanded)
		}

		return (
			<div className={clsx(style.spoller, className)}>
				<button className={style.spoller_title} onClick={toggleSpoller}>
					<h3>{title}</h3>
					{isExpanded ? <ChevronUp /> : <ChevronDown />}
				</button>
				<div
					className={clsx(style.spoller_content, isExpanded && style.active)}
					style={{ height: isExpanded ? `${contentHeight}px` : '0' }}
					ref={contentRef}
				>
					{children}
				</div>
			</div>
		)
	}
)

export { Spoller }
