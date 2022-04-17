import React from 'react';
import { useTheme, useThemeUpdate } from '../themeContext/ThemeContext';

export const ContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
      backgroundColor: darkTheme ? '#3B2333' : '#CC99AD',
      color: darkTheme ? '#CC99AD' : '#3B2333',
      padding: '2rem',
      margin: '1.5rem'
  }
    return (
      <>
        <button className='button-toggle' onClick={toggleTheme}>Click, to change theme</button>
        <div style={themeStyles}> 
          Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard 
          dummy text ever since the 1500s, when an 
          unknown printer took a galley of type and 
          scrambled it to make a type specimen book. 
        </div>
      </>
  )
}
