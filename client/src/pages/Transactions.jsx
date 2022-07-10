import { useState } from "react"
import NavbarAdmin from "../component/navbar/AdminNav"
import { Row, Col, Button, Table } from "react-bootstrap"
import dataBooks from '../component/Dummy/books'

function Transactions() {
    const [datas] = useState(dataBooks)

    return (
        <>
            <div>
                <div className="backgroundImageFull">
                    <NavbarAdmin />
                    <Row style={{ paddingLeft: "5rem", paddingRight: "5rem", margin: 0 }}>
                        <Col>
                            <h3 className="sentenceSection mb-4">Incoming Transactions</h3>
                        </Col>
                        <Col xs="12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr className="text-danger">
                                        <th>No</th>
                                        <th>Users</th>
                                        <th>Transactions Number</th>
                                        <th>Total Payment</th>
                                        <th>Status Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>Users</td>
                                            <td>Number</td>
                                            <td>{item.price}</td>
                                            <td>Pending</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Transactions;