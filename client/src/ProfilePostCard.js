function ProfilePostCard({post: {content, like, user}}){

  return(
      <div id="profilepostcard">
          <p>{content}</p>
          <p>Posted By: {user.username}</p>
          <p>{like} Likes</p>
      </div>
  )
}

export default ProfilePostCard;