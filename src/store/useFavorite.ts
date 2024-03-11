import { create } from 'zustand'

interface Recipe {
	id: number
}

type FavoriteStore = {
	initialState: Recipe[]
	checkInFavorite: (recipeId: number) => void
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
}))

export { useFavorite }
