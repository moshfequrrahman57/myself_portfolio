import React from 'react';

const About = () => {


    return (
        <div id='about_main' className=' mx-5 my-16 w-[calc(100%-40px)] h-fit  bg-gray-50 dark:bg-gray-800 relative rounded-xl p-4'>
           <img src="/moshfequr.jpg" alt="myself" className='w-24 h-24 absolute -top-10 right-10 hover:scale-125 rounded-full' />
            <p className='mt-10 mb-3 dlText'>Education:</p>
            <p className='dlsText'>BSc in <span className='bg-orange-100 dark:bg-emerald-500'> Electronics & communication Engineering (ECE) </span>  from Hajee Mohammad Danesh Science & Technology University (HSTU)
            </p>
           <div>
            <p className='pt-4 dlmText '>Job Experience</p>
            <div  className='  md:flex-row md:gap-4 flex flex-col gap-2 justify-between mt-2'>
                <p className='dlnText rounded-full bg-emerald-100   w-9 h-9 flex items-center justify-center font-bold'>1</p>
                <p className='dlxText md:basis-1/3 '>Lecturer of ICT</p>
                <p className='dlxText md:basis-1/3 '>Hollyland College </p>
                <p className='dlxText md:basis-1/3 md:flex md:justify-end'>July-2017 to Aug-2017 </p>
            </div>
            <div  className='  md:flex-row md:gap-4 flex flex-col gap-2  justify-between mt-2 '>
                <p className='dlnText rounded-full bg-emerald-100   w-9 h-9 flex items-center justify-center font-bold'>2</p>
                <p className='dlxText md:basis-1/3 '>Assistant Network Engineer</p>
                <p className='dlxText md:basis-1/3 '>Info Sarker Phase-III Project &#8259; Bangladesh Computer Council.</p>
                <p className='dlxText md:basis-1/3 md:flex md:justify-end '>Sep-2017 to July-2020</p>
            </div>
            <div  className='  md:flex-row md:gap-4 flex flex-col gap-2 justify-between mt-2'>
                <p className='dlnText rounded-full bg-emerald-100   w-9 h-9  flex items-center justify-center font-bold'>3</p>
                <p className='dlxText md:basis-1/3 '>Assistant Programmer</p>
                <p className='dlxText md:basis-1/3 '>Upazila ICT Training & Resource Center For Education  </p>
                <p className='dlxText md:basis-1/3 md:flex md:justify-end'>Aug-2020 to Current</p>
            </div>
            <p className='pt-4 dlmText '>Skill Experience</p>
            <div  className='  md:flex-row md:gap-4 flex flex-col gap-2 justify-between mt-2'>
                <p className='dlnText rounded-full bg-emerald-100   w-9 h-9 flex items-center justify-center font-bold'>1</p>
                <p className='dlxText md:basis-1/3  '><span className='bg-orange-100 dark:bg-emerald-500 p-[2px] '> React Next & Prisma</span></p>
                <p className='dlxText md:basis-1/3 '>Online Learning on <a href="https://ostad.app/" target='_blank' className=' underline text-red-400 hover:text-blue-400'>Ostad</a> </p>
                <p className='dlxText md:basis-1/3 md:flex md:justify-end'>Oct-2023 to Dec-2023</p>
            </div>
            
           </div>
             
           
        </div>
    );
};

export default About;