import Head from 'next/head'
import { useRouter } from 'next/router'
import Page from '../../components/Page/Page'
import PostItem from '../../components/Posts/PostItem'
import PostType from '../../interface/Post'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/remarkToHtml'

type Props = {
	post: PostType
}

export default function Post({ post }: Props) {
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <></>
	}

	// useEffect(() => {
	// 	Prism.highlightAll()
	// }, [])

	return (
		<>
			<Head>
				<title>{`Jono Shields - ${post.title}`}</title>
			</Head>
			<Page>
				<PostItem post={post} />
			</Page>
		</>
	)
}

type Params = {
	params: {
		slug: string
	}
}

export async function getStaticProps({ params }: Params) {
	const posts = getAllPosts(['slug', 'date'])
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'content',
		'tags',
	])

	const index = posts.findIndex((p) => {
		return post.slug === p.slug
	})

	if (index > 0) {
		post.next = posts[index - 1].slug
	}

	if (index < posts.length - 1) {
		post.previous = posts[index + 1].slug
	}

	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	}
}
