import axios from 'axios'
import { RecipeType } from '../types'
import { headers } from './getAllRecipes'

export const getRecipeById = async (id: string): Promise<RecipeType> => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
		params: { id: id },
		headers: headers,
	}

	try {
		const { data } = await axios.request<RecipeType>(options)
		return data
	} catch (error) {
		console.error(error)
		throw error
	}
}
