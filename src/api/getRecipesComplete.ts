import axios from 'axios'
import pMap from 'p-map'
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

	try {
		const responses = await pMap(
			names,
			async (name: string) => {
				const params = { prefix: name }
				const response = await axios.request<RecipeType>({ ...options, params })
				return response.data
			},
			{ concurrency: 5 }
		)
		console.log(responses)

		return responses
	} catch (error) {
		console.error(error)
		throw error
	}
}
