import UserCard from "./UserCard";

function UserContainer({allUsers, loggedInUser, allFollows, setAllFollows}){

    const userCards = allUsers.map((user) => <UserCard key={user.id} loggedInUser={loggedInUser} user={user} allFollows= {allFollows} setAllFollows = {setAllFollows}/>);

    return(
        <div>
            {userCards}
        </div>
    )
}

export default UserContainer;