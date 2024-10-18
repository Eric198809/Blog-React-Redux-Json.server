import { useRef } from "react";
import "../style/postForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post.action";

const PostForm = () => {

  const form = useRef();
  const user= useSelector((state)=> state.userReducer);
  const dispatch= useDispatch();

  const handleForm = (e)=>{
    e.preventDefault();
    
  const postData = {
    author:user.pseudo,
    title: form.current[0].value,
    content: form.current[1].value,
    likes: 0,

  }
  console.log("oki");
  console.log(postData);
  
  dispatch(addPost(postData))

 
  

  }
  return (
    <div className="form-container">
      <form ref={form} onSubmit={handleForm}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
