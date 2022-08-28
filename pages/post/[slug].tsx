import Head from 'next/head'
import { useRouter } from 'next/router'
import Page from '../../components/Page/Page'
import PostItem from '../../components/Posts/PostItem'
import Signup from '../../components/Signup/Signup'
import ScrollToTop from '../../components/Widgets/ScrollToTop'
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

	return (
		<>
			<Head>
				<title>{`Jono Shields - ${post.title}`}</title>
			</Head>
			<Page>
				<PostItem title={post.title} content={post.content} date={post.date} tags={post.tags}/> 
				<Signup />
				<ScrollToTop />
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
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'content',
		'tags'
	])
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