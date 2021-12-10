import React, {createContext, useState} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, ToastAndroid, Platform, Alert } from "react-native";

export const TiendaContext = createContext();
const Tiendaprovider = (props) =>{
  const [cantidad,setCantidad]= useState(0);
  const [total,setTotal]= useState(0);
  const [carrito,setCarrito]= useState([]);
  const [wishList,setWishList]= useState([]);
  const [catalogo,setCatalogo]= useState([
    {codigo:1,titulo:"ARNES DE SOPORTE DE REHABILITACION PARA PERROS", precio:400.00,categoria:'Perros', desactivado:false},
    {codigo:2,titulo:"BOLSA DE ARRASTRE", precio:1100.00, categoria:'Perros y Gatos', desactivado:false},
    {codigo:3,titulo:"MUÑEQUERAS DE COMPRESIÓN", precio:1400.00, categoria:'Perros y Gatos', desactivado:false},
    {codigo:4,titulo:"SILLA DE RUEDAS TRASERA AJUSTABLE ", precio:1500.00, categoria:'Perros', desactivado:false},
    {codigo:5,titulo:"PRÓTESIS PERSONALIZABLE", precio:1500.00, categoria:'Perros y Gatos', desactivado:false},
  ]); 
  const agregarCarro=(x)=>{
    const b = carrito.find(a=>a.codigo===x.codigo); 
    let carrito1= carrito;
    var temp;
    if(b!==undefined)
    {
      let temp1 = b.importe;
      temp={
          cantidad:b.cantidad+1,
          codigo:x.codigo,
          titulo:x.titulo,
          precio:x.precio,
          importe:temp1+x.precio
        }
        carrito1= carrito.filter(a=>a.codigo!==x.codigo)  
    }
    else
    {
      temp={
        cantidad:1,
        codigo:x.codigo,
        titulo:x.titulo,
        precio:x.precio,
        importe:x.precio
      }
    }
    setCarrito([...carrito1,temp])
    setTotal(total+x.precio)
  }
   const eliminarCarro=(x)=>{
   const b = carrito.find(a=>a.codigo===x.codigo); 
    let carrito1 = carrito;   
    var temp;
    if(b.cantidad>1)
    {
      let temp1 = b.importe;
      temp={
          cantidad:b.cantidad-1,
          codigo:x.codigo,
          titulo:x.titulo,
          precio:x.precio,
          importe:temp1-x.precio
        }
      carrito1 = carrito.filter(a=>a.codigo!==x.codigo)
        
      setCarrito([...carrito1,temp])
      setTotal(total-x.precio)
    }
    else{
      carrito1 = carrito.filter(a=>a.cantidad!==x.cantidad)
      setCarrito([...carrito1])
      setTotal(total-x.precio)
    } 
  }
   const agregarWishList = (i) =>{
    let productos = catalogo;
    productos = catalogo.filter(a=>a.codigo!==i.codigo)
    let prop ={
        codigo:i.codigo, 
        titulo:i.titulo,
        precio:i.precio, 
        categoria:i.categoria, 
        desactivado:true 
    }
    let t = productos.concat(prop) 
    setCatalogo(t)
    setWishList(
        wishlist => [...wishlist,prop] 
    )
  }
    const eliminarWishList=(i)=>{
    let elimina = wishList.filter(a=>a.codigo!==i.codigo) 
    let productos = catalogo.filter(a=>a.codigo!==i.codigo);
    let prop ={ 
      codigo:i.codigo,  
      titulo:i.titulo,
      precio:i.precio,  
      categoria:i.categoria,  
      desactivado:false 
    }
    let r = productos.concat(prop)
    setCatalogo(r)
    setWishList(elimina)
  }
  const contdelib=()=>{  
      const tt = carrito.reduce((precio,l)=>{return precio+l.cantidad},0)
      if(tt>5){ return"+5"}
      else{ return tt }
   }
  const comprarCarrito=()=>{
    alert("Compra Realizada Con Exito");
  }
  return(
    <TiendaContext.Provider
    value={{
      catalogo,
      carrito,
      agregarCarro,  
      eliminarCarro,   
      total,
      cantidad,
      wishList,
      agregarWishList,
      comprarCarrito,
      eliminarWishList,
      contdelib,
    }} 
    >
      {props.children}
    </TiendaContext.Provider>
  );
}
export default Tiendaprovider;