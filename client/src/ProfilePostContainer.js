import ProfilePostCard from './ProfilePostCard'

function ProfilePostContainer({allPost, user}){

  const userPosts = allPost.filter((post) => post.user.id === user.id)
  const userPostsMapped = userPosts.map((post) => <ProfilePostCard post={post} />)

  return(
      <div>
          {userPostsMapped}
      </div>
  )
}

export default ProfilePostContainer;