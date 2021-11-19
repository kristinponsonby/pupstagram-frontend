import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'
import Button from '@material-ui/core/Button';

 
function Nav({logout, username}){
  
  const loggedInRender = () => <nav id="nav-bar">
     <Link to="/posts">All Posts   </Link> 
     <Link to="/profile">My Profile   </Link> 
     <Link to="/dog_parks">Find a Park   </Link> 
     <Button onClick={logout}>Logout</Button>
     </nav>

const loggedOutRender = () => <nav>Hello, user! Sign in or sign up!</nav>

return username ? loggedInRender() : loggedOutRender()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav);