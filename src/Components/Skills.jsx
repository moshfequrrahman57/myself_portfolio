import React from 'react';
import { useEffect} from 'react';
const Skills = () => {

    useEffect(()=>{
      (
        ()=>{
    const elements=document.querySelectorAll("#skill_main > div");
   // console.dir(elements);
        //  console.log(name);
    console.log("Ok");
    //console.dir(texts);
     const observer2=new IntersectionObserver((items)=>{
      items.forEach((item)=>{
        if(item.isIntersecting){
          console.dir("add skill");
         item.target.classList.add('anim_skill');
        }
        else{
          console.log(`remove skill`);
          item.target.classList.remove('anim_skill');
        }
      })
     },
    {threshold:0.1});

    elements.forEach(name=> observer2.observe(name));
    const skill_title=document.getElementById('skill_title');
    observer2.observe(skill_title);
        }
      )()
    },[])

    return (
        <div  className='overflow-x-hidden mx-5 w-[calc(100%-40px)] h-fit overflow-y-auto scroll-smooth flex flex-col items-start justify-between py-3'>
            <p id='skill_title' className='font-bold text-4xl animation_before my-7 text-black dark:text-white'>Skills</p>
            <div id='skill_main' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7'>
            <div className="skill_card animation_skill delay-200 ">
                <img src="/html-5-svgrepo-com.svg" alt="html5" className='w-14 h-14' />
                <p className='font-bold text-2xl text-black dark:text-white'>HTML 5</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;Semantic Elements &#8259;
                Web Storage &#8259; SVG &#8259; Canvas &#8259; Multimedia Supports.
                 </p>
                 </div>
            <div className="skill_card animation_skill delay-300 ">
                <img src="/css-3-svgrepo-com.svg" alt="CSS 3" className='w-14 h-14' />
                <p className='font-bold text-2xl text-black dark:text-white'>CSS 3</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;Browser compatibility &#8259;
                Pseudo Elements &#8259; Responsive Design &#8259; 3D Transformation &#8259; Animation.
                 </p> </div>
            <div className="skill_card animation_skill delay-500 ">
                <img src="/tailwind-svgrepo-com.svg" alt="Tailwind" className='w-14 h-14' />
                <p className='font-bold text-2xl text-black dark:text-white'>Tailwindcss</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;Dark Mode &#8259;
                Utility Class &#8259; Theme Customization &#8259; Component Layer.
                 </p></div>
            <div className="skill_card animation_skill delay-700 ">
                <img src="/js-svgrepo-com.svg" alt="Js" className='w-14 h-14' />
                <p className='font-bold text-2xl text-black dark:text-white'>JS ES6</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;Arrow Function &#8259;
                Map &#8259; Promises &#8259; Spread Operator. &#8259; Bubbling.
                 </p></div>
            <div className="skill_card animation_skill delay-300 ">
                <img src="/react-svgrepo-com.svg" alt="React" className='w-14 h-14' />
                <p className='font-bold text-2xl text-black dark:text-white'>React</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;Rendering Component &#8259;
                Functional Component &#8259; State Management &#8259; useEffect &#8259; useState &#8259; useRef.
                 </p></div>
            <div className="skill_card animation_skill delay-200 ">
                <img src="/api-svgrepo-com-color.svg" alt="api" className='w-14 h-14' />
                <p className='font-bold text-2xl text-black dark:text-white'>API Integration</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;JSON &#8259;
                AXIOS &#8259; Async &#8259; Post-man.
                 </p></div>
            <div className="skill_card animation_skill delay-700 ">
                <img src="/next-js-svgrepo-com.svg" alt="photoshop" className='w-14 h-14 dark:filter_color_semi_white' />
                <p className='font-bold text-2xl text-black dark:text-white'>Next.js</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;Page Router &#8259;
                Image Optimization &#8259; Data Fetching &#8259; SSR & CSR.
                 </p></div>
            <div className="skill_card animation_skill delay-500 ">
                <img src="/github-svgrepo-com.svg" alt="git" className='w-14 h-14  dark:filter_color_semi_white' />
                <p className='font-bold text-2xl text-black dark:text-white'>Git</p>
                <p className='text-lg text-wrap text-gray-700 dark:text-white'>&#10687;&#160;Github &#8259; Commit &#8259; Git branch. 
                 </p></div>

           
            
            </div>

        </div>
    );
};

export default Skills;