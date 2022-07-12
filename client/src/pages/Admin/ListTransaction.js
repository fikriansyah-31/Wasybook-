import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import rupiahFormat from 'rupiah-format';

import bgLeft from "../../assets/image/BgLeft.png";
import bgRight from "../../assets/image/BgRight.png";
import Navbars from '../../components/navbar/Navbars';

function ListTransaction() {
    return (
        <>

            {/* background image */}
            <img src={bgLeft} className="bgImage" alt="" />
            <img src={bgRight} className="bgImageR" alt="" />

            <Navbars />

            <Container className="mt-5 py-5" >
                <h1>Incoming Transaction</h1>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className='text-danger'>No</th>
                                    <th className='text-danger'>Users</th>
                                    <th className='text-danger'>Product Purchased</th>
                                    <th className='text-danger'>Total Payment</th>
                                    <th className='text-danger'>Status Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Name Buyer</td>
                                    <td>Books</td>
                                    <td className={`text-success`}>
                                        {rupiahFormat.convert(200000)}
                                    </td>
                                    <td className={`text-success`}>
                                        Success
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListTransaction