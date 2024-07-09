import { Button, Divider, Box,Typography, styled } from '@mui/material';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import Countdown from 'react-countdown';

import {Link} from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Image = styled('img')({
    width: 'auto',
    height: 150
});
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;

const Deal=styled(Box)`
padding: 15px 20px;
display:flex;`

const Timer=styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color: #7f7f7f;
`

const DealText=styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;`


const ViewAllButton=styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
font-weight:600;`

const Text=styled(Typography)`
font-size:14px;
margin-top:5px;
`



const Slider=({ products,title,timer }) =>{
    //const ImageURL='https://rukminim2.flixcart.com/fk-p-flap/530/810/image/131c8c7ecafd87e5.jpg?q=20';
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer=({hours,minutes,seconds}) =>{
        return <Box cariant="span">{hours}:{minutes}:{seconds} Left</Box>
    }
    
    return (
        <Component>
            <Box>
                <Deal> 
                <DealText>{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src={timerURL} alt="timer" style={{width:24}}/>
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }
                    
                    <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
                </Deal>
                <Divider />
                <Box>
                    <Carousel responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        infinite={true}>
                            {
                                products.map((item)=>(
                                    <Link to={`product/${item.id}`} style={{textDecoration:'none'}}>
                                    <Box style={{ textAlign: 'center' ,padding:'25px 15px'}}>
                                        <Image src={item.url} alt={item.id}/>
                                        <Text style={{fontWeight:600,color:'#212121'}}> {item.title.shortTitle} </Text>
                                        <Text style={{fontWeight:600}}> ₹ {item.price.mro}</Text>
                                        <Text style={{color:'green'}}>{item.discount}</Text>
                                        <Text style={{color:'#212121', opacity:'.6'}}>{item.tagline}</Text>                                    </Box>
                                        
                                    </Link>
                                ))
                            }
                        </Carousel>
                </Box>
                
            </Box>
            
        </Component>
    )
}

export default Slider;


/*<Box>
                <img src={ImageURL} alt="" />
            </Box>*/
