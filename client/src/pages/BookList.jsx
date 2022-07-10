import { useState } from "react"
import NavbarUser from "../component/navbar/Customer"
import { Row, Col, Button, Table } from "react-bootstrap"
import dataBooks from '../component/Dummy/books'

function BookList() {
    const [datas] = useState(dataBooks)

    return (
        <>
            <div>
                <div className="backgroundImageFull">
                    <NavbarUser />
                    <Row style={{ paddingLeft: "5rem", paddingRight: "5rem", margin: 0 }}>
                        <Col>
                            <h3 className="sentenceSection mb-4">List Category</h3>
                        </Col>
                        <Col className="text-end">
                            <Button
                                className="btn-dark"
                                style={{ width: '100px' }}
                            >
                                Add
                            </Button>
                        </Col>
                        <Col xs="12">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '5%' }}>No</th>
                                            <th style={{ width: '5%' }}>Image</th>
                                            <th style={{ width: '5%' }}>Title</th>
                                            <th style={{ width: '5%' }}>Publication Date</th>
                                            <th style={{ width: '5%' }}>Pages</th>
                                            <th style={{ width: '5%' }}>ISBN</th>
                                            <th style={{ width: '5%' }}>Price</th>
                                            <th style={{ width: '20%' }}>About</th>
                                            <th style={{ width: '5%' }}>Stock</th>
                                            <th style={{ width: '5%' }}>Book File</th>
                                            <th style={{ width: '15%' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datas.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><img src={item.img} style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt={item.name} /></td>
                                                <td>{item.title}</td>
                                                <td>{item.date}</td>
                                                <td>{item.pages}</td>
                                                <td>{item.isbn}</td>
                                                <td>{item.price}</td>
                                                <td style={{ overflow:"auto" }}>{item.about}</td>
                                                <td>{item.stock}</td>
                                                <td>File.pdf</td>
                                                <td><Button variant="success" className="button-table">Edit</Button>
                                                <Button variant="danger" className="ms-2 button-table">Delete</Button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                        </Col>
                    {/* </Row>
                    <DeleteData
                        setConfirmDelete={setConfirmDelete}
                        show={show}
                        handleClose={handleClose}
                    /> */}
            </Row>
        </div>
                </div>
        </>
    );
}

export default BookList;