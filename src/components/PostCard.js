import Avatar from '@material-ui/core/Avatar';
import React, { useState } from 'react';
import ReactDom from 'react-dom';

 

export function PostCard ({ username, caption, imageUrl, deletePost, id, user }) {

    const [ count, setCount ] = useState(0)


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
        <button id="liker" onClick={() => {setCount(count + 1 )}}> &hearts; {count}</button>
        <h4 className="post-text"><strong>{username}:</strong> {caption}</h4>
            <div className="display-delete">
                { user.username == username && <button onClick={() => {deletePost(id)} } > delete </button>  }
            </div>
    </div>
}