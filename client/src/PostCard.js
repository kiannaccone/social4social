
function PostCard({post: {content, like, user_id, user}, currentUser}){

    return(
        <div id="postcard">
            <p>{content}</p>
            <p>{like} Likes</p>
            <p>{user.username}</p>
        </div>
    )
}

export default PostCard;