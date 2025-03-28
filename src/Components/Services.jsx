import React, { useEffect, useRef, useState } from 'react';

const Services = (props) => {

  const slider=useRef();
  const slider_item=useRef();
  const one =useRef();
  const two =useRef();
  const three =useRef();
  const four =useRef();
  const five =useRef();
  const six =useRef();
  const scrollRight=()=>{
    console.log("Right button clicked");
    if(slidePosition<maxSlidePosition){
      let temp;
      slider.current.scrollLeft=slidePosition*(slider_item.current.clientWidth+20);
      temp=slidePosition*(slider_item.current.clientWidth+20);
      console.log(`temp: ${temp}`);
      slidePosition=slidePosition+1;
      setPaginationColor();
      scrollValue=temp;
    }
  }
  const scrollLeft=()=>{
    console.log("Left button clicked");
    if(slidePosition>1){
      let temp;
      slider.current.scrollLeft=scrollValue-(slider_item.current.clientWidth+20);
      temp=scrollValue-(slider_item.current.clientWidth+20);
      console.log(`temp: ${temp}`);
      slidePosition=slidePosition-1;
     setPaginationColor();
      scrollValue=temp;
    }
  }

  const setPaginationColor=()=>{
    if(slidePosition===1){
      one.current.style.backgroundColor="black";
      two.current.style.backgroundColor="yellow";
      three.current.style.backgroundColor="yellow";
      four.current.style.backgroundColor="yellow";
      five.current.style.backgroundColor="yellow";
      six.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===2){
      one.current.style.backgroundColor="yellow";
      two.current.style.backgroundColor="black";
      three.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===3){
      two.current.style.backgroundColor="yellow";
      three.current.style.backgroundColor="black";
      four.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===4){
      three.current.style.backgroundColor="yellow";
      four.current.style.backgroundColor="black";
      five.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===5){
      four.current.style.backgroundColor="yellow";
      five.current.style.backgroundColor="black";
      six.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===6){
      five.current.style.backgroundColor="yellow";
      six.current.style.backgroundColor="black";

    }
  }

  let maxSlidePosition=props.windowQuality;
  let windowWidth=props.windowWidth;
let slidePosition=1;
let scrollValue=0;
 
console.log(`Slide pos qual ${slidePosition}`);
console.log(`scroll val qual ${scrollValue}`);

  useEffect(()=>{
    (
      ()=>{
        console.log("service useeffect");
   
        console.log(`max val qual effect ${maxSlidePosition}`);
       slider.current.scrollLeft=0;
       one.current.style.backgroundColor="black";
       two.current.style.backgroundColor="yellow";
       three.current.style.backgroundColor="yellow";
       four.current.style.backgroundColor="yellow";
       five.current.style.backgroundColor="yellow";
       six.current.style.backgroundColor="yellow";
       
       const name=document.getElementById("service_div");
       //  console.log(name);
   console.log("Ok");
   //console.dir(texts);
    const observer=new IntersectionObserver((items)=>{
     items.forEach((item)=>{
       if(item.isIntersecting){
         console.dir("add service");
        item.target.classList.add('anim_ser_after');
       }
       else{
         console.log(`remove service`);
         item.target.classList.remove('anim_ser_after');
       }
     })
    },
   {threshold:0.1});
   
    observer.observe(name);


      }
    )()
  },[maxSlidePosition,windowWidth])


  ///touch section starts

let touchstartX,touchstartY,touchendX,touchendY;

const touch_start=(event)=>{
   touchstartX = event.changedTouches[0].screenX;
   touchstartY = event.changedTouches[0].screenY;
   console.log(touchstartX,touchstartY);
 }
 const touch_end=(event)=>{
   touchendX = event.changedTouches[0].screenX;
   touchendY = event.changedTouches[0].screenY;
   console.log(touchendX,touchendY);
   handle_gesture();
 }

function handle_gesture(){
   if (touchendX < touchstartX) {
     if(Math.abs(touchendX-touchstartX)>20){
       console.log('Swiped Left');
       
       scrollRight();
     }
 }
 if (touchendX > touchstartX) {
   if(Math.abs(touchendX-touchstartX)>20){
     console.log('Swiped Right');
     scrollLeft();
   }
 }

 }

///touch section end

    return (
  <div className=' flex flex-col items-start justify-center w-[calc(100%-40px)] h-fit mx-5 my-20'>
         <p id='skill_title' className='font-bold text-4xl my-7'>Services</p>
           <ul id="service_div" onTouchStart={touch_start} onTouchEnd={touch_end}    ref={slider} className='animation_service delay-500 list-none  rounded-lg 
           grid grid-flow-col grid_columns_1 sm:grid_columns_2 md:grid_columns_3 gap-4 scroll-smooth overflow-hidden  h-fit w-full
           '>
            
             

            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/design-systems-svgrepo-com.svg" alt="frontend" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Frontend website Devlopment</p>
           <p>Skilled in front-end development, proficient in creating component based web interfaces using  popular frameworks like 
           <a href="https://react.dev/" target='_blank' className='underline text-blue-800 hover:text-red-600 dark:hover:text-white'> React </a>
           & <a href="https://v3.tailwindcss.com/" target='_blank' className='underline text-blue-800 hover:text-red-600 dark:hover:text-white'>Tailwindcss.</a>
           </p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/responsive-svgrepo-com.svg" alt="responsive" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Responsive Design</p>
           <p>Experienced in creating responsive designs that ensure optimal user experience across all devices and screen sizes, utilizing techniques like media queries, flexible grids, and mobile-first design principles.
           </p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/api-svgrepo-com.svg" alt="api" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>API Integration</p>
           <p>Proficient in API integration, enabling seamless communication between front-end applications and back-end services using RESTful APIs.
           </p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/photoshop-svgrepo-com.svg" alt="ps" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Work with photoshop</p>
           <p>Proficient in Adobe Photoshop for image editing, retouching, and graphic design.
           </p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/github-svgrepo-com.svg" alt="git" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Github</p>
           <p>Git is a version control system that tracks changes in code, allowing collaboration, branching, and rollback. I use Git for managing code efficiently, handling repositories, and collaborating through commits, pushes, and merges.
           </p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/datastore-svgrepo-com.svg" alt="backend" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Backend Service</p>
           <p>Skilled in backend website development using APIs, databases, and server-side frameworks like <a href="https://nextjs.org/" target='_blank' className='underline text-blue-800 hover:text-red-600 dark:hover:text-white'>Next.js</a> for seamless functionality.
           </p>
            </div>
            </li>
            
           </ul>
           <div className='flex flex-col items-center w-full'>
        <div className=' bottom-0  left-[50%-96px] md:left- flex items-center mb-3 mt-3'>
        <img onClick={scrollLeft} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow_left" className=' w-10 h-10   rounded-full border-2 cursor-pointer hover:filter_color_blue' />
        <div ref={one} className='w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1 '></div>
          <div ref={two}  className='w-3 md:w-5 h-1 border bg-[#CBD5E1] mx-1'></div>
          <div ref={three}  className='w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <div ref={four}  className='w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <div ref={five}  className=' md:hidden w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <div ref={six} className=' sm:hidden w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <img onClick={scrollRight} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow right" className=' w-10 h-10  rotate-180 rounded-full border-2 cursor-pointer hover:filter_color_blue' />
         </div>
         </div>
        
  </div>
    );
};

export default Services;