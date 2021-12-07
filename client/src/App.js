import {Route, Switch} from 'react-router-dom';
import Profile from './Profile';
import Post from './Post';
import FollowContainer from './FollowContainer';
import Logout from './Logout';
import NavBar from './NavBar';
import Header from './Header';
import Search from './Search';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  
  // const [user, setUser] = useState([])
  const [allPost, setAllPost] = useState([])
  const [allFollows, setAllFollows] =useState([])
  
  // useEffect(()=> { 
  //   fetch('')
  //   .then((resp) => resp.json())
  //   .then((allUsers) => setUser(allUsers))
  // },[])

  useEffect(()=> {
    fetch('/posts')
    .then((resp)=> resp.json())
    .then((allPost) => setAllPost(allPost))
  })

  useEffect(() => {
    fetch('/follows')
    .then((resp)=> resp.json())
    .then((allFollows)=> setAllFollows(allFollows))
  })

  return (
   <div>
    <Header />
     <NavBar />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/post">
          <Post allPost={allPost}/>
        </Route>
        <Route path="/follows">
          <FollowContainer allFollows={allFollows}/>
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
