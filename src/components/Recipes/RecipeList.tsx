import { FC, Fragment } from 'react'
import { RecipeType } from '../../types'
import { RecipeItem } from './RecipeItem'

interface RecipeListProps {
	recipes: RecipeType[]
}

const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
	return (
		<>
			{recipes.map((recipe: RecipeType, index) => (
				<Fragment key={index}>
					<RecipeItem recipe={recipe} />
				</Fragment>
			))}
		</>
	)
}

export { RecipeList }
