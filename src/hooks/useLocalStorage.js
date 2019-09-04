import { useState } from "react";

const useLocalStorage = (key, initialValue) => { // Key and initial value are always the parameters of local storage.
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key); // .getItem is a metod that React gives us to use with user key.
        return item ? JSON.parse(item) : initialValue; // If there's a key, return that. If not, use the initial value.
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value)); // Confirms the key exists and converts to a string before storing.
    };

    return [storedValue, setValue] // Must return the information or it can't be used by any other components.
}

export default useLocalStorage;