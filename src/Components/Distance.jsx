import React from 'react'
import { Row, Col } from 'reactstrap'
import { IoMdSearch } from 'react-icons/io'
import { RiNotification4Line } from 'react-icons/ri'
import { MdOutlineLocalOffer, MdLocationOn } from 'react-icons/md'
import {BiCurrentLocation} from 'react-icons/bi'
import map from '../img/map.png'
import { useNavigate } from 'react-router-dom'
export default function Distance() {
  const navigate = useNavigate()
  return (
    <div>
      <Row className="p-3 m-0">
        <Col sm={8} xs={8}>
          <h5 className="in_app_title">Travel with me</h5>
          <p className="sub_title">Select a shop to get started</p>
        </Col>
        <Col sm={4} xs={4}>
          <div style={{ float: 'right', display: 'flex', gap: 15 }}>
            <IoMdSearch className="travel_icon" />
            <RiNotification4Line
              className="travel_icon"
              onClick={() => navigate('/notifications')}
            />
            <MdOutlineLocalOffer
              className="travel_icon"
              onClick={() => navigate('/special-offer')}
            />
          </div>
        </Col>
      </Row>
      <div>
          <img src={map} className='map' alt='map'/>
      </div>
      <div className="p-2 search_loc_div distance_mod">
        <Row className="m-0">
          <Col sm={4} xs={4}>
            <h3>Distance</h3>
          </Col>
          <Col sm={4} xs={4}>
            <div
              className=""
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="holder"></div>
            </div>
          </Col>
          <Col sm={4} xs={4}>
            <p style={{ float: 'right' }}>5.34 km</p>
          </Col>
        </Row>
        <hr style={{backgroundColor:'grey'}}/>
        <div
          className="notif_div"
          style={{
            height: '',
            display: 'flex',
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius:'10px 10px 0 0',
            gap: 20,
          }}
        >
          <BiCurrentLocation className="travel_icon" />
          <div>
            <b className="m-0">My Current Location</b>
            <p className="sub_title m-0">Nassarawa G.R.A.</p>
          </div>
        </div>
        <div
          className="notif_div"
          style={{
            height: '',
            display: 'flex',
            backgroundColor: 'white',
            borderRadius:'0px 0px 10px 10px',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <MdLocationOn className="travel_icon" />
          <div>
            <b className="m-0">Nassarawa GRA</b>
            <p className="sub_title m-0">Nassarawa G.R.A.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
