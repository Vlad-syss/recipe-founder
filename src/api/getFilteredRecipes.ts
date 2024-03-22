import axios from 'axios'
import pMap from 'p-map'
import { ResultsRecipes, SearchKeys } from '../types'
import { headers } from './getAllRecipes'

export const getFilteredRecipes = async (
	page: number,
	filteredData: SearchKeys[]
): Promise<ResultsRecipes> => {
	const options = {
		method: 'GET',
		url: 'https://tasty.p.rapidapi.com/recipes/list',
		params: {
			from: '0',
			size: '20',
		},
		headers: headers,
	}

	try {
		const responseData: any[] = await pMap(
			filteredData,
			async (item: SearchKeys) => {
				const params = { q: item.display }
				const response = await axios.request<ResultsRecipes>({
					...options,
					params,
				})
				return response.data.results.slice(0, 15)
			},
			{ concurrency: 3 }
		)

		const combinedData = responseData.flat()

		return {
			count: 10,
			results: combinedData.slice((page - 1) * 6, page * 6),
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}
