
function ProfileCard({user : {image, bio, username}}){


//Comment line 12 back in when ready to style. Images are too big!
  return (
    <>
    <img src={image} alt={username} />
    <h2> {username} </h2>
    {/* <button>Follow</button> */} 
    <p>{bio}</p>
    <button >Edit Bio</button>
    </>
  )
}

export default ProfileCard;