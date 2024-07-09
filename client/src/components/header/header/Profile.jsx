import { Box, Typography, styled, Menu, MenuItem } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { useState } from 'react';





const NameDetail = styled(Typography)`
font-size: 18px;
font-weight: 600;
color: #fff;
margin-right: 10px;
text-transform: uppercase;
cursor: pointer;
`


const Profile = ({ name,setName }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

   const LogOutUser = () => {
    setName('');
    }


    return (
        <>
            <Box onClick={handleOpen}> <NameDetail>{name}</NameDetail> </Box>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >

                <MenuItem onClick={()=>{handleClose();LogOutUser();}} >
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Typography style={{ fontWeight: 600, marginLeft: 5 }}> Logout</Typography>
                </MenuItem>
            </Menu>

        </>
    );
};


export default Profile;