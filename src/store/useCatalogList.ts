import { create } from 'zustand'

export interface Lists {
	keywords: string[]
	credits: string[]
}

type CatalogListStore = {
	selectedItems: {
		keywords: string[]
		credits: string[]
	}
	toggleItem: (item: string, type: 'keywords' | 'credits') => void
}
const useCatalogList = create<CatalogListStore>(set => ({
	selectedItems: {
		keywords: [],
		credits: [],
	},
	toggleItem: (item: string, type: 'keywords' | 'credits') => set(state => {
		const updatedItems = { ...state.selectedItems };

		if (type === 'keywords') {
			const index = updatedItems.keywords.indexOf(item);
			if (index === -1) {
				updatedItems.keywords.push(item);
			} else {
				updatedItems.keywords.splice(index, 1);
			}
		} else if (type === 'credits') {
			const index = updatedItems.credits.indexOf(item);
			if (index === -1) {
				updatedItems.credits.push(item);
			} else {
				updatedItems.credits.splice(index, 1);
			}
		}

		return { selectedItems: updatedItems };
	}),
}))

export { useCatalogList }

