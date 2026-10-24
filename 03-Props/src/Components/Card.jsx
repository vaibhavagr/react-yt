import React from 'react'

import amazon from '../assets/amazon.png'
import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
     <div className="card">
        <div className="top">
          <img src={props.brandlogo} alt="profile" / >
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>{props.companyName} <span> {props.datePosted}</span></h3>
          <h3>{props.post}</h3>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
