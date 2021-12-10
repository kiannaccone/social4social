import {Route, Switch} from 'react-router-dom';
import Profile from './Profile';
import Post from './Post';
import FollowContainer from './FollowContainer';
import NavBar from './NavBar';
import Home from './Home';
import Search from './Search';
import LandingPage from './LandingPage';
import { useEffect } from 'react';
import { useState } from 'react';


function Main({user, setUser }) {

  const [allUsers, setAllUsers] = useState([])
  const [allPost, setAllPost] = useState([])
  const [allFollows, setAllFollows] =useState([])
  const [search, setSearch] = useState("")
  

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

  const filterUsers = allUsers.filter(users => {
    return (
      users.username.toLowerCase().includes(search.toLowerCase())
    )
  })
  
  return (
    <div>
    <NavBar onLogout={setUser}/>
    <Switch>
      <Route exact path="/">
        <LandingPage setAllUsers={setAllUsers}/>
      </Route>
      <Route exact path="/home">
        <Home user={user} allPost={allPost} />
      </Route>
      <Route exact path="/profile">
        <Profile allUsers={allUsers} setUser={setUser} user={user} allPost={allPost} setAllUsers={setAllUsers}/>
      </Route>
      <Route exact path="/post">
        <Post allPost={allPost} currentUser={user} setUser={setUser} setAllPost = {setAllPost} />
      </Route>
      <Route exact path="/follows">
        <FollowContainer allFollows={allFollows} setAllFollows={setAllFollows} setUser={setUser} user={user}/>
      </Route>
      <Route exact path="/search">
        <Search search={search} setSearch={setSearch} allUsers = {filterUsers} user={user} allFollows = {allFollows} setAllFollows= {setAllFollows}/>
      </Route>
    </Switch>
    </div>
  )
}

export default Main;