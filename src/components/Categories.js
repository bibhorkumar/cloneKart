import { Card, Typography } from '@mui/material'
import React from 'react'
import './Categories.css'

const Categories = () => {
  return (
    <div>
        <Card className='categories-card'>
          <div className='category-div'>
            <img src='https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg'></img>
            <p>Mobiles</p>
          </div>
          <div className='category-div'>
            <img src='https://www.asus.com/media/Odin/Websites/global/Series/12.png'></img>
            <p>Electronics</p>
          </div>
          <div className='category-div'>
            <img src='https://m.media-amazon.com/images/I/91o0m2iIpVL.jpg'></img>
            <p>Grocery</p>
          </div>
          <div className='category-div'>
            <img src='https://d12mivgeuoigbq.cloudfront.net/magento-media/members/bste2-stewart/homepage-hero-appliance-group.png'></img>
            <p>Appliances</p>
          </div>
          <div className='category-div'>
            <img src='https://m.media-amazon.com/images/I/61SWBZPHBXL._SR210,210_FMpng_.png'></img>
            <p>Fashion</p>
          </div>
          <div className='category-div'>
            <img src='https://www.royaloakindia.com/_next/image?url=https%3A%2F%2Fmedia.royaloakindia.com%2Fmedia%2F.renditions%2Fwysiwyg%2FSOFAaa.png&w=640&q=80'></img>
            <p>Home & Furniture</p>
          </div>
          <div className='category-div'>
            <img src='https://t3.ftcdn.net/jpg/01/86/47/98/360_F_186479808_YVWLhaM4wqta2BywQDYNzWHlLeP01p4P.jpg'></img>
            <p>Travel</p>
          </div>
          <div className='category-div'>
            <img src='https://m.media-amazon.com/images/I/812xCBX-MOL.jpg'></img>
            <p>Beauty,Toys & more</p>
          </div>
        </Card>
    </div>
  )
}

export default Categories;