import ContentLoader from 'react-content-loader'

const ProductSkeleton = (props: any) => {
	return (
		<ContentLoader
			width={'100%'}
			height={420}
			backgroundColor='#f5f5f5'
			foregroundColor='#dbdbdb'
			{...props}
		>
			<rect x='0.5%' y='0.5%' width='.5%' height='100%' />
			<rect x='0.5%' y='98.5%' width='100%' height='1.5%' />
			<rect x='99.5%' y='0.5%' width='0.5%' height='100%' />
			<rect x='0.5%' y='0.5%' width='100%' height='1.5%' />
			<rect x='3%' y='6%' rx='1%' ry='1%' width='40%' height='68%' />
			<rect x='3%' y='80%' width='40%' height='4%' />
			<rect x='3%' y='85%' width='40%' height='4%' />

			<rect x='45%' y='28%' rx='.2%' ry='.2%' width='51%' height='2.3%' />
			<rect x='45%' y='35%' rx='.2%' ry='.2%' width='30%' height='4%' />
			<rect x='45%' y='44%' rx='.2%' ry='.2%' width='51%' height='2.3%' />
			<rect x='45%' y='52%' rx='.2%' ry='.2%' width='30%' height='4%' />
			<rect x='45%' y='61%' rx='.2%' ry='.2%' width='51%' height='2.3%' />
			<rect x='45%' y='72%' rx='1%' ry='1%' width='12%' height='12%' />
			<rect x='58%' y='72%' rx='1%' ry='1%' width='12%' height='12%' />
			<rect x='71%' y='72%' rx='1%' ry='1%' width='12%' height='12%' />
			<rect x='45%' y='8%' rx='.2%' ry='.2%' width='37%' height='11%' />
		</ContentLoader>
	)
}

ProductSkeleton.metadata = {
	name: 'Nitish sharma',
	github: 'Nitz2611',
	description: 'A loading skeleton for shopping website',
	filename: 'ShoppingLoader',
}

export default ProductSkeleton
