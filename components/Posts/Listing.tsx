import PostType from '../../interface/Post'
import PostPreview from './PostPreview'

interface Props{
    posts : PostType[]
}

const Listing  = ({posts}: Props) => {
	return <div>
		{ posts.map((post) => (
			<PostPreview key={post.slug} post={post}/>
		))}
	</div>
}

export default Listing