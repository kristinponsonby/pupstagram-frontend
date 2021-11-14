import { PostCard } from '../components/PostCard';

function PostIndex (props) {

    return <div className="posts">
        <PostCard username="junabear" caption="Had a great day at the park!" imageUrl="https://images.dog.ceo/breeds/entlebucher/n02108000_2802.jpg"/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
} 

export default PostIndex;