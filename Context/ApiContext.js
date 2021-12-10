import React, { createContext, useState } from 'react';
import { Text, View, StyleSheet, Button, StatusBar} from "react-native";

export const ApiContext = createContext();

const Apiprovider = (props) => {
  const [perro, setPerro] = useState({});

  const buscar = () => {
    const api_url = `https://dog.ceo/api/breeds/image/random`;
    fetch(api_url)
      .then((data) => {
        return data.json();
      })
      .then((mostrar) => {
        console.log(mostrar);
        setPerro(mostrar);
      });
  };
  return (
    <ApiContext.Provider
      value={{
        perro,
        buscar,
      }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default Apiprovider;