import style from './recipes.module.scss'

const Recipe = () => {
	return (
		<article className={style.item}>
			<div className={style.recipe_img} />
			<div className={style.recipe_info}>
				<h4>Recipe Title</h4>
				<p>Recipe description...</p>
				<a href='/'>See The Recipe</a>
			</div>
		</article>
	)
}

export { Recipe }
