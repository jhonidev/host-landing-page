import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [lightMode, setLightMode] = useState(true);
    const toggleTheme = () => {
        setLightMode(!lightMode);
    }

    const { children } = props;
    return(
        <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;