import { useState } from "react"
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import { Card, Row, Col, Button } from "react-bootstrap"
import dataBooks from '../Dummy/books'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SlideBook() {
    const [datas] = useState(dataBooks)

    const settings = {
        dots: true,
        autoplay: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <div className="container" >
        <h3 className="sentenceHead">With us, you can shop online & help</h3>
        <h3 className="sentenceHead">save your high street at the same time</h3>
        <div className="mb-5">
        <Slider {...settings} >
                 {datas.map((item) => (
                    <div className="align-items-center" >
                    <Card className='m-4 slideCard' key={item.id}>
                    <Row className="align-items-center" >
                        <Col sm={5}>
                            <img src={item.img} alt="" className="booksImage" style={{ width:"220px", height:"300px" }} />
                        </Col>
                        <Col sm={6}>
                            <p className='bookTitle' style={{ marginTop: '5px', marginBottom: '5px' }}>{item.title}</p>
                            <p className='bookAuthor text-muted'>By. {item.author}</p>
                            <div className="text-truncate-container">
                            <p>{item.about}</p>
                            </div>
                            <p className='bookPrice' style={{ marginTop: '5px' }}>Rp. {item.price}</p>
                            <Button variant="dark" style={{ borderRadius: 0, width:'100%', marginBottom: '5px' }}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Card>
                </div>
                ))}
        </Slider>
        </div>
        <div className="bodyBooks">
        <h3 className="sentenceSection">List Book</h3>
        <Row>
                    {datas.map((item) => (
                        <Col sm="2" key={item.id}>
                            <Card className="mb-2" style={{ backgroundColor:'transparent', border:'none' }}>
                                <Card.Img variant="top" style={{ borderRadius:1}} src={item.img}/>
                                <Card.Body>
                                        <p className='bookTitle' style={{ marginTop: '5px', marginBottom: '5px' }}>{item.title}</p>
                                        <p className='bookAuthor text-muted'>By. {item.author}</p>
                                        <p className='bookPrice' style={{ marginTop: '5px' }}>Rp. {item.price}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    
                </Row>
        </div>
        </div>
    );
}
export default SlideBook;