import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react'
import { useCatalogList } from '../../store'

interface SideBarState {
	priceRange: [number, number]
	rating: number
	selectedCategory: string | null
	handlePriceRangeChange: (range: [number, number]) => void
	handleClear: () => void
	handleCategory: (categoryTitle: string) => void
	setRating: Dispatch<SetStateAction<number>>
	state: any
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	unlock: boolean
	timeout: number
	btnRef: any
}

const useSideBarState = (): SideBarState => {
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
	const [rating, setRating] = useState(0)
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const state = useCatalogList(state => state)
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)
	const timeout = 800
	let unlock = true

	const handlePriceRangeChange = useCallback((range: [number, number]) => {
		setPriceRange(range)
	}, [])

	const handleClear = useCallback(() => {
		setPriceRange([0, 1000])
	}, [])
	const handleCategory = useCallback((categoryTitle: string) => {
		setSelectedCategory(currentCategory => {
			// console.log(categoryTitle)
			// console.log(currentCategory)
			return categoryTitle === currentCategory ? null : categoryTitle
		})
	}, [])

	return {
		priceRange,
		rating,
		selectedCategory,
		handlePriceRangeChange,
		handleClear,
		handleCategory,
		setRating,
		state,
		unlock,
		isOpen,
		setIsOpen,
		timeout,
		btnRef,
	}
}

export { useSideBarState }
