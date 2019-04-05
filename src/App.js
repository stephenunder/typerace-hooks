import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const SNIPPETS = [
    "Bears, beets, Battlestar Galactica",
    "What's Forrest Gump's password? 1Forrest1",
    "Where do programmers like to hangout? The Foo Bar"
  ];
  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const [snippet, setSnippet] = useState("");
  const [userText, setUserText] = useState("");
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const chooseSnippet = snippetIndex => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  }

  const updateUserText = event => {
    setUserText(event.target.value);
    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  }

  useEffect(() => {
    if (gameState.victory) document.title = "Victory!";
  });

  return ( 
    <div className="App">
      <div className="container">
        <h1 className="App-header">TypeRace</h1>
        <hr />
        <h2 className="App-header">Snippet</h2>
          {snippet}
        <h3 className="App-header">{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}</h3>
        <input id="typeInput" value={userText} onChange={updateUserText} />
        <hr />
        {
          SNIPPETS.map((SNIPPET, index) => (
            <button id="snippetButton" onClick={chooseSnippet(index)} key={index}>
              {SNIPPET.substring(0, 20)}...
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default App;