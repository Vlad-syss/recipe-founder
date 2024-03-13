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
}

export type Show = {
	id: number
	name: string
}

export type InfinityRecipe = {
	pageParams: number[]
	pages: { count: number; results: RecipeType[] }[]
}
