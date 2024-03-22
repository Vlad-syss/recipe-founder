import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getRecipesByIds } from '../api'
import { Recipe } from '../store/useFavorite'

export const useFavoriteRecipesQuery = (
	isOpen: boolean,
	favorites: Recipe[]
) => {
	const queryClient = useQueryClient()

	useEffect(() => {
		if (isOpen) {
			queryClient.invalidateQueries({ queryKey: ['favoriteRecipes'] })
		}
	}, [isOpen, favorites])

	return useQuery({
		queryKey: ['favoriteRecipes'],
		queryFn: () => getRecipesByIds(favorites.map(item => item.id)),
		enabled: isOpen,
	})
}
