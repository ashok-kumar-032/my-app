import React from 'react'
import Usman from '../assets/Usman.png'
import Rabia from '../assets/Rabia.png'
import star from '../assets/star.png'
import star_1 from '../assets/star_1.png'
import Testimonials_back_1 from '../assets/Testimonials_back_1.png'
import Testimonials_back_2 from '../assets/Testimonials_back_2.png'

import { Container, Row, Col } from 'react-bootstrap';
const Testimonials = () => {
    return (
        <div className='bg_lightwhite position-relative '>
            <span><img className='position-absolute t_back_1 d-none d-lg-block' src={Testimonials_back_1} alt="" /></span>
            <span><img className='position-absolute t_back_2 d-none d-lg-block' src={Testimonials_back_2} alt="" /></span>
            <Container className='py-lg-5'>
                <Row className='w_100'>
                    <Col lg={5} xs={12} className='d-flex align-items-center align-items-lg-start flex-column text-center text-lg-start'>
                        <p className='fw_400 fs_18 ff_Jost clr_yellow'>Testimonials</p>
                        <p className='fw_700 fs_48 ff_Poppins clr_black max_w_450'>What Our Clients
                            Say About Us</p>
                        <p className='fw_400 fs_18 ff_Jost clr_grey max_w_450'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
                        <a className='fw_700 fs_15 ff_Poppins clr_black bg_yellow all_btn d-inline-block mt-4 Give_btn effect' href="#">Give Reviews</a>
                    </Col>
                    <Col lg={7} xs={12}>
                        <Row className='w_100 mt-5'>
                            <Col lg={6} xs={12} className='d-flex justify-content-center'>
                                <div className='box d-flex align-items-center flex-column text-center p-3 position-relative'>
                                    <img src={Usman} alt="" />
                                    <p className='fw_700 fs_13 ff_Poppins clr_grey mt-3'>It was an amazing experience to get
                                        services from the best in its profession
                                        Absolutly Enjoyed Every SEcond of it </p>
                                    <img src={star_1} alt="" />
                                    <p className='fw_700 fs_15 ff_Poppins clr_black mt-2 mb-0'>Umar Usman</p>
                                    <p className='fw_700 fs_12 ff_Poppins clr_grey '>Regular User</p>
                                </div>
                            </Col>
                            <Col lg={6} xs={12} className='d-flex justify-content-center mt-4 mt-lg-0'>
                                <div className='box d-flex align-items-center flex-column text-center p-3 position-relative'>
                                    <img src={Rabia} alt="" />
                                    <p className='fw_700 fs_13 ff_Poppins clr_grey mt-3'>It was an amazing experience to get
                                        services from the best in its profession
                                        Absolutly Enjoyed Every SEcond of it </p>
                                    <img src={star} alt="" />
                                    <p className='fw_700 fs_15 ff_Poppins clr_black mt-2 mb-0'>Umar Usman</p>
                                    <p className='fw_700 fs_12 ff_Poppins clr_grey '>Regular User</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials