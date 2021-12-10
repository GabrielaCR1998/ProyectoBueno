import React, {createContext, useState,} from 'react';

export const ContactoContext = createContext();


const ContactoProvider = (props)=>{
    const [cliente, setcliente] = useState({
        numero:"",
        nombre:"",
        correo:"",
        asunto:"",
    })

    const [lista, setLista]= useState([]);
    return(
        <ContactoContext.Provider
            value={{
                cliente,
                lista,
                setcliente,
                setLista
            }}
        >
            {props.children}

        </ContactoContext.Provider>
    )
}
export default ContactoProvider;