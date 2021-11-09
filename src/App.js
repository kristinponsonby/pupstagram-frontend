import './style.css';
import DogParkIndex from './containers/DogParkIndex';
import DogParkShow from './components/DogParkShow';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className ="app-container">
   <Nav/>
   <h1 id="logo-font">Pupstagram</h1>
   <Switch>
     {/* Switch case will pick the first route that matches it's params. So the id page must go above the index page */}
   {/* Rule of routing: go from most specific to least specific */}
    {/* <Route path="/profile"><Profile/></Route>
    <Route path="/posts/:id"><PostsShow/></Route>
    <Route path="/posts"><PostsIndex/></Route> */}
    <Route path="/dog_parks/:id"><DogParkShow/></Route>
    <Route path="/dog_parks"><DogParkIndex/></Route>
   </Switch>
   </div>
   </>

  );
}

export default App;
