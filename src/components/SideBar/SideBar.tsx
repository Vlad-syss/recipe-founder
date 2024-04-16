import { memo, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePopup } from '../../hooks'
import { Filters } from '../../types'
import { Spoller } from '../../uikit'
import { CategoryButton } from './CategoryButton'
import { CreditList } from './CreditList'
import { KeywordList } from './KeyWordList'
import { NutritionsRange } from './NutritionsRange'
import { SideBarPopup } from './SideBarPopup'
import { StarRate } from './StarRate'
import { categories, credits, keywords } from './lists'
import style from './side-bar.module.scss'
import { useSideBarState } from './useSideBarState'

const root = document.querySelector('#root')

const SideBar = memo(() => {
	const {
		priceRange,
		rating,
		selectedCategory,
		handlePriceRangeChange,
		handleClear,
		handleCategory,
		setRating,
		state,
		btnRef,
		isOpen,
		setIsOpen,
		timeout,
		unlock,
	} = useSideBarState()
	const { popupClose, popupOpen } = usePopup({
		isOpen: isOpen,
		lock: style.lock,
		setIsOpen: setIsOpen,
		timeout: timeout,
		unlock: unlock,
	})
	const [filters, setFilters] = useState<Filters>()

	const onHandleSubmit = () => {
		setFilters({
			rating: rating / 2,
			selectedCategory: selectedCategory,
			calories: priceRange,
			keywords: state.selectedItems.keywords,
			credits: state.selectedItems.credits,
		})
		popupOpen(btnRef.current)
	}

	return (
		<nav className={style.sidebar}>
			<Spoller title='Categories' isOpen={true}>
				<ul className={style.categories}>
					{categories.map((item, index) => (
						<CategoryButton
							key={index}
							title={item.title}
							icon={item.icon}
							isActive={selectedCategory === item.title}
							onClick={() => handleCategory(item.title)}
						/>
					))}
				</ul>
			</Spoller>
			<Spoller title='Keywords'>
				<KeywordList keywords={keywords} />
			</Spoller>
			<Spoller title='Credits'>
				<CreditList credits={credits} />
			</Spoller>
			<Spoller title='Nutritions range' isOpen={true}>
				<NutritionsRange
					value={priceRange}
					onRangeChange={handlePriceRangeChange}
					onClear={handleClear}
				/>
			</Spoller>
			<Spoller title='Star Rate' isOpen={true}>
				<StarRate rating={rating} setRating={setRating} />
			</Spoller>
			<button
				className={style.btn_submit}
				onClick={onHandleSubmit}
				ref={btnRef}
			>
				Submit
			</button>
			{root &&
				createPortal(
					<SideBarPopup
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						popupClose={popupClose}
						filters={filters}
					/>,
					root
				)}
		</nav>
	)
})

export { SideBar }
