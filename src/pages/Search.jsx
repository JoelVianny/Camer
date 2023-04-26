import React from "react";
import {AiOutlineSearch, AiOutlineCloseCircle} from "react-icons/ai"
import { BsHouseDoor} from "react-icons/bs"
import {CiLocationOn} from "react-icons/ci"


const Search = () => {
  return( 
  //   <h1 class="text-center mt-10 text-4xl font-bold">
  //   Search all you want
  // </h1>

	<div class="container mx-auto px-40 p-14">
    
    <div class=" search flex justify-content-center p-6 space-x-10 sm:flex-wrap bg-white rounded-xl shadow-lg ">
    <div class="grid gap-2 place-items-center">
            <label for="search" class="sr-only">Search </label>
            <form methode="get" action="#" class="relative z-50">
              <button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </button>
              <input type="text" name="s" id="s" class="block w-max-content pl-10 pr-[15rem] py-2 border border-transparent rounded-md leading-5 bg-blue-100 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
            </form>
          </div>
      <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <span>All categorie</span>

        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <button class= "bg-blue-700 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        Search
      </button>
    </div> 


    </div>

  );
};

export default Search;
