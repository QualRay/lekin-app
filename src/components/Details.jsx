import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import axios from "../utils/Axios";

const Details = () => {

  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {

      const { data } = await axios.get(`/products/${id}`);
      
      setProduct(data);
      
      
    
      
    } catch (error) {
      console.error(error)
      
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);


  return product ? (
    <>
      <div className="w-[70%] flex h-full justify-between m-auto py-[15%] px-[10%]">
        <img
          className="mr-8 object-contain h-[60%] w-[50%]"
          src={`${product.image}`}
          alt="bag1 img"
        />
        <div className="content w-[45%]">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h3 className="text-zinc-500 my-5">{product.category}</h3>
          <h2 className="text-red-500 font-bold mb-3">${product.price}</h2>
          <p className="mb-[10%] text-font-family-anton text-zinc-700">
            {product.description}
          </p>
          <Link className="py-2 px-5 border rounded border-blue-200 text-blue-300 mr-5">
            Edit
          </Link>
          <Link className="py-2 px-5 border rounded border-red-200 text-red-300">
            Delete
          </Link>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Details