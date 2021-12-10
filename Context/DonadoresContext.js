import React, {createContext, useState,} from 'react';

export const DonadoresContext = createContext();


const DonadoresProvider = (props)=>{
    const [donador, setDonador] = useState({
        tarjeta:"",
        nombre:"",
        correo:"",
        cvv:"",
        monto:""
    })

    const [formulario1, setFormulario1]= useState([]);
    return(
        <DonadoresContext.Provider
            value={{
                donador,
                formulario1,
                setDonador,
                setFormulario1
            }}
        >
            {props.children}

        </DonadoresContext.Provider>
    )
}
export default  DonadoresProvider;