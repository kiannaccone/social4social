import { useState } from 'react'
import BioEdit from './BioEdit'

function ProfileCard({user, user : {image, bio, username}, setAllUsers, setUser}){
  const [wasClicked, setWasClicked] = useState(false)

  function handleClick() {
    setWasClicked(current => !current)
  }

  return (
    <>
    <img id='profilepic' src={image} alt={username} />
    <h2> {username} </h2>
    <p>Bio: {bio}</p>
    <div className="bio-edit">
                <button className="allbuttons" onClick={handleClick}>{wasClicked?"Hide Form":"Edit"}</button>
            </div>
    <div>
      {wasClicked ? <BioEdit user={user} setAllUsers={setAllUsers} setWasClicked={setWasClicked} setUser={setUser}/> : null }
    </div>
    </>
  )
}

export default ProfileCard;