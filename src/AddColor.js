import colorNames from 'colornames';
import React from 'react'


export default function AddColor({addColor, setAddColor, setHexValue,isDarkFont, setIsDarkFont}) {
  return (
    <form className='AddColor' onSubmit={(e)=> e.preventDefault()}>
      <label htmlFor='addColor'></label>
      <input
      autoFocus
       id="addColor"
       type="text"
       placeholder='Enter Color Name'
       required
       value={addColor}
       onChange={(e) => {
        setAddColor(e.target.value);
        setHexValue(colorNames(e.target.value));
      }}
       />
       <button type='button' onClick={()=>setIsDarkFont(!isDarkFont)}>Change Text Color</button>
    </form>
  )
}
