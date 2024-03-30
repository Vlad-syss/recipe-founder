import clsx from 'clsx'
import { memo, useState } from 'react'
import style from './checkbox.module.scss'

const Checkbox = memo(({ title }: { title: string }) => {
	const [checked, setChecked] = useState(false)

	const toggleCheckbox = () => {
		setChecked(!checked)
	}

	return (
		<label className={style.checkbox_container}>
			<input type='checkbox' checked={checked} onChange={toggleCheckbox} />
			<span className={style.checkmark}>
				<span className={clsx(style.inner_circle, checked && style.active)} />
			</span>
			{title}
		</label>
	)
})

export { Checkbox }
