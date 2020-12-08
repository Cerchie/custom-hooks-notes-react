import React from 'react'
import './App.css';
import ColorPicker from './ColorPicker';
import Counter from './Counter';
import MoodClicker from './MoodClicker';
import SignUpForm from './SignUpForm'
function App() {
  return (
    <div className="App">
      <MoodClicker/>
      <Counter/>
      <SignUpForm />
      {/* <ColorPicker/> */}
    </div>
  );
}

export default App;
