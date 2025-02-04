import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Nav = () => {

  const { products } = useContext(ProductContext);
  //console.log(products);
  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)].map(cat => cat.charAt(0).toUpperCase() + cat.slice(1));
  //console.log(distinct_category);
  
  const color = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    return `rgb(${r},${g},${b})`;
  }


  return (
    <>
    <nav className="w-[20%] bg-zinc-50 h-full text-black flex flex-col items-center pt-5">
      <a
        className="py-2 px-4 border rounded border-blue-200 text-blue-400 items-center"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%] text-center">Category Filter</h1>
      <div className="w-[80%] ">

        {distinct_category && distinct_category.map((cat, i) => (
          
          <Link
          key={i} to={`/?category=${cat.toLowerCase()}`} 
          className="mb-3 flex items-center">
          <span style={{backgroundColor: color()}} className="px-2 rounded-full mr-2 w-[15px] h-[15px]"></span>{ " "}
          {cat}
        </Link>

        ))}

        
      </div>
    </nav>
    </>
  );
}

export default Nav