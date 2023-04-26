import React from "react";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../Assets/logo1.png";
import Search from "./Search";


const Data = [
  {
    id: 1,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 2,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 3,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 4,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 5,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 6,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 7,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 8,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 9,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 10,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 11,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 12,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 13,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 14,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
  {
    id: 15,
    image: logo1,
    title: " Chaussure",
    time: "Now",
    location: " Cameroun",
    description:
      " Lorem ipsum , dolor sit amet consecteur aduipojsbnjn elit. Corrpti, laborisum",
    company: "Cameroun Market place",
  },
];

const Jobs = () => {
  return (
    <div className="container">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-20 px-20">
        <Search/>
        {Data.map(
          ({ id, image, title, time, location, description, company }) => {
            return (
              <div
                key={id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-bleuColors  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                
                <span className="flex  justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    {" "}
                    <BiTimeFive /> Now
                  </span>
                </span>
                <h6 className="text-[#ccc]">{location}</h6>
                <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {description}
                </p>
                <div className="company flex items-center gap-2">
                  <img src={image} alt="Company Logo" className="w-[10%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                    {company}
                  </span>
                </div>
                {/* <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                  Apply Now
                </button> */}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
