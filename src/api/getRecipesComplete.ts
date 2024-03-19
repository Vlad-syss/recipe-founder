import axios from 'axios'
import { RecipeType } from '../types'
import { headers } from './getAllRecipes'

export const getRecipesComplete = async (
	names: string[]
): Promise<RecipeType[]> => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
		headers: headers,
	}
	console.log(names)

	try {
		// Fetch all recipes concurrently
		const promises = names.map(name => {
			const params = { prefix: name }
			return axios.request<RecipeType>({ ...options, params })
		})

		const responses = await Promise.all(promises)
		return responses.map(response => response.data)
	} catch (error) {
		console.error(error)
		throw error
	}
}
