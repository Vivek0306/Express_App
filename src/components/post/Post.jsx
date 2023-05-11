import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Vivek Nair</span>
                    <span className="postDate">1 day ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post</span>
                <img src="assets/post/1.jpeg" className='postImage' alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/heart.png" alt="" />
                    <img className='likeIcon' src="assets/like.png" alt="" />
                    <span className="postLikeCounter">69 people likes it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">10 Comment</span>    
                </div>
            </div>
        </div>
    </div>
  )
}
