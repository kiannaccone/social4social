import PostContainer from "./PostContainer";

function Post({allPost}){

    return(
        <div>
            <PostContainer allPost={allPost}/> 
        </div>
    )
}

export default Post;