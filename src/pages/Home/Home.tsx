import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Recipes } from '../../components/Recipes/Recipes'
import { SearchKeys } from '../../types'
import style from './home.module.scss'

const Home = () => {
	const [filteredData, setFilteredData] = useState<SearchKeys[] | null>(null)

	const handleFilterChange = (filteredData: SearchKeys[] | null) => {
		setFilteredData(filteredData)
	}

	return (
		<>
			<div className={style.wrapper}>
				<Header onFilterChange={handleFilterChange} />
				<Recipes filteredData={filteredData} />
			</div>
		</>
	)
}

export { Home }
