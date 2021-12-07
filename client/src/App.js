import {Route, Switch} from 'react-router-dom';
import Profile from './Profile';
import Post from './Post';
import FollowContainer from './FollowContainer';
import Logout from './Logout';
import NavBar from './NavBar';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import LandingPage from './LandingPage';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [allPost, setAllPost] = useState([])
  const [allFollows, setAllFollows] =useState([])
  
  useEffect(()=> { 
    fetch('/users')
    .then((resp) => resp.json())
    .then((allUsers) => setAllUsers(allUsers))
  }, [])

  useEffect(()=> {
    fetch('/posts')
    .then((resp)=> resp.json())
    .then((allPost) => setAllPost(allPost))
  },[])

  useEffect(() => {
    fetch('/follows')
    .then((resp)=> resp.json())
    .then((allFollows)=> setAllFollows(allFollows))
  },[])


  return (
    <div>
    <Header/>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/profile">
        <Profile allUsers = {allUsers} />
      </Route>
      <Route exact path="/post">
        <Post allPost={allPost}/>
      </Route>
      <Route exact path="/follows">
        <FollowContainer allFollows={allFollows}/>
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
    </Switch>
    </div>
  )
}

export default App;
