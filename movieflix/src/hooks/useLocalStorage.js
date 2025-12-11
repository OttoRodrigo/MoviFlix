import { useState } from "react"

const useLocalStorage = (key, initialValue) =>{

    const [storedValue, setStoredValue] = useState(() =>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            console.log(`Erro ao ler localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value) =>{
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
        }catch(error){
            console.error(`Erro ao salvar no localStorage key "${key}":`, error);
        }
    }

    return [storedValue, setValue];

}

export default useLocalStorage;