import React, { useEffect } from "react";
import { JokeList } from "./components/JokeList/JokeList";
import { Header } from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { handleLoadAllJokes } from "./redux/actions";

function App() {
  const jokes = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLoadAllJokes());
  }, []);

  return (
    <div>
      <Header />
      <JokeList jokes={jokes} />
    </div>
  );
}

export default App;
