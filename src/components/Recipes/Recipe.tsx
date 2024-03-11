import { Heart } from 'lucide-react'
import { useState } from 'react'
import style from './recipes.module.scss'

const Recipe = () => {
	const [liked, setLiked] = useState(false)
	return (
		<article className={style.item}>
			<div className={style.recipe_img} />
			<div className={style.recipe_info}>
				<h4>Recipe Title</h4>
				<p>Recipe description...</p>
				<a href='/'>See The Recipe</a>
			</div>
			<button onClick={() => setLiked(!liked)}>
				<Heart size={20} fill={liked ? '#fff' : 'transparent'} />
			</button>
		</article>
	)
}

export { Recipe }
