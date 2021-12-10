

function UserCard({allFollows, setAllFollows, loggedInUser, user : {id, image, username,}}){

    let potato = allFollows.filter((follow) => follow.followed.id === id)

    function handleFollow () {
        const newFollow = {
            follower_id: loggedInUser.id,
            followed_id: id
        }
        fetch('/follows',{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newFollow)
        })
            .then(resp => resp.json())
            .then(data => {
                setAllFollows((current) => [...current, data])
        })
    }

    return(
        <div className="allcards">
            <img src= {image} alt = {username} />
            <h4>{username}</h4>
            <div>
            <button className="allbuttons" onClick={handleFollow}>{potato.length === 0 ? "Follow" : "Following"}</button>
            </div>
        </div>
    )
}

export default UserCard;