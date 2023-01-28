
export default function ColorShowArea({addColor, hexValue, isDarkFont}) {
  return (
    <div className='colorshoware' style={{
        backgroundColor:addColor, 
        color:isDarkFont ? "black":"white"}}>   

        <p>{addColor ? addColor: "Empty Value"}</p>   
        <p>{hexValue ? hexValue: null}</p>    

    </div>
  )
}

ColorShowArea.defaultProps ={
    addColor: "Empty Color Value"
}
