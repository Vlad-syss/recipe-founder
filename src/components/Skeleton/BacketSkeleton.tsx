import ContentLoader from 'react-content-loader'

const BacketSkeleton = (props: any) => {
	return (
		<ContentLoader
			width={'100%'}
			height={'75px'}
			backgroundColor='#FFCC80' // Lighter orange background color
			foregroundColor='#FFE0B2' // Even lighter color for skeleton
			{...props}
		>
			{/* Rounded rectangle for image */}
			<rect x='0.5%' y='0.5%' width='20%' height='100%' rx='5' />

			{/* Rounded rectangles for text lines */}
			<rect x='25%' y='5%' width='45%' height='22%' rx='5' />
			<rect x='25%' y='50%' width='70%' height='15%' rx='2.5' />
			<rect x='25%' y='74%' width='70%' height='15%' rx='2.5' />
		</ContentLoader>
	)
}

BacketSkeleton.metadata = {
	name: 'Nitish Sharma',
	github: 'Nitz2611',
	description: 'A loading skeleton for a shopping website',
	filename: 'ShoppingLoader',
}

export default BacketSkeleton
