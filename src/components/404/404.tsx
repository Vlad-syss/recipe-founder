import { Undo2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import style from './404.module.scss'

const Page404 = () => {
	return (
		<div className={style.item}>
			<h1>
				Page Not Found | error <span>404</span>
			</h1>
			<Link to={'/'}>
				Go to main <Undo2 size={13} />
			</Link>
		</div>
	)
}

export { Page404 }
