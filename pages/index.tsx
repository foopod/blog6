import { useState } from 'react'
import Page from '../components/Page/Page'
import Listing from '../components/Posts/Listing'
import Post from '../interface/Post'
import { getAllPosts } from '../lib/api'
import { tags } from '../constant/config'
import Filter from '../components/Filter/Filter'

type Props = {
  allPosts: Post[]
}

export default function Index( { allPosts } : Props) {
  const [posts, setPosts] = useState<Post[]>(allPosts)

  const updateFilter = (tag? : string) => {
    let posts = []
    if(tag){
      posts = allPosts.filter( post => {
        return post.tags?.indexOf(tag) >= 0
      })
    } else {
      posts = allPosts
    }
    setPosts(posts)
  }

  return (
    <Page>
      <Filter optionList={tags} onSelect={updateFilter} />
      <Listing posts={posts} />
    </Page>
  )
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'description',
    'image',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}