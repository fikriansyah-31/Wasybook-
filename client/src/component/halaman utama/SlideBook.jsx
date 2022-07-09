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
        speed: 500,
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
              <Card className='m-4 slideCard' key={item.id}>
              <Row className="align-items-center">
              <div className="img" style={{width : "50%", display : "flex"}}>
              
              <img src={item.img} alt="" style={{width : '170px'}}/>
                  <Col md={9}>
                  <p className='bookTitle' style={{ marginTop: '5px', marginBottom: '5px' }}>{item.title}</p>
                  <p className='bookAuthor text-muted'>By. {item.author}</p>
                  <p>{item.about}</p>
                  <p className='bookPrice' style={{ marginTop: '2px' }}>Rp. {item.price}</p>
                  <Button variant="dark" style={{ borderRadius: 0, width:'100%', marginBottom: '5px' }}>Add to Cart</Button>   
                  </Col>
                  </div>
                <div className="card" style={{width : "50%", display : "flex", width : '100px', marginTop : "20px"}}>
                </div>
                </Row>
                </Card>
            </div>  
          })}
        </Slider>
        </div>
    </div>
  )
}

export default SlideBook