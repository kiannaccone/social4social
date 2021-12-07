
function FollowCard({follow: {follower, followed}}){
    
    return(
        <div id="followcard">
            <h4>{follower.username}</h4>
            <img src={follower.image}/>
            <p>{follower.bio}</p>
            <h4>{followed.username}</h4>
            <img src={follower.image}/>
        </div>
    )
}

export default FollowCard;