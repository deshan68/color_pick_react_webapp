import ColorShowArea from './ColorShowArea';
import React, { useState } from 'react'
import AddColor from './AddColor';
import './App.css';

function App() {
const [addColor, setAddColor] = useState('');
const [hexValue, setHexValue] = useState('');
const [isDarkFont, setIsDarkFont] = useState(true);

  return (
    <div className="App">
      <ColorShowArea addColor={addColor} hexValue={hexValue} isDarkFont={isDarkFont}/>
      <AddColor addColor={addColor} setAddColor={setAddColor} setHexValue={setHexValue} isDarkFont={isDarkFont} setIsDarkFont={setIsDarkFont}/>
    </div>
  );
}

export default App;
