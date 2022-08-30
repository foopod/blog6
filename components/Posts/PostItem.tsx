import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostType from '../../interface/Post'
import { toShortFormat } from '../../utils/utils'
import useStyles from './PostItem.styles'

interface Props {
	post: PostType
}

const PostItem = ({ post }: Props) => {
	const classes = useStyles()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<div className={classes.container}>
				<h2 className={classes.title}>{post.title}</h2>
				<span className={classes.date}>
					<time
						dateTime={new Date(post.date).toISOString()}
						itemProp="datePublished"
					>
						{toShortFormat(new Date(post.date))}
					</time>
				</span>
				{post.tags && ' - '}
				{post.tags?.map((tag: string) => (
					<span className={classes.tag} key={tag}>
						[{tag}]
					</span>
				))}
				<div dangerouslySetInnerHTML={{ __html: post.content }} />
			</div>
			<div className={classes.buttonContainer}>
				{post.previous && (
					<a
						href={`/post/${post.previous}`}
						onClick={scrollToTop}
						className={classes.link}
					>
						<FontAwesomeIcon icon={faAngleLeft} size={'2x'} /> Previous Post
					</a>
				)}
				<span></span>
				{post.next && (
					<a
						href={`/post/${post.next}`}
						onClick={scrollToTop}
						className={classes.link}
					>
						Next Post <FontAwesomeIcon icon={faAngleRight} size={'2x'} />
					</a>
				)}
			</div>
		</>
	)
}

export default PostItem
