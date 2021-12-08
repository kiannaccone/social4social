import PostContainer from "./PostContainer";

function Post({allPost, currentUser}){
    // console.log({currentUser})
    

    return(
        <div>
            <PostContainer allPost={allPost} currentUser={currentUser}/> 
        </div>
    )
}

export default Post;