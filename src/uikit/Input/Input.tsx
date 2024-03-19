import clsx from 'clsx'
import { ChangeEvent, FC, KeyboardEvent } from 'react'
import style from './input.module.scss'

interface InputProps {
	value?: string | number | readonly string[] | undefined
	className?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
	onFocus?: (e: ChangeEvent<HTMLInputElement>) => void
	id?: string | undefined
	placeholder?: string
	onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
	value,
	className,
	onChange,
	onBlur,
	onFocus,
	id,
	placeholder,
	onKeyDown,
}) => {
	return (
		<input
			id={id}
			value={value}
			onChange={onChange}
			onFocus={onFocus}
			className={clsx(style.input, className)}
			onBlur={onBlur}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
		/>
	)
}

export { Input }
