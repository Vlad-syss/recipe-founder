import { FC, memo } from 'react'
import { Range } from '../../uikit'
import style from './side-bar.module.scss'

interface NutritionsRangeProps {
	value: [number, number]
	onRangeChange: (range: [number, number]) => void
	onClear: () => void
}

const NutritionsRange: FC<NutritionsRangeProps> = memo(
	({ value, onRangeChange, onClear }) => {
		return (
			<div className={style.nutr}>
				<h2>Select range of nutritions: </h2>
				<Range min={0} max={1000} onRangeChange={onRangeChange} value={value} />
				<button onClick={onClear}>Clear</button>
			</div>
		)
	}
)

export { NutritionsRange }
