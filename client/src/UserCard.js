
function UserCard({allFollows, setAllFollows, loggedInUser, user : {id, image, username,}}){

    console.log(loggedInUser)


    function handleFollow () {
        const newFollow = {
            follower_id: loggedInUser.id,
            followed_id: loggedInUser.id
        }
        fetch('/follows',{
            method: 'POST',
            headers: {
            "Content-Type" : "application/json",
            },
            body: JSON.stringify(newFollow)
        })
            // .then((resp.json().then((newFollow) => setAllFollows(newFollow))
            // .then((newFollow) => {
            // setAllFollows((allFollows) => [newFollow,...allFollows])
        // })
    }
    // .then((resp) => resp.json())
    // .then(newFollow) => {
    //     setAllFollows(newFollow)
    // }


        // .then(resp => resp.json())
        //         .then(data => {
        //             setAllFollows(current => [...current])
        //             setAllFollows({
        //                 content: ""
        //             })

        //         })

        // .then((newFollow) => resp.json())
        // .then((newFollow) => {
        //     setAllFollows((newFollow) => [newFollow,...allFollows])
        // })

        //   resp.json().then((newFollow) => setAllFollows(newFollow));
        //    .then((newFollow) => {
        //     setAllFollows((allFollows) => [newFollow,...allFollows])

        // console.log(handleFollow)

    

    return(
        <div>
            <img src= {image} alt = {username} />
            <h4>{username}</h4>
            <button onClick={()=> handleFollow()}>{loggedInUser ? "Follow" : "Following"}</button>
        </div>
    )
}

export default UserCard;