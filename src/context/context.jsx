import React, { createContext, useState, useContext, useEffect } from "react";
import { api_url } from "@/utils/api";

export const contextProp = createContext();

export const ContextProvider = ({ children }) => {

    const [ listUrl, setListUrl ] = useState([]);
    const [ modalCreate, setModalCreate ] = useState(false);
    const [editData, setEditData] = useState(null);

    console.log(modalCreate)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(api_url+'api/get-data');
            const result = await response.json();
            setListUrl(result);
          } catch (error) {
            console.log(error)
          }
        };
    
        fetchData();
      }, []);

  return (
    <contextProp.Provider value={{ listUrl, setModalCreate, modalCreate, setListUrl, setEditData, editData }}>
      {children}
    </contextProp.Provider>
  );
};