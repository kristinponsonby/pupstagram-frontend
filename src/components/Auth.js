import { useState } from 'react';

//Will be storing our controlled form data locally
//This is what a hooks based form looks like
function Auth (props) {

    const [signup, setSignup] = useState(false)

    // when we hit toggleSignup, it will take a look at signup, call setSignup, passing in the opposite value
    const toggleSignup = () => setSignup(!signup)

    return <> 
   {signup ? <h1>Sign Up</h1> : <h1>Login</h1>}
   <button onClick={toggleSignup}>{signup ? "Login" : "Signup"}</button>
     </>
} 

export default Auth;