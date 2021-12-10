import FollowCard from "./FollowCard";
import FollowerCard from "./FollowerCard"
import { useState } from 'react';

function FollowContainer({allFollows, setAllFollows, setUser, user}){
    const [wasClicked, setWasClicked] = useState(false)
    function handleClick() {
        setWasClicked(current => !current)
    }
    
    let follows = allFollows.map((follow) => <FollowCard key={follow.id} follow={follow} setAllFollows={setAllFollows} setUser={setUser} user={user}/>)
    // let followers = allFollows.map((follow) => <FollowerCard key={follow.id} follow={follow}/>)
    return(
        <div>
            {wasClicked ?<button onClick={handleClick}>Following</button> : <button onClick={handleClick}>Following</button>}
            {wasClicked ? <div> {follows}</div> : <div>{follows}</div>}
        </div>
    )
}

export default FollowContainer;