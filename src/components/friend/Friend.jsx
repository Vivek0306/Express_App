import React from 'react'
import "./friend.css"

export default function Friend({ user }) {
  return (
    <li className='sidebarFriend'>
        <img className="sidebarFriendImage" src={ user.profilePicture} alt="" />
        <span className="sidebarFriendName">{ user.username }</span>
    </li>
  )
}
