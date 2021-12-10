import PostCard from "./PostCard";


function PostContainer({allPost, user, currentUser}){

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
        </h1>
    )}
    
    
    
}


export default PostContainer;