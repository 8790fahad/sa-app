import React from 'react'
import { Row, Col } from 'reactstrap'
import { IoMdSearch } from 'react-icons/io'
import { RiNotification4Line } from 'react-icons/ri'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import map from '../img/map.png'
export default function Location() {
  const navigate = useNavigate()
  return (
    <div>
      {/* <div>
          <img src={map} className='map'/>
      </div> */}
      <div className="p-2">
        <input
          type="search"
          className="input_field"
          placeholder="where would you go?"
        />
      </div>
    </div>
  )
}
