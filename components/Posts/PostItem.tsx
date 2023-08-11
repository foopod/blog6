import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { darkGrey } from '../../constant/colors'
import PostType from '../../interface/Post'
import Signup from '../Signup/Signup'
import ScrollToTop from '../Widgets/ScrollToTop'
import useStyles from './PostItem.styles'

import Prism from 'prismjs'
import { useEffect } from 'react'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-python')
require('prismjs/components/prism-gdscript')

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

	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
		<>
			<div className={classes.container}>
				<h2 className={classes.title}>{post.title}</h2>
				{/* <span className={classes.date}>
					<time
						dateTime={new Date(post.date).toISOString()}
						itemProp="datePublished"
					>
						{toShortFormat(new Date(post.date))}
					</time>
				</span>
				{post.tags && ' - '} */}
				{post.tags?.map((tag: string) => (
					<span className={classes.tag} key={tag}>
						[{tag}]
					</span>
				))}
				<main
					className={
						post.tags?.indexOf('photography') === -1 ? classes.pixelated : ''
					}
					dangerouslySetInnerHTML={{ __html: post.content }}
				>
					</main>
				<Signup />
			</div>
			<div className={classes.buttonContainer}>
				{post.previous && (
					<div className={classes.left}>
						<span>
							<a
								href={`/post/${post.previous}`}
								onClick={scrollToTop}
								className={classes.link}
							>
								<FontAwesomeIcon
									icon={faAngleLeft}
									size={'2x'}
									color={darkGrey}
								/>{' '}
								Previous Post
							</a>
						</span>
					</div>
				)}
				<ScrollToTop />
				{post.next && (
					<div className={classes.right}>
						<span>
							<a
								href={`/post/${post.next}`}
								onClick={scrollToTop}
								className={classes.link}
							>
								Next Post{' '}
								<FontAwesomeIcon
									icon={faAngleRight}
									size={'2x'}
									color={darkGrey}
								/>
							</a>
						</span>
					</div>
				)}
			</div>
		</>
	)
}

export default PostItem
