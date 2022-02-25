import { useState } from "react"

function BioEdit({user, setAllUsers, setUser, setWasClicked}){
    const [formData, setFormData] = useState({
        bio: user.bio
    })

    function handleChange(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setAllUsers(current => [...current])
            setFormData({
                bio: ""
            })
            setWasClicked(false)
            setUser(data)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label id="bio-edit">
                Bio: <input name="bio" type="text" value={formData.bio} onChange={handleChange} placeholder="Update you sh*t" required></input>
            </label>
            <button className="allbuttons" type="submit">Save</button>
        </form>
    )
}

export default BioEdit;
