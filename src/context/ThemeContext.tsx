import React, { createContext, useContext, useEffect, useState } from 'react'

export type ThemeType = 'theme1' | 'theme2' | 'theme3'

interface ThemeContextProps {
    theme: ThemeType
    setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<ThemeType>('theme1')

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as ThemeType
        if (storedTheme) {
            setThemeState(storedTheme)
        }
    }, [])

    useEffect(() => {
        document.documentElement.className = ''
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const setTheme = (newTheme: ThemeType) => {
        setThemeState(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
