import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getRecipeById } from '../../api'
import style from './recipe-card.module.scss'

const RecipeCard = () => {
	const { id } = useParams()

	if (!id) return

	const { data } = useQuery({
		queryKey: ['recipe'],
		queryFn: () => getRecipeById(id),
	})

	console.log(data)

	return (
		<>
			<div className={style.wrapper}>{data?.name}</div>
		</>
	)
}

export { RecipeCard }
