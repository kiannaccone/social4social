
function Header({user}){
    
    return(
    <div id="header_div">
        <h1>Social4SocialPeople</h1> 
        <h2>{user.username}</h2>
        <img src={user.image}/> 
    </div> 
    )
}

export default Header;