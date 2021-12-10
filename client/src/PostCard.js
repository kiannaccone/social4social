
function PostCard({post: {content, like, user_id, user}}){

    return(
        <div id="postcard">
            <p>{content}</p>
            <p>{like} Likes</p>
            <p>Posted By: {user.username}</p>
        </div>
    )
}

export default PostCard;