import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue; // if key exists, use that and if not, use the initial value
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value)); // confirms key exists and converts value to a string before storing
    };
    return [storedValue, setValue]
}

export default useLocalStorage;