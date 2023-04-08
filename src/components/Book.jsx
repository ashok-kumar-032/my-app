import React from 'react'
import call from '../assets/call.png'
import { Container, Row, Col } from 'react-bootstrap';
const Book = () => {
    return (
        <div className='book_back'>
            <Container className='d-flex align-items-center py-5 '>
                <Row className='py-5 justify-content-between w_100'>
                    <Col lg={6} xs={12} className='d-flex flex-column align-items-lg-start align-items-center text-center text-lg-start'>
                        <p className='fw_400 fs_18 ff_Jost clr_yellow'>Book Now</p>
                        <p className='fw_700 fs_48 ff_Poppins clr_white max_w'>Book your Appointment
                            Online.</p>
                        <p className='fw_500 fs_20 ff_Poppins clr_grey max_w_340'>Get 10% Discount on your first hair
                            cut by using our website.</p>
                        <a className='fw_700 fs_15 ff_Poppins clr_white bg_yellow all_btn d-inline-block mt-3 Appointment_btn effect' href="#">Book Appointment</a>
                    </Col>
                    <Col lg={6} xs={12} className='align-items-center d-flex justify-content-center mt-lg-0 mt-5' >
                        <div className='show align-items-center d-flex flex-column justify-content-center'>
                            <img src={call} alt="" />
                            <p className='mt-2 fw_700 fs_20 ff_Poppins clr_grey'>Call Now</p>
                            <p className='fw_700 fs_24 ff_Poppins clr_black'>0300 7715325</p>
                        </div>
                    </Col>
                </Row>
            </Container></div>
    )
}

export default Book