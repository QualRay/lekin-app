import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const { products } = useContext(ProductContext);
  //console.log(products);

  return products ? (
    <>
      <div className="h-screen w-screen flex">
        <Nav />
        <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-y-auto overflow-x-hidden">
          {products.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="mb-3 mr-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110  mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-400">{p.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
