import { memo } from 'react'
import { Spoller } from '../../uikit'
import { CategoryButton } from './CategoryButton'
import { CreditList } from './CreditList'
import { KeywordList } from './KeyWordList'
import { NutritionsRange } from './NutritionsRange'
import { StarRate } from './StarRate'
import { categories, credits, keywords } from './lists'
import style from './side-bar.module.scss'
import { useSideBarState } from './useSideBarState'

const SideBar = memo(() => {
	const {
		priceRange,
		rating,
		selectedCategory,
		handlePriceRangeChange,
		handleClear,
		handleCategory,
		setRating,
	} = useSideBarState()

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
			<button className={style.btn_submit}>Submit</button>
		</nav>
	)
})

export { SideBar }
