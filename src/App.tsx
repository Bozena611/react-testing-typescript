import React from 'react';
import './App.css';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS", "JS"]}/>
    </div>
  );
}

export default App;
