import { Link } from 'react-router-dom'

function Nav(){
   return <nav id="nav-bar">
     <Link to="/home">Home  </Link>
     <Link to="/posts">Posts   </Link> 
     <Link to="/dog_parks">Find a Park   </Link> 
     <Link to="/profile">My Profile   </Link> 
    </nav>
}

export default Nav;