import {Route, Switch} from 'react-router-dom';
import Profile from './Profile';
import Post from './Post';
import FollowContainer from './FollowContainer';
import Logout from './Logout';
import NavBar from './NavBar';
import Header from './Header';
import Search from './Search';
// import './App.css';

function App() {
  return (
   <div>
    <Header />
     <NavBar />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/follows">
          <FollowContainer />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
   </div>
  )
}

export default App;
