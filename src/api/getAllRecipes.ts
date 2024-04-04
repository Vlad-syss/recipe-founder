import axios from 'axios'
import { RecipeType } from '../types'

export const headers = {
	'X-RapidAPI-Key': '97cc14a36dmshf086460c36980aap18b37djsn1677861de1cc',
	'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
}

export const getAllRecipes = async (
	page: number,
	count?: number | undefined
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
		const changeCount = count ? count : 6
		const { data } = await axios.request<{
			count: number
			results: RecipeType[]
		}>(options)
		const formattedData = {
			...data,
			results: data.results.slice((page - 1) * changeCount, page * changeCount),
		}

		return formattedData
	} catch (error) {
		console.error(error)
		throw error
	}
}
