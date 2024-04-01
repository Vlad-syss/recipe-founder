import clsx from 'clsx'
import { FC, memo } from 'react'
import { useCatalogList } from '../../store'
import { Checkbox } from '../../uikit'
import style from './side-bar.module.scss'

interface CreditListProps {
	credits: string[]
}

const CreditList: FC<CreditListProps> = memo(({ credits }) => {
	const { selectedItems, toggleItem } = useCatalogList()

	const handleToggle = (credit: string) => {
		toggleItem(credit, 'credits');
	}

	return (
		<ul className={clsx(style.keywords, style.credits)}>
			{credits.map((item, index) => (
				<Checkbox 
					title={`"${item}"`} 
					key={index} 
					checked={selectedItems.credits.includes(item)} 
					onChange={() => handleToggle(item)} 
				/>
			))}
		</ul>
	)
})

export { CreditList }

