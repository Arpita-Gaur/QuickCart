import Nav from "./Nav";
import CarouselData from "./CarouselData";

import { useEffect } from "react";

import { Box, styled } from "@mui/material";
import { getProductDetails } from "../../../redux/actions/ProductActions";

import MidSlide from './MidSlide';
import Slider from "./Slider";

import MidSection from "./MidSection";

import {useDispatch, useSelector} from 'react-redux';


const Component = styled(Box)`
padding: 20px 10px;
margin:10px;
background-color:#f5f5f5;`;

const Home = () => {
    const getProducts=useSelector(state=> state.getProducts)
    const {products, error}=getProducts;



    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProductDetails())},[dispatch])

    return (
        <>
            <Nav />
            <contain>
                <CarouselData/>
                <MidSlide products={products} title="Top offers" timer={true}/>
                <MidSection/>
                <Slider products={products} title="Discounts for you" timer={false}/>
                <Slider products={products} title="Suggesting Items" timer={false}/>
                <Slider products={products} title="Top Selection" timer={false}/>
                <Slider products={products} title="Trending offers" timer={false}/>
                <Slider products={products} title="Season's top picks" timer={false}/>



            </contain>


        </>
    )
};

export default Home;