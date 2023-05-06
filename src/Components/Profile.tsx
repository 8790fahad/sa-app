import React from 'react'
import profile from '../img/Capture.jpg'
import {BsPencil } from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'
import { Row, Col } from 'reactstrap'
import {IoIosArrowForward} from 'react-icons/io'
import {BsShieldCheck, BsInfoCircle} from 'react-icons/bs'
import {CiLock} from 'react-icons/ci'
import {IoIosLogOut, IoIosHelpCircleOutline} from 'react-icons/io'
export default function Profile() {
  return (
    <div>
       <div className="p-3">
        <h5 className="in_app_title">Profile</h5>
        <Row className='ppp m-0 mt-3'>
          <Col className='' sm={10} xs={10}>
          <div className='profile_first_section p-2'>
          <div>

<img src={profile} alt='profile_pic' style={{borderRadius:'50%', margin:0, width:'70px'}}/>
          </div>
          <div>
<p className='in_app_title'>Muhammad Fahad</p>
<p className='sub_title m-0'>@fahadmika'ilu</p>
          </div>
         
        </div>
          </Col>
          <Col className='profile_first_section' sm={2} xs={2}>
          <div className='p-2'>
            

            <BsPencil size='1.3rem'/>
            
          </div>
          </Col>
        </Row>

        <div className='profile_second_section'>
        <Row className=' m-0 mt-3'>
          <Col className='' sm={10} xs={10}>
          <div className='profile_first_section p-1'>
          <div>
<CiUser className='profile_icon'/>
          </div>
          <div>
<p className='in_app_title_2'>My Account</p>
<p className='sub_title m-0'>Make changes to your...</p>
          </div>
         
        </div>
          </Col>
          <Col className='profile_first_section' sm={2} xs={2}>
          <div className='p-1'>
            

            <IoIosArrowForward size='1.2rem'/>
            
          </div>
          </Col>
        </Row>
        <Row className=' m-0 mt-3'>
          <Col className='' sm={10} xs={10}>
          <div className='profile_first_section p-1'>
          <div>
<CiLock className='profile_icon'/>
          </div>
          <div>
<p className='in_app_title_2'>Security</p>
<p className='sub_title m-0'>Make changes to your...</p>
          </div>
         
        </div>
          </Col>
          <Col className='profile_first_section' sm={2} xs={2}>
          <div className='p-1'>
            

            <IoIosArrowForward size='1.2rem'/>
            
          </div>
          </Col>
        </Row>
        <Row className=' m-0 mt-3'>
          <Col className='' sm={10} xs={10}>
          <div className='profile_first_section p-1'>
          <div>
<BsShieldCheck className='profile_icon' size='2.1rem'/>
          </div>
          <div>
<p className='in_app_title_2'>Two Factor Auth</p>
<p className='sub_title m-0'>Make changes to your...</p>
          </div>
         
        </div>
          </Col>
          <Col className='profile_first_section' sm={2} xs={2}>
          <div className='p-1'>
            

            <IoIosArrowForward size='1.2rem'/>
            
          </div>
          </Col>
        </Row>
        <Row className=' m-0 mt-3'>
          <Col className='' sm={10} xs={10}>
          <div className='profile_first_section p-1'>
          <div>
<IoIosLogOut className='profile_icon'/>
          </div>
          <div>
<p className='in_app_title_2'>Logout</p>
<p className='sub_title m-0'>Make changes to your...</p>
          </div>
         
        </div>
          </Col>
          <Col className='profile_first_section' sm={2} xs={2}>
          <div className='p-1'>
            

            <IoIosArrowForward size='1.2rem'/>
            
          </div>
          </Col>
        </Row>
        </div>
        <p className='in_app_title mt-3'>More</p>
        <div className='profile_second_section'>
        <Row className=' m-0 mt-3'>
          <Col className='' sm={10} xs={10}>
          <div className='profile_first_section p-1'>
          <div>
<IoIosHelpCircleOutline className='profile_icon'/>
          </div>
          <div>
<p className='in_app_title_2'>Help & Support</p>
<p className='sub_title m-0'>Make changes to your...</p>
          </div>
         
        </div>
          </Col>
          <Col className='profile_first_section' sm={2} xs={2}>
          <div className='p-1'>
            

            <IoIosArrowForward size='1.2rem'/>
            
          </div>
          </Col>
        </Row>
        <Row className=' m-0 mt-3'>
          <Col className='' sm={10} xs={10}>
          <div className='profile_first_section p-1'>
          <div>
<BsInfoCircle className='profile_icon'/>
          </div>
          <div>
<p className='in_app_title_2'>About App</p>
<p className='sub_title m-0'>Make changes to your...</p>
          </div>
         
        </div>
          </Col>
          <Col className='profile_first_section' sm={2} xs={2}>
          <div className='p-1'>
            

            <IoIosArrowForward size='1.2rem'/>
            
          </div>
          </Col>
        </Row>
      </div>
      
      </div>
    </div>
  )
}
