import { memo } from 'react'
import { Display } from '../../components/Display/Display'
import { SideBar } from '../../components/SideBar/SideBar'
import { BackHome } from '../../uikit'
import style from './catalog.module.scss'

const Catalog = memo(() => {
	/**
	 * ---Sidebar:--
	 *  Submit Button,
	 * 	...
	 * ---Display:---
	 * 	Search input (like main),
	 * 	Functionality to switch display,
	 * 	Sort by rating, popularity and so on...,
	 * 	...
	 **/

	return (
		<div className={style.wrapper}>
			<BackHome />
			<div className={style.catalog}>
				<SideBar />
				<Display />
			</div>
		</div>
	)
})

export { Catalog }
