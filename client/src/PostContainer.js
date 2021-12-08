import PostCard from "./PostCard";

function PostContainer({allPost, currentUser}){
    // console.log({currentUser})

    const postData = allPost.map((post) => <PostCard key={post.id} post={post} currentUser={currentUser}/>)

    return(
        <div>
            {postData}
        </div>
    )
}

export default PostContainer;