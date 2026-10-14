import React, { useState } from 'react';

function colorPickerApp() {
      {/* Add your color picker component here */}
  const [color, setColor] = useState('#ffffff');
  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
  }

  return (
    <div 
      className="color-picker-app"
    >
      <h1 style={{ backgroundColor: color }} >Color Picker App</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default colorPickerApp;