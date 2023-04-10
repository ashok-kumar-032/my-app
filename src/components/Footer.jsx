import React from 'react'
import navLogo from '../assets/navLogo.png'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg_black '>
            <Container className='py-5'>
                <div className='d-flex align-items-center justify-content-between flex-column flex-lg-row'>
                    <div className='d-flex align-items-center'>
                        <a href="#"><img className='navlogo effect' src={navLogo} alt="" />
                        </a>
                        <p className='fw_700 fs_15 ff_Poppins clr_white mb-0 ms-2'>salon</p>
                    </div>
                    <ul className='d-flex align-items-center flex-column flex-lg-row'>
                        <li className='mt-4 mt-lg-0'><a className='fw_400 fs_22 ff_DM clr_white ' href="#">Ready to get started?</a></li>
                        <li><a className='fw_700 fs_17 ff_DM clr_white bg_yellow Get_btn d-inline-block ms-lg-5 mt-4 mt-lg-0 effect ' href="#">Get started</a></li></ul>
                </div>
                <hr className='line' />
                <Row className='py-5'>
                    <Col lg={3} xs={12} className='d-flex justify-content-center justify-content-lg-start'>
                        <div>
                            <p className='fw_400 fs_22 ff_DM clr_white max_w_162'>Subscribe to our
                                newsletter</p>
                            <div className='border_box d-flex '>
                                <input className='address clr_white fs_15 fw_400' id='Email' type="text" placeholder='Email address' />
                                <div className=' bg_yellow email top-0 end-0 border_box'>
                                    <svg className='' width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.463745 9.13333L4.28458 5.3125L0.463745 1.49167L1.64291 0.3125L6.64291 5.3125L1.64291 10.3125L0.463745 9.13333Z" fill="white" />
                                    </svg>

                                </div>
                            </div>


                        </div>
                    </Col>
                    <Col lg={3} xs={6} sm={4} className='d-flex flex-column align-items-center mt-5 mt-lg-0'>
                        <ul>
                            <li><p className='fw_400 fs_17 ff_DM clr_yellow'>Services</p></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Email Marketing</a></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Campaigns</a></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Branding</a></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Offline</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} xs={6} sm={4} className='d-flex flex-column align-items-center mt-5 mt-lg-0'>
                        <ul>
                            <li><p className='fw_400 fs_17 ff_DM clr_yellow'>About</p></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Our Story</a></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Benefits</a></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Team</a></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Careers</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} xs={6} sm={4} className='d-flex flex-column align-items-center mt-5 mt-lg-0'>
                        <ul>
                            <li><p className='fw_400 fs_17 ff_DM clr_yellow'>Help</p></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">FAQs</a></li>
                            <li className='mt-4'><a className='fw_400 fs_15 ff_DM clr_white position-relative hover_line home effect' href="#">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
                <div className='d-flex justify-content-between flex-column flex-lg-row '>
                    <div className='d-flex justify-content-center mt-2'>
                        <p className='fw_400 fs_15 ff_DM clr_white'>Terms & Conditions</p>
                        <p className='fw_400 fs_15 ff_DM clr_white ms-5 '>Privacy Policy</p>
                    </div>
                    <div className='d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0'>
                        <a className='footer_img footer_clr' href="#"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.45959 3.29509H10.2713V0.139742C9.95871 0.0967442 8.88377 0 7.63189 0C5.0198 0 3.23044 1.643 3.23044 4.66274V7.44186H0.347961V10.9693H3.23044V19.845H6.7645V10.9701H9.53039L9.96946 7.44269H6.76367V5.01251C6.7645 3.99297 7.03902 3.29509 8.45959 3.29509Z" fill="white" />
                        </svg>
                        </a>
                        <a className='ms-5 footer_img footer_clr' href="#"><svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3096 2.11613C21.4915 2.475 20.6198 2.71288 19.7109 2.82838C20.6459 2.27013 21.3595 1.39287 21.695 0.3355C20.8233 0.85525 19.8608 1.22238 18.835 1.42725C18.0073 0.545875 16.8275 0 15.5405 0C13.0435 0 11.0333 2.02675 11.0333 4.51137C11.0333 4.86888 11.0635 5.21263 11.1378 5.53988C7.38813 5.357 4.07026 3.55988 1.84138 0.82225C1.45226 1.49738 1.22401 2.27012 1.22401 3.102C1.22401 4.664 2.02838 6.04862 3.22738 6.85025C2.50276 6.8365 1.79188 6.62613 1.18963 6.29475C1.18963 6.3085 1.18963 6.32638 1.18963 6.34425C1.18963 8.536 2.75301 10.3565 4.80313 10.7759C4.43601 10.8763 4.03588 10.9244 3.62063 10.9244C3.33188 10.9244 3.04038 10.9079 2.76676 10.8474C3.35113 12.6335 5.00938 13.9466 6.98113 13.9893C5.44663 15.1896 3.49826 15.9129 1.38901 15.9129C1.01913 15.9129 0.664381 15.8964 0.309631 15.851C2.30751 17.1394 4.67526 17.875 7.22863 17.875C15.5281 17.875 20.0656 11 20.0656 5.04075C20.0656 4.84137 20.0588 4.64887 20.0491 4.45775C20.9443 3.8225 21.6964 3.02913 22.3096 2.11613Z" fill="white" />
                        </svg>
                        </a>
                        <a className='ms-5 footer_img footer_clr' href="#"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18463 0H15.4346C19.231 0 22.3096 3.07862 22.3096 6.875V15.125C22.3096 18.9214 19.231 22 15.4346 22H7.18463C3.38826 22 0.309631 18.9214 0.309631 15.125V6.875C0.309631 3.07862 3.38826 0 7.18463 0ZM15.4346 19.9375C18.0884 19.9375 20.2471 17.7787 20.2471 15.125V6.875C20.2471 4.22125 18.0884 2.0625 15.4346 2.0625H7.18463C4.53088 2.0625 2.37213 4.22125 2.37213 6.875V15.125C2.37213 17.7787 4.53088 19.9375 7.18463 19.9375H15.4346Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.80963 11C5.80963 7.96263 8.27226 5.5 11.3096 5.5C14.347 5.5 16.8096 7.96263 16.8096 11C16.8096 14.0374 14.347 16.5 11.3096 16.5C8.27226 16.5 5.80963 14.0374 5.80963 11ZM7.87213 11C7.87213 12.8948 9.41488 14.4375 11.3096 14.4375C13.2044 14.4375 14.7471 12.8948 14.7471 11C14.7471 9.10388 13.2044 7.5625 11.3096 7.5625C9.41488 7.5625 7.87213 9.10388 7.87213 11Z" fill="white" />
                            <circle cx="17.2221" cy="5.08761" r="0.732875" fill="white" />
                        </svg>

                        </a>
                    </div>
                </div>
            </Container></div>
    )
}

export default Footer