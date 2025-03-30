import React, { useEffect } from 'react';

const Project_card = (props) => {

   useEffect(()=>{
    (
        ()=>{
            console.log(props.img_url);
        }
    )()
   },[])

    return (
        <div className=' w-full h-fit  bg-gray-50 dark:bg-gray-800 rounded-2xl mb-4'>
        <div className='flex flex-col md:flex-row'>
       <div className='relative md:shrink-0 md:basis-1/3 rounded-t-2xl md:rounded-none md:rounded-l-2xl '>
       <div className='absolute inset-0  rounded-t-2xl md:rounded-none md:rounded-l-2xl  bg-black bg-opacity-50
       opacity-100 hover:opacity-0 transition-opacity'>
       
       </div>
        <img src={props.img_url} alt="foodie" className='rounded-t-2xl md:rounded-none md:rounded-l-2xl  w-full h-full ' />
        </div>
        <div className='md:grow  flex flex-col p-4'>
           <div className='flex justify-between'>
           <p className='text-3xl dark:text-white font-serif'>{props.title}</p>
           <div className='flex space-x-4'>
           <a href="" target="_blank"  className="p-2 bg-sky-400 rounded-full hover:bg-sky-900 transition-colors">
            <img src="/github-svgrepo-com.svg" alt="git" className='w-6 h-6 rounded-full hover:filter_color_semi_white' />
            </a>
            <a  target="_blank"   className="p-2 bg-sky-400  rounded-full hover:bg-sky-900 transition-colors">
            <img src="/external-link-svgrepo-com.svg" alt="live" className='w-6 h-6 rounded-full hover:filter_color_semi_white' />
               </a>
           </div>
           </div>
           <div className='flex'><p className='font-mono font-bold'>{props.category}</p></div>
            <p className='dark:text-white'>{props.des}</p>
        </div>
        </div>
      
    </div>
    );
};

export default Project_card;