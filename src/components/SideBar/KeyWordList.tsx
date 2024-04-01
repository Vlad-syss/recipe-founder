import { FC, memo } from 'react'
import { useCatalogList } from '../../store'
import { Checkbox } from '../../uikit'
import style from './side-bar.module.scss'

interface KeywordListProps {
	keywords: string[]
}

const KeywordList: FC<KeywordListProps> = memo(({ keywords }) => {
	const { selectedItems, toggleItem } = useCatalogList()

	const handleToggle = (keyword: string) => {
		toggleItem(keyword, 'keywords');
	}

	return (
		<ul className={style.keywords}>
			{keywords.map((item, index) => (
				<Checkbox 
					title={item} 
					key={index} 
					checked={selectedItems.keywords.includes(item)} 
					onChange={() => handleToggle(item)} 
				/>
			))}
		</ul>
	)
})

export { KeywordList }

