import { toShortFormat } from '../../utils/utils'
import useStyles from './PostItem.styles'

interface Props{
    title:  string
    date: string
    tags: string[]
    content: string
}

const PostItem = ({title, date, tags, content}: Props) => {
	const classes = useStyles()
    
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>{title}</h2>
			<span className={classes.date}><time dateTime={ new Date(date).toISOString() } itemProp="datePublished">{ toShortFormat(new Date(date)) }</time></span>
			{tags && ' - '}
			{tags?.map( (tag : string) => (
				<span className={classes.tag} key={tag}>[{tag}]</span>
			))}
			<div dangerouslySetInnerHTML={{ __html: content }}/>
		</div>
	)
}

export default PostItem