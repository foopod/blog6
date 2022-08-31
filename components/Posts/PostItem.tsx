import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostType from '../../interface/Post'
import { toShortFormat } from '../../utils/utils'
import Signup from '../Signup/Signup'
import ScrollToTop from '../Widgets/ScrollToTop'
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
				<div
					className={
						post.tags.indexOf('photography') === -1 ? classes.pixelated : ''
					}
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
				<Signup />
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
				<ScrollToTop />
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
