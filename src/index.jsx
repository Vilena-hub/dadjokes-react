import React, {useState} from 'react';
import {render} from 'react-dom';
import './style.css';
import {jokes} from './jokes';
import Joke from './Joke';


const App = () => {
  return (
    <>
    {jokes.map(joke=>
    <Joke
     key={joke.avatar}
     userName={joke.name}
     userAvatar={joke.avatar}
     text={joke.text}
     likes={joke.likes}
     dislikes={joke.dislikes}
     />)
   }
   </>
  )
};

render(<App />, document.querySelector('#app'));
