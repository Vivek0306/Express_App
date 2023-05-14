import { useEffect, useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post"
import "./feed.css";
import axios from "axios"

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async()=>{
    const res = await axios.get("posts/timeline/6458ef0947655ffcb1efb52b");
    setPosts(res.data)

  }
  fetchPosts()
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
