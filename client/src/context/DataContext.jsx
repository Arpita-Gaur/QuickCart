import { createContext , useState} from "react";

export const DataContext = createContext(null); // Create a context object

export const DataProvider = ({ children }) => {
 
    const [name,setName] = useState('');


    return (
        <DataContext.Provider value={{
            name,
            setName
        }}>
            {children}
        </DataContext.Provider>
    );
};

// Create a provider for the context object  


export default DataProvider; // Export the context object