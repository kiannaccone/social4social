import Login from "./Login"
import SignUp from "./SignUp"

function LandingPage({onLogin}){

    return(

        <div>
            <h4>Howdy!</h4>
            <Login onLogin = {onLogin}/>
            <SignUp onLogin = {onLogin}/>
        </div>
    )
}

export default LandingPage;