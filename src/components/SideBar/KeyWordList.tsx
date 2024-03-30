import { FC, memo } from 'react'
import { Checkbox } from '../../uikit'
import style from './side-bar.module.scss'

interface KeywordListProps {
	keywords: string[]
}

const KeywordList: FC<KeywordListProps> = memo(({ keywords }) => {
	return (
		<ul className={style.keywords}>
			{keywords.map((item, index) => (
				<Checkbox title={item} key={index} />
			))}
		</ul>
	)
})

export { KeywordList }
