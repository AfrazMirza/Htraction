import React, { createContext, useContext, useState } from "react";

const DarkLightMode = createContext();

// useTheme is a custome Hook which allows the component easily access the DarkLightMode

export const useTheme = () => useContext(DarkLightMode)


export const ThemePorvider =({childern}) => {
    const [theme, setTheme] = useState('light');
    
    // we use toggleTheme function to switch into light and dark theme
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }
    return(
        <DarkLightMode.Provider value={{theme, toggleTheme}}>
            {childern}
        </DarkLightMode.Provider>
    )
}

// EXPLANATION of Line no 10 :-> here ThemeProvider component manages the theme state and provides it to entire app to use useState and the light mode is initialize the light mode by default 


// EXPLANATION of Line no 19 :-> DarkLightMode.Provider provides the theme value and toggleTheme function to all its childern components so any component inside the DarkLightMode.Provider can access and modify the theme 
