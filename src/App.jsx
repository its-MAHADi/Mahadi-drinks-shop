import { useEffect } from "react";
import { useState } from "react";

const app =() =>{
  const [drinks,setdrinks] =useState([]);
  const [search,setSearch] =useState("")
  useEffect(()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita${search}`)
    .then((response)=> response.json())
    .then((data)=> setdrinks(data.drinks))
  },[search])
  console.log(drinks);
  const handlesearch=(e)=>{
    const value = e.target.value;
    setSearch(value)
  }
  return (
    <div className="bg-indigo-400 py-3 px-3">
       <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold ">Drink's <span className="text-white">Shop <span className="text-black">.</span></span></h1>
        <input className="px-3 py-1 rounded-md border border-blue-400" type="text" placeholder="Search Drink's Name" onChange={handlesearch} />
      </div>
      <div className="grid grid-cols-3 gap-10 py-8">
        {
          drinks.map((drinks,index)=> 
             <div className="p-3 shadow-xl border rounded" key={drinks.idDrink} >
              <img src={drinks.strDrinkThumb} className="rounded-xl" alt="" />
              <div>
               <h2 className="text-center text-xl font-semibold py-1"> {drinks.strDrink} </h2>
              <div className="flex items-center justify-between py-3">
              <span> {drinks.strCategory} </span>
              <span> {drinks.strGlass} </span>
              </div>
              <div className="flex items-center justify-between">
              <button className="border border-black rounded hover:bg-orange-500 px-2 py-1 hover:text-white">Order Now</button>
              <button className="border border-black hover:bg-green-500 hover:text-black px-2 py-1 rounded">Price:15$</button>
              </div>
              </div>
             </div>
        )
        }
      </div>
    </div>
  )
}
export default app;