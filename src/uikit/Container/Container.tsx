import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import style from './container.module.scss'

interface ContainerProps {
	children: ReactNode
	className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
	return <div className={clsx(style.container, className)}>{children}</div>
}
