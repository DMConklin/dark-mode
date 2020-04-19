import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode');

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [darkMode]);

    const handleDarkMode = value => {
        setDarkMode(value);
    }

    return [darkMode, handleDarkMode];
}