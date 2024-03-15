import axios from 'axios'
import { RecipeType } from '../types'
import { headers } from './getAllRecipes'

export const getRecipesByIds = async (ids: number[]): Promise<RecipeType[]> => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
		headers: headers,
	}

	try {
		// Fetch all recipes concurrently
		const promises = ids.map(id => {
			const params = { id: id }
			return axios.request<RecipeType>({ ...options, params })
		})

		const responses = await Promise.all(promises)
		return responses.map(response => response.data)
	} catch (error) {
		console.error(error)
		throw error
	}
}
