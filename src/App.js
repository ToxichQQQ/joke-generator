import React from 'react'
import {JokeList} from "./components/JokeList/JokeList";
import {Header} from "./components/Header/Header";
import {useSelector} from "react-redux";



function App() {
const jokes = useSelector(state => state)




  return (
    <div>
        <Header/>
      <JokeList jokes={jokes}/>
    </div>
  );
}

export default App;
