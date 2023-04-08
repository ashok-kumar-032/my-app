import React from 'react'
import ABOUT_us from '../assets/ABOUT_us.png'
import about_back_img from '../assets/about_back_img.png'
import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
    return (
        <div className='back_img position-relative py-5'>
            <span><img className='ab_back position-absolute d-none d-lg-block' src={about_back_img} alt="" /></span>
            <Container className='p_50 py-5'>
                <Row className='align-items-center'>
                    <Col lg={6} xs={12} className=''>
                        <img className='max_w_100' src={ABOUT_us} alt="" />                </Col>
                    <Col lg={6} xs={12} className='d-flex align-items-center align-items-lg-start flex-column text-center text-lg-start mt-4 mt-lg-0'>
                        <p className='fw_400 fs_18 ff_Jost clr_yellow'>About Us</p>
                        <p className='fw_700 fs_48 ff_Poppins clr_black pt-2'>Best Haircut Salon
                            For Men</p>
                        <p className='fw_400 fs_18 ff_Jost clr_grey pt-2'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
                        <a className='fw_400 fs_18 ff_Jost clr_black bg_yellow all_btn d-inline-block mt-4 Give_btn effect' href="#">Read More</a>
                    </Col>
                </Row>
            </Container></div>
    )
}

export default About