
function FollowCard({setAllFollows, wasClicked, follow: {followed, id, follower}}){

    // console.log(key)

    function handleUnfollow(){
        fetch(`/unfollow/${id}`, {
            method: 'DELETE',
        })
        .then(() => console.log('bye'))
            setAllFollows((currentFollows) => {
                return currentFollows.filter((follow) => follow.id !== id)
            })
        
    }
    return(
        <div id="followcard">
            <h4>{followed.username}</h4>
            <img src={followed.image} alt={followed.username}/>
            <p>Bio: {followed.bio}</p>
            <button onClick={handleUnfollow}>Unfollow</button>
        </div>
    )

}

export default FollowCard;