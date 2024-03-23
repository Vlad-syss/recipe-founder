import { Undo2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import style from './catalog.module.scss'

const Catalog = () => {
	/**
	 * ---Sidebar:---
	 *  Nutritions calories,
	 *  Star Rating,
	 *  Keywords search(popular proposal),
	 *  Type credits(like checkbox),
	 *  Submit Button,
	 * 	...
	 * ---Display:---
	 * 	Search input (like main),
	 * 	Functionality to switch display,
	 * 	Recipe item and start rating,
	 * 	Filter by rating, popularity and so on...,
	 * 	...
	 **/

	return (
		<div className={style.wrapper}>
			<Link to={'/'}>
				Back Home <Undo2 size={16} />
			</Link>
			<div className={style.catalog}>
				<nav className={style.sidebar}></nav>
				<div className={style.items}></div>
			</div>
		</div>
	)
}

export { Catalog }
