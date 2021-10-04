import { useState } from 'react';


function useTheme (startingTheme = "light") {

    const [theme, setTheme] = useState(startingTheme);

    function validataTheme(themeValue) {
        if (themeValue === "dark") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return {
        theme, setTheme: validataTheme,
    }
}

export default useTheme;