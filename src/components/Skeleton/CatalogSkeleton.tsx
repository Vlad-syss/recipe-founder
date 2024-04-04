import ContentLoader from 'react-content-loader'

const CatalogSkeleton = (props: any) => {
	return (
		<ContentLoader
			viewBox='0 0 250 220'
			height={'100%'}
			width={'100%'}
			{...props}
		>
			<rect x='2' y='2' rx='5' ry='5' width='100%' height='100%' />
		</ContentLoader>
	)
}

CatalogSkeleton.metadata = {
	name: 'Nitish Sharma',
	github: 'Nitz2611',
	description: 'A loading skeleton for a shopping website',
	filename: 'ShoppingLoader',
}

export const SkeletonForCatalog = () => (
	<>
		<CatalogSkeleton />
		<CatalogSkeleton />
		<CatalogSkeleton />
		<CatalogSkeleton />
		<CatalogSkeleton />
		<CatalogSkeleton />
		<CatalogSkeleton />
		<CatalogSkeleton />
		<CatalogSkeleton />
	</>
)

export default CatalogSkeleton
