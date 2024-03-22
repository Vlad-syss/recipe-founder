export type RecipeType = {
	approved_at: number
	aspect_ratio: string
	beauty_url: string | null
	brand: string | null
	brand_id: string | null
	country: string
	created_at: number
	description: string
	draft_status: string
	facebook_posts: any[]
	id: number
	is_shoppable: boolean
	keywords: string | null
	language: string
	name: string
	promotion: string
	show: Show[]
	slug: string
	thumbnail_alt_text: string
	thumbnail_url: string
	video_id: number
	video_url: string
	compilations: Compilation[]
	credits: Credits[]
	prep_time_minutes: string
	instructions: Instructions[]
	user_ratings: UserRatings
	nutrition: Nutrition
}

export type Compilation = {
	approved_at: number
	aspect_ratio: string
	beauty_url: string | null
	buzz_id: string | null
	canonical_id: string
	country: string
	created_at: number
	description: string
	draft_status: string
	facebook_posts: any[]
	id: number
	brand: string | null
	brand_id: string | null
	is_shoppable: boolean
	keywords: string | null
	language: string
	name: string
	promotion: string
	show: Show[]
	slug: string
	thumbnail_alt_text: string
	thumbnail_url: string
	video_id: number
	video_url: string
	prep_time_minutes: string
	user_ratings: UserRatings
	credits: Credits[]
	nutrition: Nutrition
	instructions: Instructions[]
	compilations: Compilation[]
}

export type Show = {
	id: number
	name: string
}

export type InfinityRecipe = {
	pageParams: number[]
	pages: { count: number; results: RecipeType[] }[]
}

export type Credits = {
	name: string
	type: string
}

export type Instructions = {
	appliance: null | string | string[]
	display_text: string
	end_time: number
	id: number
	position: number
	start_time: number
	temperature: null | string | number
}

export type Nutrition = {
	calories: number
	carbohydrates: number
	fat: number
	fiber: number
	protein: number
	sugar: number
	updated_at: string
}

export type UserRatings = {
	count_negative: number
	count_positive: number
	score: number
}

export type SearchKeys = {
	display: string
	search_value: string
	type: string
}

export type ResultsRecipes = {
	count: number
	results: RecipeType[]
}
