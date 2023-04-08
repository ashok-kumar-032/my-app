import React from 'react'
import working_img from '../assets/working_img.png'
import working_back from '../assets/working_back.png'
import { Container, Row, Col } from 'react-bootstrap';
const Working = () => {
    return (
        <div className='bg_lightwhite py-5 position-relative'>
            <span><img className='w_back position-absolute d-none d-lg-block' src={working_back} alt="" /></span>
            <Container className=' py-5 p-3 p-lg-5'>
                <Row className='w_100 '>
                    <Col lg={6} xs={12} className='pe-0 ps-0 '>
                        <img className='w-100' src={working_img} alt="" />
                    </Col>
                    <Col lg={6} xs={12} className='bg_yellow p-4'>
                        <p className='fw_700 fs_32 ff_Poppins clr_white mb-0 ms-lg-3'>WORKING DAYS</p>
                        <p className='fw_400 fs_18 ff_Jost clr_black'>We are open on all six days in a week </p>
                        <div className='max_w_367 d-flex align-items-center justify-content-between mt-4'>
                            <p className='fw_700 fs_16 ff_Poppins clr_white mb-0'>Monday</p><p className='fw_400 fs_13 ff_Poppins clr_black mb-0'>9Am to 10pm</p>
                        </div>
                        <div className='max_w_367 d-flex align-items-center justify-content-between mt-5'>
                            <p className='fw_700 fs_16 ff_Poppins clr_white mb-0'>Monday</p><p className='fw_400 fs_13 ff_Poppins clr_black mb-0'>9Am to 10pm</p>
                        </div>
                        <a className='fw_400 fs_18 ff_Jost clr_black now_btn d-inline-block mt-5 effect' href="#">Book Now</a>
                    </Col>

                </Row>
            </Container >
        </div>
    )
}

export default Working