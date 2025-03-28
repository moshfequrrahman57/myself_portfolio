
import { useRef } from 'react';

const Contact = () => {
    const thankyou =useRef();


    return (
        <div id='about_main' className=' mx-5 my-16 w-[calc(100%-40px)] h-fit  bg-gray-50 dark:bg-gray-800 relative rounded-xl p-4'>
           
           <div className='flex flex-col md:flex-row md:flex-auto '>
           <div className='md:basis-1/2 flex flex-col md:justify-around p-0 md:p-3'>
                <p className='dlText'>Contact with me</p>
                <p className='dlsText my-3'>I am available on Remote & Full-time work. If you mind connect with me. </p>
                <div className=" flex items-center justify-start mb-3 mt-3">
              <a href="#"> <img src="/github-svgrepo-com.svg" alt="github" className="important_link_design" /></a>
              <a href="#"> <img src="/facebook-svgrepo-com (1).svg" alt="facebook" className="important_link_design" /></a>
              <a href="#"> <img src="/linkedin-round-svgrepo-com.svg" alt="linkedIn" className="important_link_design" /></a>
              <a href="#"> <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" className="important_link_design" /></a>
              </div>
              <a href="#" className="text-sm md:text-xl font-mono font-bold text-orange-800 dark:text-white text-wrap  
               hover:text-blue-600 dark:hover:text-red-100 flex items-center justify-start mt-3">
                <img src="/gmail-svgrepo-com.svg" alt="gmail" className="w-8 h-8 mr-[2px] md:mr-2 dark:filter_color_blue" />
                <span>moshfequrrahman57@gmail.com</span>
                </a>
              <a href="#" className="text-xl font-mono font-bold text-gray-600 dark:text-slate-300 text-wrap 
                 hover:text-gray-700 dark:hover:text-red-100 flex items-center justify-start mt-3">
                <img src="/contact-svgrepo-com.svg" alt="gmail" className="w-8 h-8 mr-2 dark:filter_color_blue" />
                <span>+88-01744975767</span>
                </a>
            </div>


            <div className=' md:basis-1/2 mt-4 md:mt-0 md:p-4'>
               < >
                <div className='flex flex-col '>
                    <label htmlFor="name_input" className='dlsText'>Name</label>
                    <input id="name_input" type="text" className=' my-1 border border-slate-400 rounded-sm ' />
                </div>
                <div className='flex flex-col '>
                    <label htmlFor="email_input" className='dlsText'>Email</label>
                    <input type="email" name="email_input" id="email_input" className='border my-1 border-slate-400 rounded-sm' />
                </div>
                <div className='flex flex-col '>
                    <label htmlFor="email_input" className='dlsText'>Message</label>
                    <input type="text" className='border my-1 border-slate-400 rounded-sm' />
                </div>

                
                  <button  onClick={()=>{
                    thankyou.current.style.display="flex";
                  }}  className="mx-0  md:mx-3 my-2 px-3 py-2 font-semibold text-base  rounded-lg bg-cyan-50 hover:bg-cyan-600 
                hover:transition-colors text-black hover:text-white
                ring-2 ring-blue-400">Submit</button>
                <div ref={thankyou} onClick={()=>{
                    thankyou.current.style.display="none";
                }} className='hidden fixed top-0 left-0 bg-black w-full h-screen opacity-80
                 z-[100] flex-col items-center justify-center '>
                    <p className='animate-bounce text-3xl md:text-7xl font-bold text-white'>Thank You</p>
                    
                </div>
               </>
            </div>

           </div>
        </div>
    );
};

export default Contact;