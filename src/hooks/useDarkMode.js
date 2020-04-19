import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        darkMode ? document.getElementsByTagName('body').classList.add('darkMode') : document.getElementsByTagName('body').classList.remove('darkMode');
    }, [darkMode]);

    const handleDarkMode = value => {
        setDarkMode(value);
    }

    return [darkMode, handleDarkMode];
}