import React from 'react'

const Nav = () => {
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
      <ul className="w-[80%] ">
        <li className="mb-3">
          <span className="bg-blue-200 px-2 rounded-full mr-2"></span>
          Cat 1
        </li>
        <li className="mb-3">
          <span className="bg-red-200 px-2 rounded-full mr-2"></span>
          Cat 2
        </li>
        <li className="mb-3">
          <span className="bg-blue-200 px-2 rounded-full mr-2"></span>
          Cat 3
        </li>
        <li className="mb-3">
          <span className="bg-red-200 px-2 rounded-full mr-2"></span>
          Cat 4
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Nav