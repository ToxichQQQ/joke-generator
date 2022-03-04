import React from 'react'
import {JockeList} from "./components/JokeList/JokeList";
import {Header} from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {createNewJoke} from "./redux/actions";
import {link} from "./untils";



function App() {
    const jokes = useSelector(state => state)

console.log(jokes)
  return (
    <div>
        <Header/>
      <JockeList jokes={jokes}/>
    </div>
  );
}

export default App;
