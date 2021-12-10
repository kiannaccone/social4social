import { useState } from 'react'
import BioEdit from './BioEdit'

function ProfileCard({user, user : {image, bio, username}, setAllUsers, allUsers, setUser}){
  const [wasClicked, setWasClicked] = useState(false)

  function handleClick() {
    setWasClicked(current => !current)
}

//Comment line 12 back in when ready to style. Images are too big!
  return (
    <>
    <img id='profilepic' src={image} alt={username} />
    <h2> {username} </h2>
    <p>Bio: {bio}</p>
    <div className="bio-edit">
                <button className="allbuttons" onClick={handleClick}>{wasClicked?"Hide Form":"Edit"}</button>
            </div>
    <div>
      {wasClicked ? <BioEdit user={user} setAllUsers={setAllUsers} allUsers={allUsers} setWasClicked={setWasClicked} setUser={setUser}/> : null }
    </div>
    </>
  )
}

export default ProfileCard;