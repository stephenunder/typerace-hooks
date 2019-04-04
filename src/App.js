import React, { useState } from "react";

const App = () => {
  const SNIPPETS = [
    "Bears, beets, Battlestar Galactica",
    "What's Forrest Gump's password? 1Forrest1",
    "Where do programmers like to hangout? The Foo Bar"
  ];
  const [snippet, setSnippet] = useState("");
  const [userText, setUserText] = useState("");

  const chooseSnippet = snippetIndex => () => {
    console.log("setSnippet", snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
  }

  const updateUserText = event => {
    setUserText(event.target.value);
    console.log("current userText", userText);
  }

  return ( 
    <div>
      <h1>TypeRace</h1>
      <hr />
      <h2>Snippet</h2>
      {snippet}
      <input value={userText} onChange={updateUserText} />
      <hr />
      {
        SNIPPETS.map((SNIPPET, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substring(0, 10)}...
          </button>
        ))
      }
    </div>
  )
}

export default App;