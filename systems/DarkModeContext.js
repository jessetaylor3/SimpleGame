//systems/DarkModeContext.js
// import React, { createContext, useState, useMemo} from 'react';

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     const contextValue = useMemo(() => {
//         return { isDarkMode, toggleDarkMode };
//       }, [isDarkMode]);
    
//     return (
//         <DarkModeContext.Provider value={contextValue}>
//           {children}
//         </DarkModeContext.Provider>
//     );
// };

import React, { createContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeContext;

