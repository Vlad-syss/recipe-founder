import { create } from 'zustand'

export interface Recipe {
	id: number
}

type FavoriteStore = {
	initialState: Recipe[]
	checkInFavorite: (recipeId: number) => void
	removeFromBacket: (recipeId: number) => void
}

const useFavorite = create<FavoriteStore>(set => ({
	initialState: [],
	checkInFavorite: recipeId => {
		set(state => {
			const isFavorite = state.initialState.some(r => r.id === recipeId)

			if (isFavorite) {
				const updatedState = state.initialState.filter(r => r.id !== recipeId)
				return { initialState: updatedState }
			} else {
				const updatedState = [...state.initialState, { id: recipeId }]
				return { initialState: updatedState }
			}
		})
	},
	removeFromBacket: recipeId =>
		set(state => ({
			initialState: state.initialState.filter(recipe => recipe.id !== recipeId),
		})),
}))

export { useFavorite }
