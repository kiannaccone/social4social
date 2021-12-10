
function PostCard({post: {content, like, user_id, user}, currentUser}){

    return(
        <div className="allcards">
            <p>{content}</p>
            <p>{like} Likes</p>
            <p>Posted By: {user.username}</p>
        </div>
    )
}

export default PostCard;