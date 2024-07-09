
import Slider from './Slider';
import {Box, styled} from '@mui/material';

const Component=styled(Box)`
display:flex;`;

const Left=styled(Box)(({theme})=>({
width:'83%',
[theme.breakpoints.down('md')]:{
    width:'100%'
}
}));


const Right=styled(Box)(({theme})=>({
background:'#FFFFFF',
padding:5,
marginTop:10,
marginLeft:10,
width:'20%',
textalign:'center',
[theme.breakpoints.down('md')]:{
    display:'none'
}
}));

const MidSlide=({products,title,timer})=>{
    const adURL='https://rukminim2.flixcart.com/fk-p-flap/530/810/image/131c8c7ecafd87e5.jpg?q=20';
    return(
        <Component>
            <Left>
                <Slider
                    products={products}
                    title={title}
                    timer={timer}/>

            </Left>
            <Right>
                <img src={adURL} alt="ad" style={{width:217}}/>


            </Right>
        </Component>
        
    )
}

export default MidSlide;