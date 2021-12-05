import './style.css';
import Profile  from './components/Profile';
import DogParkIndex from './containers/DogParkIndex';
import DogParkShow from './components/DogParkShow';
import Auth from './components/Auth';
import PostIndex from './containers/PostIndex';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin} from './redux/actionCreators';
import { useHistory } from 'react-router-dom'


 
function App({user, autoLogin}) {
  const history = useHistory()

//on page load, check to see if there is a local storage token, and if so, run autologin
  useEffect(() => localStorage.token && autoLogin(),[autoLogin])


  return (
    <>
    <div className="app-header">
      <h1 id="logo-font">Pupstagram</h1>
      <Nav/>
      </div>
      <div className="body">
        { user.username ?
          <Switch>
            {/* Switch case will pick the first route that matches it's params. So the id page must go above the index page */}
            {/* Rule of routing: go from most specific to least specific */}
             {/* <Route path="/profile"><Profile/></Route> */}
            <Route path="/dog_parks/:id"><DogParkShow/></Route>
            <Route path="/dog_parks"><DogParkIndex/></Route>
            <Route path="/posts"><PostIndex/></Route>
            <Route path="/users/:id"><Profile/></Route>
            <Route exact path='/'><PostIndex/></Route>
          </Switch> :
            <Auth/>
          }
            </div>
          
   </>
     ); 
   }


//passing down our user object as props
const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps, {autoLogin})(App);
