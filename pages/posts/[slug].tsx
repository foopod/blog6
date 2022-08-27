import { useRouter } from "next/router"
import Page from "../../components/Page/Page"
import Signup from "../../components/Signup/Signup"
import PostType from "../../interface/Post"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import markdownToHtml from "../../lib/remarkToHtml"
import { toShortFormat } from "../../utils/utils"
import useStyles from './[slug].styles'

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  const classes = useStyles()
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
      return <></>
    }

  return (
      <Page>
        <div className={classes.container}>
          <h2 className={classes.title}>{post.title}</h2>
          <span className={classes.date}><time dateTime={ new Date(post.date).toISOString() } itemProp="datePublished">{ toShortFormat(new Date(post.date)) }</time></span>
          {post.tags && ' - '}
          {post.tags?.map( (tag : string) => (
              <span className={classes.tag}>[{tag}]</span>
          ))}
          <div dangerouslySetInnerHTML={{ __html: post.content }}/>
          <Signup />
        </div>
      </Page>
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