import React, { useEffect, useRef } from 'react';

const Profile = ({handleOpen}) => {
const main_div=useRef();
//const [clicked,isClicked]=useState(false);



useEffect(()=>{
  (
    ()=>{
      const name=document.querySelectorAll("#main > p");
    //  console.log(name);
console.log("Ok");
//console.dir(texts);
 const observer=new IntersectionObserver((items)=>{
  items.forEach((item)=>{
    if(item.isIntersecting){
      console.dir("add");
     item.target.classList.add('anim');
    }
    else{
      console.log(`remove`);
      item.target.classList.remove('anim');
    }
  })
 },
{threshold:0.1});
name.forEach(name=> observer.observe(name));
// observer.observe(name);

    }
  )()
},[])
    return (
        <div id='main' ref={main_div}  className='overflow-y-auto scroll-smooth mx-5 mt-32 mb-16 py-16 w-[100%-40px] h-fit flex flex-col items-start md:items-center justify-start  md:justify-start'>
           
            <p id='name' className=' text-4xl md:text-6xl font-extrabold animation_before mx-2 text-black dark:text-white'>Md. Moshfequr Rahman.</p>
            <p className='text-3xl md:text-5xl font-bold mt-2 animation_before delay-500 mx-2 text-black dark:text-white'>Frontend developer</p>
            
            <div className='text-2xl md:text-2xl font-bold mt-2 '>
                <p className='animation_before delay-1000 mx-2 text-black dark:text-white'>Expert in <img src="/react-svgrepo-com.svg" alt="react" className='w-8 h-8 inline-block' /> <a href="https://react.dev/" target='_blank' 
                className='underline text-black  dark:text-white hover:text-red-600'>React</a>   <span> & </span>
                 <img src="/next-js-svgrepo-com.svg" alt="react" className='w-8 h-8 inline-block' /> 
                 <a href="https://nextjs.org/" target='_blank' 
                className='underline text-black  dark:text-white hover:text-red-600'> Next.js</a>
                 </p>
            </div>
            <div className="flex items-center justify-start mt-5 mx-2 ">
              <a href="https://github.com/moshfequrrahman57" target='_blank'> <img src="/github-svgrepo-com.svg" alt="github" className="important_link_in_profile" /></a>
              <a href="https://www.facebook.com/kingdomOfNoman" target='_blank'> <img src="/facebook-svgrepo-com (1).svg" alt="facebook" className="important_link_in_profile" /></a>
              <a href="https://www.linkedin.com/in/moshfequr-rahman-a12aa5b7/" target='_blank'> <img src="/linkedin-round-svgrepo-com.svg" alt="linkedIn" className="important_link_in_profile" /></a>
              <a href="https://www.instagram.com/moshfequrrahman57/" target='_blank'> <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" className="important_link_in_profile" /></a>
              </div>
              <div className='flex mt-5 md:mt-8 w-full justify-start md:justify-center  md:gap-7'>
              <div className="flex items-center justify-center">
                  <button  className="my-1 mx-4 px-4 md:px-4 py-2 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="https://rpoxut7ngy76jkgp.public.blob.vercel-storage.com/Md.-Moshfequr-Rahman-%28Noman%29-FlowCV-Resume-20250609%20%283%29-isKRuvRC5wBYjnIWufV3TvhnyarZiL.pdf"
                target='_blank'>Resume</a></button>
              </div>
               <div className="flex items-center justify-center">
                  <button onClick={handleOpen} className="my-1 px-1 md:px-5 py-2 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="#">Checkout my Projects</a></button>
              </div> 
              </div> 
        </div>
    );
};

export default Profile;