import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center space-x-4">
    <Link className="p-2 bg-black text-white " to='/task1'>Task 1</Link>
    <Link className="p-2 bg-black text-white " to='/task2'>Task 2</Link>
    </div>
  )
}

export default Menu