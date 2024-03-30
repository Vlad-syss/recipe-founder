import { Undo2 } from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const BackHome = memo(() => {
	return (
		<Link to={'/'}>
			Back Home <Undo2 size={16} />
		</Link>
	)
})

export { BackHome }
