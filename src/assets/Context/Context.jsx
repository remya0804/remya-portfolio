import { createContext, useState } from "react";

export const myContext = createContext(); 

const ContextProvider = (props) =>{

    const [activeMenu,setActiveMenu] = useState("Home");

    const contextValue = {activeMenu,setActiveMenu};

    return (

        <myContext.Provider value={contextValue}>

            {props.children}

        </myContext.Provider>
    )
}

export default ContextProvider;
