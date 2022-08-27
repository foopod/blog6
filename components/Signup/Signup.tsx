import useStyles from './Signup.styles'

const Signup = () => {
    const classes = useStyles()

    return (
        <form className={classes.container} method="POST" name="newsletter" netlify-honeypot="bot-field" data-netlify="true">
            <p className={classes.title}>Want to get notified next time I post?</p>
            <input className={classes.input} type='email' placeholder="Email" name="Email" required />
            <p style={{display:'none'}}>
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            <input className={classes.submit} type='submit' value="Sign up" />
        </form>
    )
}

export default Signup