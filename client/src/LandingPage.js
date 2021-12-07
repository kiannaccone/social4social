import Login from "./Login"
import SignUp from "./SignUp"

function LandingPage({setAllUsers}){

    return(

        <div>
            <h4>Howdy!</h4>
            <Login />
            <SignUp setAllUsers={setAllUsers}/>
        </div>
    )
}

export default LandingPage;