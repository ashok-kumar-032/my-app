import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import navLogo from '../assets/navLogo.png'
import Booknow from './Booknow'
const Mynav = () => {
    return (
        <nav className="bg_img_my">
            <div className='container py-5'>
                <div className="d-flex justify-content-between align-items-center navbar_1">
                    <div className='d-flex align-items-center'>
                        <a href="#"><img className='navlogo effect' src={navLogo} alt="" />
                        </a>
                        <p className='fw_700 fs_15 ff_Poppins clr_white mb-0 ms-2'>salon</p>
                    </div>
                    <input type="checkbox" id="check" className="dis_none" />
                    <label htmlFor="check" className="dis_none  dis_xsm_block">
                        <span className="d-flex justify-content-between h_20 flex-column">
                            <span className="menuitem"></span>
                            <span className="menuitem"></span>
                            <span className="menuitem"></span>
                        </span>
                    </label>
                    <ul className="d-flex mb-0 pos_fixed_xsm left_0 center_xsm" >
                        <li><a className='fw_700 fs_15 ff_Poppins clr_white mb-0 ms-lg-5 position-relative hover_line home effect' href="#">Home</a>
                        </li>
                        <li><a className='fw_700 fs_15 ff_Poppins clr_white mb-0 ms-lg-5 position-relative hover_line home effect' href="#">About Us</a>
                        </li>
                        <li><a className='fw_700 fs_15 ff_Poppins clr_white mb-0 ms-lg-5 position-relative hover_line home effect' href="#">Services</a>
                        </li>
                        <li><a className='fw_700 fs_15 ff_Poppins clr_white mb-0 ms-lg-5 position-relative hover_line home effect' href="#">Contact</a>
                        </li>
                        <li className='ms-lg-5 btn_a'><Booknow /></li>

                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Mynav