import { useState } from "react"

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const initial = localStorage.getItem(key)
        return initial ? JSON.parse(initial) : initialValue 
    })
    const setValueLS = value => {
        setValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [value, setValueLS]
}