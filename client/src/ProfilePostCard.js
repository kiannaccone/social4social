function ProfilePostCard({post: {content, like, user}}){

  return(
      <div id="profilepostcard">
          <p>{content}</p>
          <p>{like} Likes</p>
          <p>Posted By: {user.username}</p>
      </div>
  )
}

export default ProfilePostCard;