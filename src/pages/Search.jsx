import React from "react";
import {AiOutlineSearch, AiOutlineCloseCircle} from "react-icons/ai"
import { BsHouseDoor} from "react-icons/bs"
import {CiLocationOn} from "react-icons/ci"

const categories =[
  {
    id:1,
    names:"Appartement"
  },
  {
    id:2,
    names:"Appartement"
  },
  {
    id:3,
    names:"Appartement"
  },
  {
    id:4,
    names:"Appartement"
  }

]
const Search = () => {
  return( 
  //   <h1 class="text-center mt-10 text-4xl font-bold">
  //   Search all you want
  // </h1>

	<div class=" rounded-xl m-10 mx-auto max-w-screen-lg  md:p-8  px-8">
    
    <div class="flex flex-col gap-3 sm:flex-row bg-white p-8 ">
    <div class="grid gap-2 place-items-center">
            <form methode="get" action="#" class="relative z-50">
              <button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </button>
              <input type="text" name="s" id="s" class="w-full flex-1 pl-10 pr-[15rem] py-2 border border-transparent rounded-md leading-5 bg-blue-100 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
            </form>
          </div>
      <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <span >All categorie</span>

        <svg xmlns="http://www.w3.org/2000/svg"  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
     {categories.map(
      ({id,names})=>{
        return(
          <li key={id}>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{names}</a>
      </li>
        )
      }
     )}
    
    </ul>
</div>
      </div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-400">Search</button>
    </div> 


    </div>

  );
};

export default Search;
