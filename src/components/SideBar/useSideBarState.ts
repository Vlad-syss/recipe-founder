import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface SideBarState {
	priceRange: [number, number]
	rating: number
	selectedCategory: string | null
	handlePriceRangeChange: (range: [number, number]) => void
	handleClear: () => void
	handleCategory: (categoryTitle: string) => void
	setRating: Dispatch<SetStateAction<number>>
}

const useSideBarState = (): SideBarState => {
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
	const [rating, setRating] = useState(0)
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	const handlePriceRangeChange = useCallback((range: [number, number]) => {
		setPriceRange(range)
	}, [])

	const handleClear = useCallback(() => {
		setPriceRange([0, 1000])
	}, [])
	const handleCategory = useCallback((categoryTitle: string) => {
		setSelectedCategory(currentCategory => {
			console.log(categoryTitle)
			console.log(currentCategory)
			return categoryTitle === currentCategory ? null : categoryTitle
		})
	}, [])
	console.log({
		rating: rating,
		selectedCategory: selectedCategory,
		calories: priceRange,
	})

	return {
		priceRange,
		rating,
		selectedCategory,
		handlePriceRangeChange,
		handleClear,
		handleCategory,
		setRating,
	}
}

export { useSideBarState }
