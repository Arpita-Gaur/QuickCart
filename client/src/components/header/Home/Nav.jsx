// nav is for area of top offer and all 
import {Box, Typography, styled } from '@mui/material';
import {navData} from '../../../constant/data';

const NavBar=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0 130px',
justifyContent:'space-between',
overflow:'overlay',
alignItem:'center',
textAlign:'center',
[theme.breakpoints.down('lg')]:{
    margin:0
}
}));
const Image=styled('img')({
    width:60

})


const Nav = () => {
    return(
        <NavBar>
              
            {   
                navData.map((e) => (
                    <Box>
                        
                        <Image src={e.url} alt={e.text} />
                        <Typography style = {{fontWeight:600,fontFamily:'inherit'}}>{e.text}</Typography>
                    </Box>
                ))
            }
        </NavBar>
    )
};

export default Nav;
//map function collects all the data atleast for once 
//data.js wala url, text