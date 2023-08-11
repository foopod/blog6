import PostType from '../../interface/Post'
import PostPreview from './PostPreview'
import useStyles from './Listing.styles'

interface Props {
	posts: PostType[]
}

const Listing = ({ posts }: Props) => {
	const classes = useStyles()

	return (
		<main className={classes.container}>
			{posts.map((post) => (
				<PostPreview key={post.slug} post={post} />
			))}
		</main>
	)
}

export default Listing
