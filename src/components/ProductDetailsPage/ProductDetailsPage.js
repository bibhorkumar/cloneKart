import React from 'react'
import {useParams} from 'react-router-dom';
import Navbar from '../Navbar';
import './ProductDetailsPage.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';

export const ProductDetailsPage = () => {
  const param = useParams();
  //const [allProducts, setAllProducts] = React.useState([]);
  const [product, setProduct] = React.useState([]);


  // React.useEffect(()=>{
  //   fetch("http://localhost:5000/products")
  //   .then(res=>res.json())
  //   .then(data=>setAllProducts(data));
    
  // },[])

  React.useEffect(()=>{
    fetch(`http://localhost:5000/products/${param.productId}`)
    .then(res=> res.json())
    .then(data=> setProduct(data))
  },[param])

  // React.useEffect(()=>{
  //   setProduct(allProducts.filter((item)=> item.id === param.productId));
  // },[allProducts,param])

  // const prod = allProducts.filter((item)=> item.id === param.productId); //less efficient way
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[400]),
    backgroundColor: orange[500], color: 'white',
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));

  let ratingColor='white'
  if(product[0]?.rating.rate >= 4){
    ratingColor = 'seagreen'
  }else if(product[0]?.rating.rate>2.5){
    ratingColor='orange'
  }else{
    ratingColor='red'
  }

  return (
    <div className='container'>
      <Navbar />
      <div className='product-page-body'>
        <div className='left-half-body'>
          <div className='img-container'>
          <img className='productPage-img' src={product[0]?.image} alt={product[0]?.title}></img>
          </div>
          <div className='buy-buttons'>
            <ColorButton startIcon={<ShoppingCartIcon/>} className='cart-btn' variant="contained">Add to Cart</ColorButton>
            <ColorButton startIcon={<FlashOnIcon/>} className='buy-btn' variant="contained">Buy Now</ColorButton>
          </div>
        </div>
        <div className='right-half-body'>
          <h3>{product[0]?.title}</h3>
          <div className='rating' style={{backgroundColor:ratingColor}}>{product[0]?.rating.rate} <StarRoundedIcon sx={{fontSize:14}}/></div> <span>{product[0]?.rating.count} reviews</span>
          <h2>${product[0]?.price}</h2>
          <h4>Available Offers</h4>
          <p><SellRoundedIcon fontSize='small' color='success'/>  Bank Offer10% Instant Discount on ICICI Bank Debit Card and EMI Txns, up to ₹500, on orders of ₹5000 and above</p>
          <p><SellRoundedIcon fontSize='small' color='success'/>  Flat ₹500 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹10,000 to ₹14,999</p>
          <p><SellRoundedIcon fontSize='small' color='success'/>  Partner OfferPurchase now & get 1 surprise cashback coupon in Future</p>
          <p><SellRoundedIcon fontSize='small' color='success'/>  Bank OfferFlat ₹500 off on HDFC Bank Debit Card EMI Trxns on orders priced between ₹10,000 to ₹14,999</p>
          <p>{product[0]?.description}</p>
        </div>
      </div>
    </div>
  )
}

