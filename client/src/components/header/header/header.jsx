import { useState } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';

//components
import CustomButtons from './CustomButtons';
import Search from './search';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 15,
    height: 15,
    marginLeft: 4,
    
    backgroundColor: '#2874f0'
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    //const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://t4.ftcdn.net/jpg/06/14/26/15/240_F_614261554_18lgwUvdnezbpXBRFF5ddWZ0qSmOL5Ch.jpg';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <Box component="span" style={{ width: 65 }}>
                        <h1>QuickCart</h1> </Box>
                    
                    
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore and shop!&nbsp;
                            
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;