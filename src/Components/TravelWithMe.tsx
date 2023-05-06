import React from 'react'
import { Row, Col } from 'reactstrap'
import { IoMdSearch } from 'react-icons/io'
import{RiNotification4Line} from 'react-icons/ri'
import {MdOutlineLocalOffer} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import map from '../img/map.png'
export default function TravelWithMe() {
    const navigate = useNavigate()
  return (
    <div>
       <Row className="p-3 m-0">
           <Col sm={8} xs={8}>
               <h5 className="in_app_title">Travel with me</h5>
               <p className='sub_title'>Select a shop to get started</p>
           </Col>
           <Col sm={4} xs={4}>
               <div style={{float:'right',display:'flex', gap:15}}>
                   <IoMdSearch  className='travel_icon'/>
                   <RiNotification4Line className='travel_icon' onClick={()=>navigate('/notifications')}/>
                   <MdOutlineLocalOffer className='travel_icon'  onClick={()=>navigate('/special-offer')}/>
               </div>
           </Col>
      </Row>
      {/* <div>
          <img src={map} className='map'/>
      </div> */}
      <div className='p-2 search_loc_div'>
          <div className='' style={{display:'flex', justifyContent:"center"}}>
              <div className='holder'></div>
          </div>
          <input type='search' onClick={()=>navigate('/location')} className='input_field' placeholder='where would you go?'/>
      </div>
    </div>
  )
}
