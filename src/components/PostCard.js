import Avatar from '@material-ui/core/Avatar';


export function PostCard ({ username, caption, imageUrl}) {

    return <div className="post-card">
        <div className="post-header">
            <Avatar
            className="post-avatar"
            alt="username"
            src="/static/images/avatar/1.jpg"
            />
        <h3>{username}</h3>
        </div>
        <img className="post-image" src={imageUrl} alt="cute dog"></img>
        <h4 className="post-text"><strong>{username}:</strong> {caption}</h4>
    </div>
}