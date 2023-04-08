import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
const Affiliate = () => {
    return (
        <div className='Affiliate_img py-5'>
            < Container className=' py-5'>
                <Row className='w-100'>
                    <Col xs={12} className='d-flex align-items-center justify-content-center text-center'>
                        <div className=''>
                            <p className='fw_400 fs_18 ff_Jost clr_yellow'>Affiliate</p>
                            <p className='fw_700 fs_36 ff_Poppins clr_white max_w_570'>Join Us Become a part of Us by
                                becoming an affiliate</p>
                            <a className='fw_700 fs_15 ff_Poppins clr_yellow Partner_btn d-inline-block mt-3 effect' href="#">Partner Program</a>
                        </div>
                    </Col>
                </Row>
            </Container ></div>
    )
}

export default Affiliate