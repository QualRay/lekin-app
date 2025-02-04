import React, { useEffect, useState, createContext } from 'react';
import axios from './Axios';


export const ProductContext = createContext();


const Context = (props) => {
    const [products, setproducts] = useState(null);

    const getproducts = async () => {
        try{
            const { data } = await axios("/products");
            setproducts(data);
        }catch(err){
            console.error(err);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

  return (
    <ProductContext.Provider value={{ products, setproducts }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;