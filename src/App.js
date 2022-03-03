import React from 'react'
import {JockeList} from "./components/JokeList/JokeList";
import {Header} from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEW_JOKE} from "./redux/types";
import {getNewJoke} from "./services";


function App() {
    const dispatch = useDispatch()
    const jokes = useSelector(state => state)

    const handleCreateNewJoke = () => {
    dispatch({type:CREATE_NEW_JOKE})
    }

  return (
    <div>
        <Header/>
      <JockeList handleCreateNewJoke={handleCreateNewJoke} jokes={jokes}/>
    </div>
  );
}

export default App;
