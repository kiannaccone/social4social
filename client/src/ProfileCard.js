
function ProfileCard({user : {image, bio, username}}){

  return (
    <>
    <img src={image} alt={username} />
    <h2> {username} </h2>
    <p>{bio}</p>
    </>
  )
}

export default ProfileCard;