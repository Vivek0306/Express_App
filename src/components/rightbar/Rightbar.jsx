import React from 'react'
import "./rightbar.css"
import { } from "@mui/icons-material"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" className='birthdayImg' alt="" />
          <span className="birthdayText"><b>Jake Loy</b> and <b>3 other friends</b> have birthday today</span>
        </div>
        <img className="rightbarAd" src="assets/ad.png"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
            { Users.map(u => (
              <Online key={u.id} user={u} />
            )) }
        </ul>
      </div>
    </div>
  )
}
