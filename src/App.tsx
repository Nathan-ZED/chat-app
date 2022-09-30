import React from 'react';
import './App.css'
import {InputBlock} from "./components/InputBlock/InputBlock";
import {ChatRoom} from "./components/ChatRoom/ChatRoom";

function App() {
  return (
    <div className="App">
        <ChatRoom />
      <InputBlock />
    </div>
  );
}

export default App;