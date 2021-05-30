import React, {useState} from "react";
import "./style.css";

const Joke = ({userAvatar, userName, text, likes, dislikes}) => {
  const [up, setUp] = useState(likes);
  const [down, setDown] = useState(dislikes);

  const handleUpClick = () => {
    setUp(up + 1);
  };

  const handleDownClick = () => {
    setDown(down + 1);
  };

  return (
    <>
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar}/>
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text"> {text} </p>
        </div>
        <div className="joke__likes">
          <button id="btn-up" value={up} className="btn-like btn-like--up" onClick={handleUpClick}></button>
          <span id="likes-up" className="likes-count likes-count--up">{up}</span>
          <button id="btn-down" value={down} className="btn-like btn-like--down" onClick={handleDownClick}></button>
          <span id="likes-down" className="likes-count likes-count--down">{down}</span>
        </div>
      </div>
    </div>
   </>
)};

export default Joke;