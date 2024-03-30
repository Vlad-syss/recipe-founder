import clsx from 'clsx'
import {
	Apple,
	Beef,
	Cake,
	Croissant,
	Donut,
	Egg,
	GlassWater,
	Salad,
	Undo2,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox, Range, Spoller, StarRating } from '../../uikit'
import style from './catalog.module.scss'

const categories = [
	{
		title: 'Fruits',
		icon: <Apple />,
	},
	{
		title: 'Vegetables',
		icon: <Salad />,
	},
	{
		title: 'Meat & Fesh',
		icon: <Beef />,
	},
	{
		title: 'Beverage',
		icon: <GlassWater />,
	},
	{
		title: 'Sweets & dessert',
		icon: <Cake />,
	},
	{
		title: 'Snacks',
		icon: <Donut />,
	},
	{
		title: 'Bread & Bakery',
		icon: <Croissant />,
	},
	{
		title: 'Eggs',
		icon: <Egg />,
	},
]
const keywords = [
	'bread',
	'juice',
	'milk',
	'egg',
	'pasta',
	'potato',
	'tomato',
	'apple',
	'flour',
	'banana',
	'cookie',
	'oil',
	'batter',
]
const credits = ['community', 'internal']

const Catalog = () => {
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
	const [rating, setRating] = useState(0)
	console.log(rating)

	const handlePriceRangeChange = (range: [number, number]) => {
		setPriceRange(range)
	}

	const handleClear = () => {
		setPriceRange([0, 1000])
	}

	//TODO:
	// ZUSTAND STATE FOR CHECKBOX AND FOR ALL SPOLLERS....

	/**
	 * ---Sidebar:---
	 *  Nutritions calories,
	 *  Star Rating,
	 *  Keywords search(popular proposal),
	 *  Type credits(like checkbox),
	 *  Categories
	 *  Submit Button,
	 * 	...
	 * ---Display:---
	 * 	Search input (like main),
	 * 	Functionality to switch display,
	 * 	Recipe item and start rating,
	 * 	Sort by rating, popularity and so on...,
	 * 	...
	 **/

	return (
		<div className={style.wrapper}>
			<Link to={'/'}>
				Back Home <Undo2 size={16} />
			</Link>
			<div className={style.catalog}>
				<nav className={style.sidebar}>
					<Spoller title='Categories' isOpen={true}>
						<ul className={style.categories}>
							{categories.map((item, index) => (
								<button key={index}>
									{item.icon}
									{item.title}
								</button>
							))}
						</ul>
					</Spoller>
					<Spoller title='Keywords'>
						<ul className={style.keywords}>
							{keywords.map((item, index) => (
								<Checkbox title={item} key={index} />
							))}
						</ul>
					</Spoller>
					<Spoller title='Credits'>
						<ul className={clsx(style.keywords, style.credits)}>
							{credits.map((item, index) => (
								<Checkbox title={`"${item}"`} key={index} />
							))}
						</ul>
					</Spoller>
					<Spoller title='Nutritions range' isOpen={true}>
						<div className={style.nutr}>
							<h2>Select range of nutritions: </h2>
							<Range
								min={0}
								max={1000}
								onRangeChange={handlePriceRangeChange}
								value={priceRange}
							/>
							<button onClick={handleClear}>Clear</button>
						</div>
					</Spoller>
					<Spoller title='Star Rate' isOpen={true}>
						<div className={style.stars}>
							<p>Selected Rating: {rating !== null ? rating / 2 : 0}</p>
							<StarRating rating={rating} setRating={setRating} />
						</div>
					</Spoller>
					<button className={style.btn_submit}>Submit</button>
				</nav>
				<div className={style.items}>Catalog</div>
			</div>
		</div>
	)
}

export { Catalog }
