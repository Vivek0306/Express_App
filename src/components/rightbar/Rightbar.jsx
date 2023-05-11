import React from 'react'
import "./rightbar.css"
import { } from "@mui/icons-material"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/birthday.png" className='birthdayImg' alt="" />
          <span className="birthdayText"><b>Jake Loy</b> and <b>3 other friends</b> have birthday today</span>
        </div>
      </div>
    </div>
  )
}
