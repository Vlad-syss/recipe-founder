// В компоненті Range:
import { FC, memo, useEffect, useRef, useState } from 'react'
import './range.scss'

interface PriceRangeSliderProps {
	min: number
	max: number
	value: [number, number]
	onRangeChange: (range: [number, number]) => void
}

const Range: FC<PriceRangeSliderProps> = memo(
	({ min, max, value, onRangeChange }) => {
		const [values, setValues] = useState<[number, number]>(value)
		const sliderRef = useRef<HTMLDivElement>(null)

		useEffect(() => {
			setValues(value)
		}, [value])

		const handleMouseDown = (event: React.MouseEvent, index: number) => {
			event.preventDefault()
			const handleMouseMove = (event: MouseEvent) => {
				const rect = sliderRef.current?.getBoundingClientRect()
				if (!rect) return
				const newValue =
					((event.clientX - rect.left) / rect.width) * (max - min) + min
				const newValues: [number, number] = [...values]
				newValues[index] = Math.max(min, Math.min(max, newValue))
				setValues(newValues)
				onRangeChange(newValues)
			}

			const handleMouseUp = () => {
				document.removeEventListener('mousemove', handleMouseMove)
				document.removeEventListener('mouseup', handleMouseUp)
			}

			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
		}

		return (
			<div className='price-range-slider' ref={sliderRef}>
				<div
					className='range'
					style={{
						width: `calc(${((values[1] - values[0]) / (max - min)) * 100}%)`,
						left: `calc(${((values[0] - min) / (max - min)) * 100}%)`,
					}}
				/>
				{values.map((val, index) => (
					<div
						key={index}
						className='handle'
						style={{ left: `calc(${((val - min) / (max - min)) * 100}%)` }}
						onMouseDown={event => handleMouseDown(event, index)}
					/>
				))}
				<div
					className='price-label'
					style={{
						left: `calc(${((values[0] - min) / (max - min)) * 100}% - 15px)`,
					}}
				>
					{values[0].toFixed(0)}Cal
				</div>
				<div
					className='price-label'
					style={{
						left: `calc(${((values[1] - min) / (max - min)) * 100}% - 20px)`,
					}}
				>
					{values[1].toFixed(0)}Cal
				</div>
			</div>
		)
	}
)

export { Range }
