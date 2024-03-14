import axios from 'axios'
import { RecipeType } from '../types'

export const getRecipeById = async (id: string): Promise<RecipeType> => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
		params: { id: id },
		headers: {
			'X-RapidAPI-Key': '08bae70f1bmsh4b2b14ecfec59b5p197001jsn0e7bfdb311b3',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		},
	}

	try {
		const { data } = await axios.request<RecipeType>(options)
		return data
	} catch (error) {
		console.error(error)
		throw error
	}
}
