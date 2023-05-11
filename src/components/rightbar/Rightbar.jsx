import React from 'react'
import "./rightbar.css"
import { } from "@mui/icons-material"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ profile }) {
  const HomeRightBar = ()=>{
    return (
      <>
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
  </>
    );
  }

  const ProfileRightBar = ()=>{
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className='rightbarInfo'>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Morocco</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>        
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>      
        <div className="rightbarFollowing">
          <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </h4>
      </>
    );
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightBar/>
      </div>
    </div>
  )
}
