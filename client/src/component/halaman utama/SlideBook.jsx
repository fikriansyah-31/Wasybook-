import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col, } from "react-bootstrap"
import Dummy from "../../component/Dummy/books"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from "../../component/Dummy/books";


function SlideBook() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <div>
        <div className="h1" style={{width : "50%", marginLeft : "auto", marginRight : "auto", marginTop : "80px"}}>
            <h2 style={{wordWrap : "break-word", textAlign : "center", color : "black"}}>With Us, You Can shop online & help save your hight street at the same time</h2>
        </div>

        <div className="slider" style={{marginTop : "80px"}}>
        <Slider {...settings}>
        {data.map((item) => {
              return <div style={{display : "flex", width : "100%"}}>
              <div className="all" style={{display : "flex", flex : "50%"}}>
              <div className="img" style={{display : "flex", marginLeft : "1%", marginRight : "1%"}}>
                <img src={item.img} alt="" style={{width : '150px'}}/>
              </div>

              <div className="card" style={{display : "flex", width : '180px', marginLeft : "1%", marginRight : "1%", border : "none"}}>
                <h5 style={{color : "black", wordWrap : 'break-word'}}>{item.title}</h5>
                <p>{item.author}</p>
                <p style={{wordWrap : "break-word"}}>{item.about}</p>
                <h5 style={{color : "black"}}>{item.price}</h5>
                <Button variant="contained" color="inherit">Add To Cart</Button>
              </div>
          </div>           
        </div>
          })}
        </Slider>
        </div>
    </div>
  )
}

export default SlideBook