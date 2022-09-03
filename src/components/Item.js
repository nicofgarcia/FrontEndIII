import React from "react";
import { useEffect, useState } from "react";
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")


  export default function Item({incrementar, producto, stock}) {

    var [cantidad, setCantidad] = useState(stock)
  
    
    const comprar = () => {
      if(cantidad>0){
      setCantidad (cantidad -1) 
      incrementar()
    }else{
      return null
    }
  }




    return (
      <div className='producto'>
        <h3>
          {producto.nombre}
        </h3>
        <p >{producto.descripcion}</p>

        {cantidad > 0 &&<h5>En stock: <span>{cantidad}</span></h5>}
        {cantidad <= 0 &&<h5>En stock: <span>agotado</span></h5>}

        {cantidad > 0 && <button onClick={comprar}> COMPRAR</button>}
        {cantidad <= 0 && <button> SIN STOCK</button>} 

      </div>
    )
  

}
