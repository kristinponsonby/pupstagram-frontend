import { Link } from 'react-router-dom'

function Nav(){
   return <nav id="nav-bar">
     <Link to="/posts">All Posts   </Link> 
     <Link to="/profile">My Profile   </Link> 
     <Link to="/dog_parks">Find a Park   </Link> 
    </nav>
}

export default Nav;