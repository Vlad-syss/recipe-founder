import { useEffect, useState } from 'react'
import RecipeSkeleton from '../Skeleton/RecipeSkeleton/RecipeSkeleton'
import { Recipe } from './Recipe'
import style from './recipes.module.scss'

const Recipes = () => {
	const items = [1, 2, 3, 4, 5]
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}, [])

	return (
		<main className={style.main}>
			<h2>Your Search Results:</h2>
			<div className={style.items}>
				{!items || items.length === 0 ? (
					<p>Here will be your search results...</p>
				) : !isLoading ? (
					items.map(item => <Recipe key={item} />)
				) : (
					<>
						<RecipeSkeleton />
						<RecipeSkeleton />
						<RecipeSkeleton />
					</>
				)}
			</div>
		</main>
	)
}

export { Recipes }
