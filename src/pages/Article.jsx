import React, { useEffect, useState } from 'react'
import Search from './Search'
// import api from "../client/api/axiosConfig";
import axios from 'axios';

const Data = [
    {
      id: 1,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure Hommes et Femmes",
      time: "Monday 1 May, 01:01",
      location: "Douala, Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 2,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 3,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 4,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 5,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 6,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 7,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 8,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 9,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 10,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 11,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 12,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 13,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 14,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
    {
      id: 15,
      image: "https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp",
      title: " Chaussure",
      time: "Now",
      location: " Cameroun",
      description:
        " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
      company: "Cameroun Market place",
    },
  ];

  
const Article = ( ) => { 

// const [product , setProduts] = useEffect([]);

useEffect( () => {
LoadProducts();
}, []);
const LoadProducts= async ()=>{
  const result =await axios.get("http://localhost:8080/public/products/all")
  console.log(result);
}

  return (
    <section class=" justify-center py-20">
        <Search/>
    <h1 class="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Business Accomodations<span class="text-blue-600">.</span></h1>
    <div class="mx-auto justify-center grid max-w-screen-xl  grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 item ">
     {
        Data.map(
            ( {id, image ,title , location, description,company}) =>{
                return(
                    <article key={id} class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <a href="#">
                      <div class="relative flex items-end overflow-hidden rounded-xl">
                        <img src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="Hotel Photo" />
                        <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span class="text-slate-400 ml-1 text-sm">4.9</span>
                        </div>
                      </div>
              
                      <div class="mt-1 p-2">
                        <h2 class="text-slate-700">{title}</h2>
                        <p class="text-slate-400 mt-1 text-sm">{location}</p>
              
                        <div class="mt-3 flex items-end justify-between">
                          <p>
                            <span class="text-lg font-bold text-blue-500">$850</span>
                            {/* <span class="text-slate-400 text-sm">/night</span> */}
                          </p>
                          
              
                          <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                          </div>
                          
                        </div>
                        <p class="text-slate-400 mt-1 text-sm">Monday 1 May, 01:01</p>
                      </div>
                    </a>
                  </article>
                )
            }
        )
     }
     
 
    </div>
  </section>
  
  )
}

export default Article