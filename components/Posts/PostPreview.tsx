import PostType from '../../interface/Post'
import useStyles from './PostPreview.styles'

interface Props {
	post: PostType
}

const PostPreview = ({ post }: Props) => {
	const classes = useStyles()

	return (
		<a href={`/post/${post.slug}`} className={classes.link}>
			<div className={classes.container}>
				{post.image && (
					<img alt="" className={classes.image} src={post.image} />
				)}
				<div className={classes.textContainer}>
					<h2 className={classes.title}>{post.title}</h2>
					{/* <span className={classes.date}>
						<time
							dateTime={new Date(post.date).toISOString()}
							itemProp="datePublished"
						>
							{toShortFormat(new Date(post.date))}
						</time>
					</span> */}
					{/* {post.tags && ' - '} */}
					{post.tags?.map((tag: string) => (
						<span className={classes.tag} key={tag}>
							[{tag}]
						</span>
					))}
					<p>{post.description}</p>
				</div>
				<span className={classes.readTime}>{post.readTime}</span>
			</div>
		</a>
	)
}

export default PostPreview
