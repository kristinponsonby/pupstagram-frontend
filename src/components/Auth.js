import { useState } from 'react';
import { submitSignup } from '../redux/actionCreators';
import { submitLogin } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Auth (props) {
    const classes = useStyles();
    const [openSignup, setOpen] = useState(false);
    const [openLogin, setLogin] = useState(false);

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitLogin({username, password}) && setLogin(false)
        //this is how we'll send users to posts page every time they log in
        history.push("/posts")
    }

    const handleSignUp = (e) => {
      e.preventDefault()
      props.submitSignup({ username, email, zip_code: zipCode, password }) && setOpen(false)
    }



    return <> 
      
       <Modal
       open={openSignup}
       onClose={() => setOpen(false)}
       >
       <div style={style} className={classes.paper}>
           <center>
         <h2 id="form-header">Pupstagram</h2> 
       <form className="app-signup" onSubmit={handleSignUp}> 
      
        <Input
         type="text"
         placeholder="username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
       
        <Input 
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        />
        <Input
        type="number"
        placeholder="zipCode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        />
       <Input
       type="password"
       placeholder="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
    
       <Button onClick={handleSignUp}>Sign Up</Button> 
        
       </form>  
       </center>
       </div> 


  
  
       </Modal>
  
      {/* Log in Modal */}
       <Modal
       open={openLogin}
       onClose={() => setLogin(false)}
       >
         <div style={style} className={classes.paper}>
           <center>
         <h2 id="form-header">Pupstagram</h2>
       <form className="app-signup" onSubmit={handleSubmit}>
    
        <Input
         type="text"
         placeholder="username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
       
        <Input 
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        />

        <Input
       type="password"
       placeholder="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
       <Button onClick={handleSubmit}>Sign In</Button>
       
       </form>
       </center>
       </div>
       </Modal>
       <div className="login-container">
       <Button onClick={() => setLogin(true)}>Log in</Button> 
       <Button onClick={() => setOpen(true)}>Sign up</Button> 
       <h1>Welcome to Pupstagram!</h1>
       <p> A social media platform for doggos</p>
      </div>     
     </>
} 

export default connect(null, { submitSignup, submitLogin })(Auth);