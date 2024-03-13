import { FC } from 'react'
import { RecipeType } from '../../types'
import { Recipe } from './Recipe'

interface RecipeItemProps {
	recipe: RecipeType
}

const RecipeItem: FC<RecipeItemProps> = ({ recipe }) => {
	return <Recipe key={recipe.id} {...recipe} />
}

export { RecipeItem }
