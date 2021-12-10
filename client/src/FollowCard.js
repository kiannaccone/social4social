
function FollowCard({setAllFollows, follow: {followed, id, setUser, user}}){

    // console.log(key)

    function handleUnfollow(){
        fetch(`/unfollow/${id}`, {
            method: 'DELETE',
        })
        .then(() => console.log('bye'))
        // .then((resp) => {
            setAllFollows((currentFollows) => {
                return currentFollows.filter((follow) => follow.id !== id)
            })
        
    }
    
    return(
        <div id="followcard">
            <h4>{followed.username}</h4>
            <img src={followed.image} alt={followed.username}/>
            <button onClick={handleUnfollow}>Unfollow</button>
        </div>
    )
}

export default FollowCard;