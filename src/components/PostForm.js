import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { useState } from 'react';
import { connect } from 'react-redux';
import { submitPost } from '../redux/actionCreators';

 function PostForm({submitPost}) {

    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        const newPost = {image, caption}
        submitPost(newPost)
    }

    const onImageChange = (e) => { 
      setImage(e.target.files[0]);
    };

    return (
       
        <Box
          component="form" 
          onSubmit={onSubmit}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'white',
            boxShadow: ' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          noValidate
          autoComplete="off"
        >
           <h3>New Post</h3>
          <Input 
          type="file"
          accept="image/*"
          multiple={false}
          onChange={(e) => onImageChange(e)}
          />

          <Input
          type="text"
          margin="dense"
          placeholder="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)} 
          />
          <Button onClick={onSubmit}>Post</Button>
        </Box>
  
      )
    }

    const mapStateToProps = (state) => {
      return {post: state.user.posts}
    }
   
    export default connect(mapStateToProps, {submitPost})(PostForm);