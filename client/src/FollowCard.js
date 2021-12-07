
function FollowCard({follow: {follower, followed}}){
    
    return(
        <div id="followcard">
            <h4>{follower.username}</h4>
            <img src={follower.image} alt={follower.username}/>
            <p>{follower.bio}</p>
            <h4>{followed.username}</h4>
            <img src={followed.image} alt={followed.username}/>
        </div>
    )
}

export default FollowCard;