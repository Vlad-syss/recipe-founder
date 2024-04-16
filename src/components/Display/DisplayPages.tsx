import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'
import { FC, MouseEvent, memo } from 'react'
import { RecipeType } from '../../types'
import style from './display.module.scss'

interface ItemsPaginationProps {
	page: number
	isLoading: boolean
	handlePages: (e: MouseEvent<HTMLButtonElement>) => void
	data: RecipeType[] | undefined
}

const DisplayPages: FC<ItemsPaginationProps> = memo(
	({ page, handlePages, data, isLoading }) => {
		return (
			<div className={style.pages}>
				<button
					disabled={isLoading || page === 1}
					onClick={handlePages}
					data-direction='prev'
				>
					<ArrowBigLeftDash size={30} />
				</button>
				<button
					onClick={handlePages}
					data-direction='next'
					disabled={isLoading || (data && data?.length < 15)}
				>
					<ArrowBigRightDash size={30} />
				</button>
			</div>
		)
	}
)

export { DisplayPages }
