import PostCard from "./PostCard";

function PostContainer({allPost}){

    const postData = allPost.map((post) => <PostCard key={post.id} post={post}/>)

    return(
        <div>
            {postData}
        </div>
    )
}

export default PostContainer;