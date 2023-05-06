import React from 'react'
import { MdOutlineLocalOffer } from 'react-icons/md'

export default function SpecialOffer() {
  return (
    <div>
    <div className="p-3">
     <h5 className="in_app_title">Special Offer</h5>
     <p className='sub_title'>View all your recent notifications here</p>

     <p className='sub_title m-0'>Today</p>
       <div className='notif_div' style={{ height:'',display:'flex', alignItems:'center', gap:20}}>
           <MdOutlineLocalOffer  className='travel_icon'/>
           <div>
           <b className='m-0'>Special Discount!</b>
           <p className='sub_title m-0'>Special promotion only valid for today</p>
           </div>
       </div>
       <p className='sub_title m-0 mt-3'>Yesterday</p>
       <div className='notif_div' style={{ height:'',display:'flex', alignItems:'center', gap:20}}>
           <MdOutlineLocalOffer  className='travel_icon'/>
           <div>
           <b className='m-0'>Special Discount!</b>
           <p className='sub_title m-0'>Special promotion only valid for today</p>
           </div>
       </div>
   </div>
 </div>
  )
}
