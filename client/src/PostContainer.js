import PostCard from "./PostCard";


function PostContainer({allPost, user, currentUser}){

    if ((user.followed.length > 0)) { 

        let followersIds = user.followed.map((follow) => follow.id)

        const postsFiltered = allPost.filter((post) => followersIds.includes(post.user.id))
        
        const followingPosts = postsFiltered.map((post) => <PostCard key={post.id} post={post} user={currentUser}/>)

        return(
        <div>
            {followingPosts}
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


