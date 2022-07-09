import NavbarUser from "../component/navbar/Customer"
import { Row, Col, Button } from "react-bootstrap"
import cart from '../assets/img/cart-white.svg'
import background from "../assets/img/background.png";

function DetailBook() {

    return (
        <>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "100%",
                width: "100%",
              }}>
                    <div className="backgroundImageFull" style={{marginTop:"30px"}}>
                        <NavbarUser />
                        <div style={{ paddingLeft:'30px', paddingRight:'30px', marginTop:"100px" }}>
                    <Row className="align-items-center">
                        <Col sm={5}>
                            <div className="justify-content-end d-flex me-0">
                            <img src='https://www.akubaca.com/wp-content/uploads/2019/07/The-Case-Book-Of-Sherlock-Holmes-2.jpg' style={{width:"300px"}} alt="" className="booksImageDetail" />
                            </div>
                        </Col>
                        <Col sm={6}>
                            <p className='bookTitleDetail' style={{ marginTop: '5px', marginBottom: '5px' }}>The Case Book of Sherlock Holmes</p>
                            <p className='bookAuthorDetail text-muted'>By. Sir Arthur Conan Doyle</p>
                            <p className='detailTitle mb-1'>Publication Date</p>
                            <p className='detailSentence text-muted mb-2'>August 1999</p>
                            <p className='detailTitle mb-1'>Pages</p>
                            <p className='detailSentence text-muted mb-2'>300</p>
                            <p className='detailTitle mb-2 text-danger'>ISBN</p>
                            <p className='detailSentence text-muted mb-2'>00000000000</p>
                            <p className='detailTitle mb-2'>Price</p>
                            <p className='detailSentence text-success mb-5' style={{ fontWeight:'bold' }}>500000</p>
                        </Col>
                    <Col sm={3}>
                    </Col>    
                    <Col sm={6}>
                    <h3 className="sentenceSection mt-4">About This Book</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra lobortis nibh, sed pulvinar diam auctor eu. Vivamus neque nunc, iaculis et lectus vel, dictum sagittis metus. Nunc non turpis euismod erat sollicitudin mattis a non dolor. Morbi porta bibendum mi, a eleifend risus pretium nec. Sed volutpat risus quis condimentum varius. Sed sed orci id ex convallis condimentum. Integer ornare sagittis nisl non rhoncus. Aliquam commodo non nibh et sollicitudin. Donec viverra justo neque, at placerat elit blandit vel. Duis luctus odio ut tellus gravida feugiat. Nunc ultrices massa non magna tincidunt, sed tincidunt magna efficitur. Ut tempor tempor nibh, eu mollis arcu.</p>
                    <div className="justify-content-end d-flex mt-4">
                    <Button variant="dark" style={{ borderRadius: 0, width:'20%', alignItems: 'center', marginBottom:'10px' }}> Add Cart <img src={cart} style={{marginBottom:'2px', marginLeft:'2px', marginTop:'5px'}} alt="" /></Button>
                    </div>
                    </Col>
                    </Row>
                        </div>
                </div>
            </div>
        </>
    );
}

export default DetailBook;