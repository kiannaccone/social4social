
function FollowCard({follow: {follower, followed}}){

    return(
        <div>
            <p>{follower.username}</p>
            <p>{followed.username}</p>
        </div>
    )
}

export default FollowCard;