"use client";
import React, { createContext, useState, useContext } from 'react';

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0)
    return (
        <GlobalContext.Provider
            value={{
                theme,
            }}
            >
        <GlobalUpdateContext.Provider value={setGlobalState}>
            {children}
        </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}
export const useGlobalState = () => useContext(GlobalContext);