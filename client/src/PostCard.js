
function PostCard({post: {content, like, user_id}}){

    return(
        <div id="postcard">
            <p>{content}</p>
            <p>{like}</p>
            <p>{user_id}</p>
        </div>
    )
}

export default PostCard;