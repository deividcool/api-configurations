import React, { createContext, useState, useContext, useEffect } from "react";
import { api_url } from "@/utils/api";

export const contextProp = createContext();

export const ContextProvider = ({ children }) => {

    const [ listUrl, setListUrl ] = useState([]);
    const [ modalCreate, setModalCreate ] = useState(false);

    console.log(modalCreate)

    useEffect(() => {
        // Definir la función fetchData dentro del useEffect
        const fetchData = async () => {
          try {
            const response = await fetch(api_url+'api/list-urls');
            const result = await response.json();
            setListUrl(result);
          } catch (error) {
            console.log(error)
          }
        };
    
        // Llamar a la función fetchData
        fetchData();
      }, []);

  return (
    <contextProp.Provider value={{ listUrl, setModalCreate, modalCreate }}>
      {children}
    </contextProp.Provider>
  );
};