import { PostCard } from '../components/PostCard';
import  PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPosts, deletePost } from '../redux/actionCreators';


function PostIndex ({posts, getPosts, deletePost, user}){
    //create postcard component from each post in the posts array
   useEffect( getPosts, [getPosts] )
   

   return  <div className="posts">
        <PostForm />
        {posts.map(post => <PostCard {...post} deletePost={deletePost} key={post.id} imageUrl={post.image.url} user={user} />)}
    </div>
} 
//use mapstatetoprops to grab all of a users posts
//will be changing to ALL posts
//implement a useeffect to fetch them when post index loads?

const mapStateToProps = (state) => ({posts: state.posts, user: state.user})

export default connect(mapStateToProps, {getPosts, deletePost })(PostIndex);