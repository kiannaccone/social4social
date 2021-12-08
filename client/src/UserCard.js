
function UserCard({followUser, user : {image, username}}){

    console.log(followUser)

    function handleFollow () {
        
    }

    

    return(
        <div>
            <img src= {image} alt = {username} />
            <h4>{username}</h4>
            <button onClick={()=> handleFollow()}>{followUser ? "Follow" : "Following"}</button>
        </div>
    )
}

export default UserCard;