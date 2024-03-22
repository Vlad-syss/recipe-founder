import axios from 'axios'
import { RecipeType } from '../types'

export const headers = {
	'X-RapidAPI-Key': '3c52505409mshf85548df959ad7ap1ffd53jsn52023178f206',
	'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
}

export const getAllRecipes = async (
	page: number
): Promise<{
	count: number
	results: RecipeType[]
}> => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/list',
		params: {
			from: '0',
			size: '50',
		},
		headers: headers,
	}

	try {
		const { data } = await axios.request<{
			count: number
			results: RecipeType[]
		}>(options)
		const formattedData = {
			...data,
			results: data.results.slice((page - 1) * 6, page * 6),
		}

		return formattedData
	} catch (error) {
		console.error(error)
		throw error
	}
}
