import React from 'react'
import cut_img from '../assets/cut-img.png'
import Booknow from './Booknow'
import Mynav from './Mynav'
const Hero = () => {
    return (
        <header className='bg_img position-relative min-vh-100 d-flex flex-column'>
            <Mynav />
            <div className='container py-5 flex-grow-1 d-flex align-items-center pt-5'>
                <div className="row  padding_tb">
                    <div className="col-lg-6 col-12 text-center text-lg-start align-items-center d-flex flex-column align-items-lg-start ">
                        <p className='fw_400 fs_18 ff_Jost clr_yellow'>Welcome To Choppers</p>
                        <p className='fw_700 fs_48 ff_Poppins clr_white'>Best Hair Salon For A
                            Professional Look</p>
                        <p className='fw_400 fs_21 ff_Poppins clr_grey'>Choppers offers high performance customized facials to provide you with visible results.</p>
                        <div className='pt-5 align-items-center d-flex flex-column  flex-lg-row'>
                            <li className='btn_a'><Booknow /></li>
                            <a className='fw_700 fs_15 ff_Poppins clr_white ms-lg-4 d-inline-block mt-4 mt-lg-0 Services_btn btn_a' href="#">All Services</a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 '>
                        <img className='position-absolute hero_img d-none d-lg-block' src={cut_img} alt="cut_img" />
                    </div>

                </div>

            </div>
            <div> <img className='w-100 d-lg-none' src={cut_img} alt="cut_img" /></div>
        </header>
    )
}

export default Hero