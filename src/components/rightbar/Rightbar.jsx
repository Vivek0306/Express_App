import React from 'react'
import "./rightbar.css"
import { } from "@mui/icons-material"

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/3.jpeg" className='rightbarProfileImg' alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/2.jpeg" className='rightbarProfileImg' alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Emily Clark</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/1.jpeg" className='rightbarProfileImg' alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Brown Drak</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/person/6.jpeg" className='rightbarProfileImg' alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Hame Orton</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
