import React from 'react'
import { useNavigate } from 'react-router-dom'
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
        <div
          style={{
            borderBottom: '1px solid #dfdfdf',
            marginLeft: '5',
            marginBottom: 5,
          }}
          onClick={() => navigate('/distance')}
        >
          <p className="mt-4">State Road, Nassarawa, Kano</p>
        </div>
        <div
          style={{
            borderBottom: '1px solid #dfdfdf',
            marginLeft: '5',
            marginBottom: 5,
          }}
          onClick={() => navigate('/distance')}
        >
          <p className="mt-4">State Road, Nassarawa, Kano</p>
        </div>{' '}
        <div
          style={{
            borderBottom: '1px solid #dfdfdf',
            marginLeft: '5',
            marginBottom: 5,
          }}
          onClick={() => navigate('/distance')}
        >
          <p className="mt-4">State Road, Nassarawa, Kano</p>
        </div>{' '}
        <div
          style={{
            borderBottom: '1px solid #dfdfdf',
            marginLeft: '5',
            marginBottom: 5,
          }}
          onClick={() => navigate('/distance')}
        >
          <p className="mt-4">State Road, Nassarawa, Kano</p>
        </div>
      </div>
    </div>
  )
}
