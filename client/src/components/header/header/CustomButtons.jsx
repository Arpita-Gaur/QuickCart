import { useState,useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { Box, Typography, Button,styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDailog from '../../login/loginDailog';
import Profile from './Profile';




const Custom = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 30px;`



    const Cart = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 10px;`



    const LoginButton = styled(Button)`
    color:#2874f0;
    background-color: #fff;
    font-size: 14px;
    width: 100px;
    height: 34px;
    text-transform: none;
    font-weight: 600;
    margin-right: 10px;
    border-radius: 2px;
    padding: 5px 10px;
    margin-right: 10px;
    border: 1px solid transparent;
    box-shadow: none;
    :hover{
        background-color: #2874f0;
        color:white;
    }
    `
    const NameDetail = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin-right: 10px;
    text-transform: uppercase;
    `


const CustomButton = () => {


    const [open, setOpen] = useState(false);
    const {name, setName}=useContext(DataContext);
    const openDailog = () => {
        setOpen(true);
    }

  

    return (


        <Custom >
            {
            name ? <Profile name={name} setName={setName}/>
                : 
                
            <LoginButton onClick={()=>openDailog()}>Login</LoginButton>
}
            <Typography style={{width:180,marginLeft:20}}>Become a Seller</Typography>

            <Typography style={{marginRight:50}}>More</Typography>

            <Cart >
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Cart>


            <LoginDailog open={open} setOpen={setOpen}/>

        </Custom >

    

    )

}



export default CustomButton;