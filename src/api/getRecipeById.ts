import axios from 'axios'
import { RecipeType } from '../types'

export const getRecipeById = async (id: string): Promise<RecipeType> => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
		params: { id: id },
		headers: {
			'X-RapidAPI-Key': '13aaa10f7emsh2448898eda0fee6p1ca3a2jsnbcbb857fc697',
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
