import { useState } from 'react';
import { submitSignup } from '../redux/actionCreators';
import { submitLogin } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

//Will be storing our controlled form data locally
//This is what a hooks based form looks like 
function Auth (props) {

    const [signup, setSignup] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState(20001)
    const [password, setPassword] = useState("")
    const history = useHistory()
    
    // when we hit toggleSignup, it will take a look at signup, call setSignup, passing in the opposite value
    const toggleSignup = () => setSignup(!signup)

    const handleSubmit = (e) => {
        e.preventDefault()
        signup ? props.submitSignup({ username, email, zip_code: zipCode, password }) : props.submitLogin({username, password})
        //this is how we'll send users to posts page every time they log in
        history.push("/dog_parks")
    }

    return <> 
       {signup ? <h1>Don't have an account? Sign Up</h1> : <h1>Login</h1>}
       <form onSubmit={handleSubmit}>
        <label>
        Username:
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        {signup && <label>
          Email Address:
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>
        </label>
        Zip Code:
        <input type="number" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </label>}
        <label> 
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       <input type="submit" value="Submit" />
       </form>
       <h2>Or</h2><button onClick={toggleSignup}>{signup ? "Login" : "Signup"}</button>
     </>
} 

export default connect(null, { submitSignup, submitLogin })(Auth);