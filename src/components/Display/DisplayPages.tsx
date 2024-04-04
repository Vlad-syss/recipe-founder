import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'
import { FC, KeyboardEvent, MouseEvent, memo } from 'react'
import { RecipeType } from '../../types'
import style from './display.module.scss'

interface ItemsPaginationProps {
	page: number
	handleInteraction: (
		e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
	) => void
	data:
		| {
				count: number
				results: RecipeType[]
		  }
		| undefined
}

const DisplayPages: FC<ItemsPaginationProps> = memo(
	({ page, handleInteraction, data }) => {
		return (
			<div className={style.pages}>
				<button
					disabled={page === 1}
					onClick={handleInteraction}
					data-direction='prev'
				>
					<ArrowBigLeftDash size={30} />
				</button>
				<button
					onClick={handleInteraction}
					data-direction='next'
					disabled={data && data?.results.length < 15}
				>
					<ArrowBigRightDash size={30} />
				</button>
			</div>
		)
	}
)

export { DisplayPages }
