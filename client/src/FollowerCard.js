

function FollowerCard({follow, follow: {id, follower}}) {

  return(
    <div id="followcard">
        <h4>{follower.username}</h4>
        <img src={follower.image} alt={follower.username}/>
        <p>Bio: {follower.bio}</p>
    </div>
)}

export default FollowerCard;