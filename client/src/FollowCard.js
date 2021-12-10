
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
        <div className="allcards">
            <h4>{followed.username}</h4>
            <img src={followed.image} alt={followed.username}/>
            <p>Bio: {followed.bio}</p>
        <div>
            <button onClick={handleUnfollow}>Unfollow</button>
        </div>
        </div>
    )

}

export default FollowCard;