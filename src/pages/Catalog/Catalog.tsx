import { memo } from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import { BackHome } from '../../uikit'
import style from './catalog.module.scss'

const Catalog = memo(() => {
	//TODO:

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
			<BackHome />
			<div className={style.catalog}>
				<SideBar />
				<div className={style.items}>Catalog</div>
			</div>
		</div>
	)
})

export { Catalog }

