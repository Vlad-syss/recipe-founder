import ContentLoader from 'react-content-loader'

const RecipeSkeleton = (props: any) => (
	<ContentLoader viewBox='0 0 340 400' height={400} width={340} {...props}>
		<rect x='10' y='210' rx='5' ry='5' width='230' height='30' />
		<rect x='10' y='250' rx='5' ry='5' width='200' height='20' />
		<rect x='10' y='275' rx='5' ry='5' width='200' height='20' />
		<rect x='10' y='310' rx='5' ry='5' width='330' height='50' />
		<rect x='0' y='0' rx='5' ry='5' width='340' height='200' />
	</ContentLoader>
)

RecipeSkeleton.metadata = {
	name: 'RoyalBhati',
	github: 'royalbhati',
	description: 'Dev.to card',
	filename: 'DevtoCard',
}

export const SkeletonForRecipes = () => (
	<>
		<RecipeSkeleton />
		<RecipeSkeleton />
		<RecipeSkeleton />
	</>
)

export default RecipeSkeleton
