import clsx from 'clsx'
import { FC, memo } from 'react'
import style from './checkbox.module.scss'

interface CheckboxProps {
  title: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: FC<CheckboxProps> = memo(({ title, checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange();
  };

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

