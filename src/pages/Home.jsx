import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import User from "../components/User";
import Post from "../components/Post";
import {isEmpty} from "../components/Utils"
import "../style/home.scss";

function Home() {

  const posts=useSelector((state)=>state.postReducer)
  return (
    <>
    <div className="postPseudo">
      <PostForm />
      <User />
      </div>
      <div className="content">
         <div className="post-container">
          {!isEmpty(posts) && posts.map((post, index)=>(
<Post key={index} post={post}/>
        ))}</div> 
        
      </div>
    </>
  );
}
export default Home;
