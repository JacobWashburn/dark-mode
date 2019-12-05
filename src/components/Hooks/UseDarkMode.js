import React, {useEffect} from 'react';
import {UseLocalStorage} from './UseLocalStorage';

export const UseDarkMode = () => {
    const [darkMode, setDarkMode] = UseLocalStorage('DarkMode', darkMode);

    useEffect(() => {
        const body = document.querySelector('body');
        if (darkMode) {
            body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode')
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];

};