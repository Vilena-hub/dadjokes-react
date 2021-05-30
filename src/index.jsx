import React, {useState} from 'react';
import {render} from 'react-dom';
import './style.css';
import {jokes} from './jokes';


const App = () => {
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

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
            <img className="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"/>
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">  The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"</p>
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

render(<App />, document.querySelector('#app'));
