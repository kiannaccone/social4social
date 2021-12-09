import {useState} from 'react'

function SignUp({onLogin}){

    const [createInfo, setCreateInfo] = useState({
        email: '',
        username: '',
        password: '',
        bio: '',
        image: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        const userSignup = {
            email: createInfo.email,
            username: createInfo.username,
            password: createInfo.password,
            bio: createInfo.bio,
            image: createInfo.image
        }
        fetch('/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(userSignup)
        })
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then((user) => onLogin(user));
                } else {
                    // handle errors
                    // resp.json().then((data) => setErrors(data.errors))
                }
            })
    }

    function handleChange(e){
        setCreateInfo((currentUserInfo) => ({
            ...currentUserInfo,
            [e.target.name]: e.target.value
        }))
    }
        
    return(
        <div>
            <p>Dont have an account? Create a free account</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Email</h4>
                    <input onChange={handleChange} type='text' name='email' value={createInfo.email}placeholder='email'/>
                </label>
                <label>
                    <h4>Username</h4>
                    <input onChange={handleChange} name='username' type='text' value={createInfo.username} placeholder='username'/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input onChange={handleChange} name='password' type='password' value={createInfo.password}    placeholder='password'/>
                </label>
                <label>
                    <h4>Bio</h4>
                    <input onChange={handleChange} name='bio' type='text' value={createInfo.bio}  placeholder='bio'/>
                </label>
                <label>
                    <h4>Image</h4>
                    <input onChange={handleChange} name='image' type='text' value={createInfo.image} placeholder='image'/>
                </label>
                <button>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;