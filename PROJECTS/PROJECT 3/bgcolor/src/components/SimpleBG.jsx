import { useEffect, useState } from 'react';

export function useColor(key, initialValue) {
    // Get initial color from localStorage or use initialValue
    const [color, setColor] = useState(() => {
        const savedColor = localStorage.getItem(key);
        return savedColor ? JSON.parse(savedColor) : initialValue;
    });

    // Update localStorage whenever color changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(color));
    }, [color, key]); // Update localStorage on color or key change

    return [color, setColor]; // Return current color and setter
}

export default useColor; // Export the hook

//! This is SIMple Version