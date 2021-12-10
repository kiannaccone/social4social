import PostCard from "./PostCard";


function PostContainer({allPost, user, currentUser}){
    console.log(user.follow)
    let followersIds = user.followed.map((follow) => follow.id)

    // console.log(user.followed.forEach((follow) =>{ return follow.id})
    console.log(followersIds)

    if ((user.followed.length > 0)) { 
        const postData = allPost.filter((post) => post.user.id === user.followed[0].id)
        const postDataMapped = postData.map((post) => <PostCard key={post.id} post={post} user={currentUser}/>)
        return(
        <div>
            {postDataMapped}
        </div>
    )
    } else {
        return ( 
        <h1>
            Womp Womp 😢 You have no friends💔
            Go to Search to add some friends!
            <img className="gif" src="https://c.tenor.com/vZExFLWGuOsAAAAM/panda-cry.gif"
             alt="This will display an animated GIF"/>
        </h1>
    )}
    
   
    
}


export default PostContainer;

// 


//followed is an array
//we need the ID in each element of that array
// followersID = user.followed.map((follow) => follow.id)
// 
