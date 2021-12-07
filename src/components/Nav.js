import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'
import Button from '@material-ui/core/Button';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
}; 

function Nav({logout, id}){
  console.log(id)
  const loggedInRender = () => <nav className="nav-bar">
     <NavLink id="navItem" to="/posts" style={linkStyle}>All Posts  </NavLink>
     <NavLink id="navItem" to={`/users/${id}`} style={linkStyle}>My Profile   </NavLink> 
     <NavLink id="navItem" to="/dog_parks" style={linkStyle}>Find a Park   </NavLink> 
     <Button id="logInButton" onClick={logout} className="logoutButton">Logout</Button>
     </nav>

const loggedOutRender = () => <nav>Hello, user! Sign in or sign up!</nav>


return id ? loggedInRender() : loggedOutRender() 
}

const mapStateToProps = (state) => ({id: state.user.id})

export default connect(mapStateToProps, {logout})(Nav);