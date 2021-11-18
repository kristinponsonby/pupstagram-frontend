import { useState } from 'react';
import { submitSignup } from '../redux/actionCreators';
import { submitLogin } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { logout } from '../redux/actionCreators'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

function getModalStyle() {
  const top = 50; 
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

//Will be storing our controlled form data locally
//This is what a hooks based form looks like 


function Auth (props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [openLogin, setLogin] = useState(false);
    const handleOpen = () => setOpen(true);

    const [signup, setSignup] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    
    // when we hit toggleSignup, it will take a look at signup, call setSignup, passing in the opposite value
    const toggleSignup = () => setSignup(!signup)

    const handleSubmit = (e) => {
        e.preventDefault()
        signup ? props.submitSignup({ username, email, zip_code: zipCode, password }) : props.submitLogin({username, password})
        //this is how we'll send users to posts page every time they log in
        history.push("/posts")
    }

    

    return <> 
  
       <Modal
       open={open}
       onClose={() => setOpen(false)}
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
       <Button onClick={handleSubmit}>Sign Up</Button>
       
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
       {/* <div className="login-container"> */}
         {/* { username ?  */}
       <Button onClick={logout}>Logout</Button> :
       <Button onClick={() => setLogin(true)}>Sign In</Button> 
       <Button onClick={() => setOpen(true)}>Sign Up</Button> 
      {/* </div> */}     
     </>
} 

export default connect(null, { submitSignup, submitLogin, logout })(Auth);