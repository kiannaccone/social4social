
function Header({user}){
    
    return(
    <div id="header">
        <h1>Social4SocialPeople</h1> 
        <img src={user.image}/> 
        <h2>{user.username}</h2>
        </div>
    )
}

export default Header;