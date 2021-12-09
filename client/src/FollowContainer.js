import FollowCard from "./FollowCard";

function FollowContainer({allFollows, setAllFollows, setUser, user}){

    // console.log(allFollows)
    let follows = allFollows.map((follow) => <FollowCard key={follow.id} follow={follow} setAllFollows={setAllFollows} setUser={setUser} user={user}/>)
    
    return(
        <div>
            {follows}
        </div>
    )
}

export default FollowContainer;