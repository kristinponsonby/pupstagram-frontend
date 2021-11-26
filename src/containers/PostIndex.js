import { PostCard } from '../components/PostCard';
import  PostForm from '../components/PostForm';
import { connect } from 'react-redux';

function PostIndex ({posts}){
    //create postcard component from each post in the posts array
   return  <div className="posts">
        {posts.map(post => <PostCard {...post} key={post.id} />)}
        <PostForm />
    </div>
} 
//use mapstatetoprops to grab all posts

const mapStateToProps = (state) => ({posts: state.user.posts})

export default connect(mapStateToProps)(PostIndex);