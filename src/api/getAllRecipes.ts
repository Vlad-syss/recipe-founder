import axios from 'axios'
import { RecipeType } from '../types'

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
			size: '20',
			tags: 'under_30_minutes',
		},
		headers: {
			'X-RapidAPI-Key': '08bae70f1bmsh4b2b14ecfec59b5p197001jsn0e7bfdb311b3',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		},
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
