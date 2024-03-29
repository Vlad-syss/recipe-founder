import { useQuery } from '@tanstack/react-query'
import { Undo2 } from 'lucide-react'
import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecipeById } from '../../api'
import { ProductItem } from '../../components/Product/ProductItem'
import { RecipeItem } from '../../components/Recipes/RecipeItem'
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton'
import { SkeletonForRecipes } from '../../components/Skeleton/RecipeSkeleton'
import { Compilation } from '../../types'
import style from './recipe-card.module.scss'

const RecipeCard = () => {
	const { id } = useParams()
	if (!id) return

	const { data, isFetching } = useQuery({
		queryKey: ['recipe'],
		queryFn: () => getRecipeById(id),
	})

	return (
		<>
			<div className={style.wrapper}>
				<Link to={'/'}>
					Back Home <Undo2 size={16} />
				</Link>
				<div className={style.item}>
					{isFetching ? (
						<ProductSkeleton />
					) : !!data ? (
						<ProductItem data={data} />
					) : (
						<p>Something go wrong...</p>
					)}
				</div>
				<div className={style.more}>
					<h2>Same recipes:</h2>
					<div className={style.similiar}>
						{isFetching ? (
							<SkeletonForRecipes />
						) : data?.compilations.length !== 0 ? (
							data?.compilations.map((item: Compilation) => (
								<Fragment key={item.id}>
									<RecipeItem recipe={item} />
								</Fragment>
							))
						) : (
							<p>there are no same products!</p>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export { RecipeCard }
