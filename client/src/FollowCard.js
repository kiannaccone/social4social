
function FollowCard({follow: {follower_id, followed_id}}){

    return(
        <div>
            <p>{follower_id}</p>
            <p>{followed_id}</p>
        </div>
    )
}

export default FollowCard;