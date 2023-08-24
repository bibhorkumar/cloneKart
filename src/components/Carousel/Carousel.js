import React from 'react'
import './Carousel.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const CarouselFunc = () => {
    var items = [
        {
            id: 1,
            image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2070a382c65a8329.png?q=20"
        },
        {
            id: 2,
            image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7530e8b380c8abd0.jpg?q=20"
        },
        {
            id:3,
            image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d7172e66069190ad.png?q=20"
        }
    ]

    function Item(props)
{
    return (
        <Paper>
            <img src={props.item.image} alt='carousel'></img>
        </Paper>
    )
}

  return (
    <div className='carousel-container'>
        <Carousel
        navButtonsAlwaysVisible
        autoPlay
        animation='slide'
        duration={600}
        interval={2000}
        NextIcon={<ArrowForwardIosOutlinedIcon/>}
        PrevIcon={<ArrowBackIosNewOutlinedIcon/>} 
        >
            {
                items.map( (item, i) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    </div>
  )
}

export default CarouselFunc