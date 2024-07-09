import { useContext, useState } from 'react';



import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { DataContext } from '../../context/DataContext';

import { SignupAPI, LoginAPI } from '../../service/api';





const MainBox = styled(Box)`
  display: flex;
  height: 75vh;
  width: 45vw;
  `




const RightBox = styled(Box)`
display: flex;
flex-direction: column;
padding: 30px;
`;


const LeftBox = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)  no-repeat center 85%;
height: 90.5%;
width: 35%;
padding: 25px 25px;`;

const Errors = styled(Typography)`
color: red;
font-size: 10px;
margin-top: 10
line-height: 0;
font-weight: 600;`;

const Signupdetail ={
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    username: '',
    password: '',
};

const LoginDetails = {
    username: '',
    password: ''
};


const LoginDailog = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
        setAccount(true);
        setError(false);
    };



    const [account, setAccount] = useState(true);
    const {setName}=useContext(DataContext);

    const [login, setLogin] = useState(LoginDetails);

    const [signup, setSignup]= useState(Signupdetail);
    const [error, setError] = useState(false);


    const signupDetails = () => {
        setAccount(false);
        console.log("hello wolrd");
    };

    const loginDetails = () => {
        setAccount(true);
    };

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
        // console.log(e.target.value);
    };


    const signupUser = () => {
        let response = SignupAPI(signup);
        if(!response) return;
        handleClose();
        setName(signup.firstname);
    };

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
        // console.log(e.target.value);
    };
    
    const LoginUser = async() => {
        console.log(login);
        let response = await LoginAPI(login);
        if(response.status === 200) {
            handleClose();
            setName(response.data.data.firstname);
        }else{
            setError(true);
        
        }
        
    };
    

    return (
        <Dialog open={open} onClose={() => handleClose()} PaperProps={{ sx: { maxWidth: 'unset' } }}>

            <MainBox>
                <LeftBox>
                    <Typography style={{ color: 'white', fontSize: 20, fontWeight: 600, marginTop: 20 }}>Login</Typography>
                    <Typography style={{ color: 'white', fontSize: 18, marginTop: 20 }}>Get access to your Orders, Wishlist and Recommendations</Typography>

                </LeftBox>

                <RightBox>
                    {account ?
                        <>
                            <TextField variant="standard"  name="username" onChange={(e)=>onValueChange(e)}  label="Enter Username" ></TextField>
                            { error && <Errors >Please enter valid usename or password</Errors>}
                            <TextField variant="standard"  name="password" onChange={(e)=>onValueChange(e)}  label="Enter Password" ></TextField>
                            <Typography style={{ fontSize: 12, marginTop: 20 }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>

                            <Button onClick={()=>LoginUser()}style={{ background: '#fb641b', marginTop: 20, fontWeight: 600, color: 'white' }} >Login</Button>
                            <Typography style={{ textAlign: 'center', marginTop: 20 }}>OR</Typography>
                            <Typography style={{ textAlign: 'center', marginTop: 20, color: '#2874f0', cursor: 'pointer' }} onClick={() => signupDetails()}>New to Flipkart? Create an account</Typography>
                        </> :
                        <>
                            <TextField name="firstname" onChange={(e)=>onInputChange(e)} variant="standard" label="Enter First Name" ></TextField>
                            <TextField name="lastname" onChange={(e)=>onInputChange(e)} variant="standard" label="Enter Last Name"></TextField>
                            <TextField  name="email" onChange={(e)=>onInputChange(e)} variant="standard" label="Enter Email"></TextField>
                            <TextField  name="number" onChange={(e)=>onInputChange(e)} variant="standard" label="Enter Phone Number"></TextField>
                            <TextField  name="username" onChange={(e)=>onInputChange(e)} variant="standard" label="Enter Username" ></TextField>
                            <TextField name="password" onChange={(e)=>onInputChange(e)} variant="standard" label="Enter Password" ></TextField>
                            <Typography style={{ fontSize: 12, marginTop: 20 }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button style={{ background: '#fb641b', marginTop: 20, fontWeight: 600, color: 'white' }} onClick={signupUser}>Signup</Button>
                            <Typography style={{ textAlign: 'center', marginTop: 20 }}>OR</Typography>
                            <Typography style={{ textAlign: 'center', marginTop: 20, color: '#2874f0', cursor: 'pointer' }} onClick={loginDetails}>Login if you have an account</Typography>
                        </>
                    }
                </RightBox>



            </MainBox>

        </Dialog>
    )
};


export default LoginDailog;