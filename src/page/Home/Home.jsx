import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import Saltbae from "../../assets/saltbae.png";
import Biriyani from "../../assets/biriyani1.png";
import Recipes from "../Recipe/Recipes";
import ChefCard from "../Chefs/ChefCard";



const Home = () => {
  return (
    <div>
        <div className="my-container flex flex-col items-center justify-between lg:flex-row bg-gray-100">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Discover Restuarant And Food
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            You will taste an exquisite menu  You will be overwhelmed with fantastic smells  Everything you touch will be enchanting  
            Everything you hear will be fascinating  You will see glorious people, delightful presentations and incredible shows  
            Be entertained, amused, and pampered  Experience luxury dining like never before  Guaranteed
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/chefs" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Our Chefs</p>
                
              </div>
            </Link>
            <Link
              to="/blog"
              className="btn inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-blue-700"
            >
              Our Blogs
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Saltbae}
            className="w-full lg:ml-auto  sm:h-96 bg-gradient-to-t relative"
            alt=""
          />

          

        </div>

      </div>
      <Recipes></Recipes>
      <ChefCard></ChefCard>
    </div>
  );
};

export default Home;
