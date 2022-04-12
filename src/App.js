import React from 'react'
import {JockeList} from "./components/JokeList/JokeList";
import {Header} from "./components/Header/Header";
import {link} from "./untils";
import {useSelector} from "react-redux";



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
