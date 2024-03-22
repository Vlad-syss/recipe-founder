import { FC } from 'react'
import { RecipeType } from '../../types'
import style from './product-item.module.scss'

interface InstructionsBlockProps {
	data: RecipeType
}

const InstructionsBlock: FC<InstructionsBlockProps> = ({ data }) => (
	<div className={style.block}>
		<h3>Instruction:</h3>
		<ul>
			{data.instructions.map((int, i) => (
				<li key={i}>{int.display_text}</li>
			))}
		</ul>
	</div>
)

export { InstructionsBlock }
