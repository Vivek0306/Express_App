import React from 'react'
import "./topbar.css"
import { Chat, Person, Search, Notifications } from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className='logo'>BroBook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className='searchIcon' />
            <input placeholder="Seach for friends, posts or video" className='searchInput'/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">4</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">2</span>
            </div>
          </div>
          <img src="/assets/person/4.jpeg" alt="Profile Pic" className="topbarImg" />
        </div>

    </div>
  )
}
