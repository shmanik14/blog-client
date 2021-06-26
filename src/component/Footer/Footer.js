import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
            <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
               
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                        About Us
                    </div>             
                    <p className="text-xs uppercase text-gray-400 font-medium mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima veritatis dicta praesentium doloribus quos sit ipsa, illum, tenetur recusandae quasi maxime et velit quo iusto.</p>
                </div>

               
                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                        Quick Links
                    </div>

                    
                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Utility-First
                    </a>
                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Responsive Design
                    </a>
                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Hover, Focus, & Other States
                    </a>
                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Dark Mode
                    </a>
                </div>

                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                        Categories
                    </div>

                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Configuration
                    </a>
                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Theme Configuration
                    </a>
                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Breakpoints
                    </a>
                    <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Customizing Colors
                    </a>
                </div>

                <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                        Contact Us
                    </div>
                    <p className="text-xs uppercase text-gray-400 font-medium mb-6"><span><FontAwesomeIcon icon={faCalendarAlt} /></span>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <p className="text-xs uppercase text-gray-400 font-medium mb-6"><span><FontAwesomeIcon icon={faCalendarAlt} /></span>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    <p className="text-xs uppercase text-gray-400 font-medium mb-6"><span><FontAwesomeIcon icon={faCalendarAlt} /></span>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    
                </div>
            </div>

            <div class="pt-2">
                <div class="flex pb-5 px-3 m-auto pt-5 
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl">
                    <div class="mt-2">
                        © Copyright 2021. All Rights Reserved.
                    </div>

                    <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" class="w-6 mx-1">
                            <i class="uil uil-facebook-f"></i>
                        </a>
                        <a href="#" class="w-6 mx-1">
                            <i class="uil uil-twitter-alt"></i>
                        </a>
                        <a href="#" class="w-6 mx-1">
                            <i class="uil uil-youtube"></i>
                        </a>
                        <a href="#" class="w-6 mx-1">
                            <i class="uil uil-linkedin"></i>
                        </a>
                        <a href="#" class="w-6 mx-1">
                            <i class="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;