import { useState } from 'react';


function PostCard({post: {id, content, like, user_id, user}, currentUser}){

    const [likeCount, setLikeCount] = useState(like);

    const incrementLike = () => setLikeCount(like + 1);
    
   
    function handleLikes(e) {
        e.preventDefault()
        fetch(`/posts/${id}/like`, {
            method: "PATCH"
        })
        .then((resp) => resp.json())
        .then(data => {
            incrementLike((current) => [...current, 
            data])
        })
    }


    return(
        <div className="allcards">
            <p>{content}</p>
            <button onClick = {handleLikes}>{likeCount} ❤️ Likes</button>
            <p>Posted By: {user.username}</p>
        </div>
    )
}

export default PostCard;