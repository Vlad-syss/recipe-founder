import clsx from 'clsx'
import { FC, memo } from 'react'
import { Checkbox } from '../../uikit'
import style from './side-bar.module.scss'

interface CreditListProps {
	credits: string[]
}

const CreditList: FC<CreditListProps> = memo(({ credits }) => {
	return (
		<ul className={clsx(style.keywords, style.credits)}>
			{credits.map((item, index) => (
				<Checkbox title={`"${item}"`} key={index} />
			))}
		</ul>
	)
})

export { CreditList }
