import { useCallback, useEffect, useRef, useState } from "react";
import Services from "./Services";
import Profile from "./Profile";
import Skills from "./Skills";
const Layout = (props) => {




 
  const [windowQuality,setWindowQuality]=useState(null);
  const [windowResized,setWindowResized]=useState(window.innerWidth);
    const nav=useRef();
    const mode=useRef();
    const dark_img=useRef();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',(event)=>{
      const newColorMode=event.matches? 'dark':'light';
      console.log(newColorMode);
      setDarkMode('system');
    });

// layout scrolling
    const layout_div=useRef();
    const moveToSkill=()=>{
      console.log("Skill button clicked");
      layout_div.current.scrollTop=530;
      nav.current.classList.toggle("clip-end-dup");
    }
    
    const moveToHome=()=>{
      console.log("Home button clicked");
      layout_div.current.scrollTop=0;
      nav.current.classList.toggle("clip-end-dup");
    }
    const moveToService=()=>{
      console.log("Service button clicked");
      if(windowQuality===6){
        console.log("mobile");
        layout_div.current.scrollTop=2250;
      }
      else if(windowQuality===5){
        console.log("medium");
        layout_div.current.scrollTop=1450;
      }
      else if(windowQuality===4){
        console.log("large");
        layout_div.current.scrollTop=1200;
      }
      // layout_div.current.scrollTop=0;
      nav.current.classList.toggle("clip-end-dup");
    }

    const moveToProjects=()=>{
      console.log("Project button clicked");
      if(windowQuality===6){
        console.log("mobile");
        layout_div.current.scrollTop=2850;
      }
      else if(windowQuality===5){
        console.log("medium");
        layout_div.current.scrollTop=2050;
      }
      else if(windowQuality===4){
        console.log("large");
        layout_div.current.scrollTop=1750;
      }
      // layout_div.current.scrollTop=0;
      nav.current.classList.toggle("clip-end-dup");
    }
    const checkToProjects=()=>{
      console.log("Project button clicked");
      if(windowQuality===6){
        console.log("mobile");
        layout_div.current.scrollTop=2850;
      }
      else if(windowQuality===5){
        console.log("medium");
        layout_div.current.scrollTop=2050;
      }
      else if(windowQuality===4){
        console.log("large");
        layout_div.current.scrollTop=1750;
      }
      // layout_div.current.scrollTop=0;
    
    }
    const moveToAbout=()=>{
      console.log("About button clicked");
      if(windowQuality===6){
        console.log("mobile");
        layout_div.current.scrollTop=5750;
      }
      else if(windowQuality===5){
        console.log("medium");
        layout_div.current.scrollTop=5550;
      }
      else if(windowQuality===4){
        console.log("large");
        layout_div.current.scrollTop=3400;
      }
      // layout_div.current.scrollTop=0;
      nav.current.classList.toggle("clip-end-dup");
    }
    const moveToContact=()=>{
      console.log("Contact button clicked");
      if(windowQuality===6){
        console.log("mobile");
        layout_div.current.scrollTop=6850;
      }
      else if(windowQuality===5){
        console.dir(layout_div.current);
        layout_div.current.scrollTop=6600;
      }
      else if(windowQuality===4){
        console.log("large");
        layout_div.current.scrollTop=4200;
      }
      // layout_div.current.scrollTop=0;
      nav.current.classList.toggle("clip-end-dup");
    }
 
    useEffect(()=>{
      (
        ()=>{
          setDarkMode('system');
          getBreakPoint();

         function handleSize(){
          setWindowResized(window.innerWidth);
         }
        
         window.addEventListener('resize',handleSize);
         console.log(`wind widhth: ${windowResized}`);
         return ()=> window.removeEventListener("resize",handleSize);
        

         
       }

      )()
    },[windowQuality,windowResized])
   const setDarkMode=(name)=>{
    console.log(name);
    
     if(name==='system'){
      
      console.dir(window.matchMedia('prefers-color-scheme:dark'));
      if((window.matchMedia('(prefers-color-scheme: dark)').matches)){
        console.log("System dark mode");
        document.documentElement.classList.add('dark');
        dark_img.current.src="/dark_mode.svg";
      }
      else{
        console.log("System light mode");
        if(document.documentElement.classList.contains('dark')){
          document.documentElement.classList.remove('dark');
        }
        dark_img.current.src="/light_mode.svg";
      }
     }
     else if(name==='light'){
      dark_img.current.src="/light_mode.svg";
      console.log('Light mode');
      if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        
      }
     }
     else if(name==='dark'){
      dark_img.current.src="/dark_mode.svg";
      console.log('Dark Mode');
      document.documentElement.classList.add('dark');
      
     }
   }





/// break point start
function getBreakPoint(){
  console.log("Break point function");
  const breakpoints = {
    'xs': '(max-width: 639px)',
    'sm': '(min-width: 640px) and (max-width: 767px)',
    'md': '(min-width: 768px) and (max-width: 1023px)',
    'lg': '(min-width: 1024px) and (max-width: 1279px)',
    'xl': '(min-width: 1280px)',
  };
  
 
  for(const breakpoint in breakpoints){
    if (window.matchMedia(breakpoints[breakpoint])
              .matches){
        //console.log(`${breakpoint}`);
        //console.log(`${window.innerWidth} px`);
        if(breakpoint==='sm'){console.log("sm");setWindowQuality(5);}
        else if(breakpoint==='xs'){console.log('xs'); setWindowQuality(6);}
        else if(breakpoint==='md' || breakpoint==='lg' || breakpoint==='xl'){
        console.log("md | lg | xl"); setWindowQuality(4);
        }
       
        // break;
    }
   
  }
  
}
/// breakpoint end

// const [isOpen,setIsOpen]=useState(false);
const handleOpen=useCallback(()=>{
  console.log("handle open is control by child profile");
  checkToProjects();
})




    return (
      
        <div ref={layout_div}  className="overflow-y-auto scroll-smooth h-screen m-0 p-0 box-border bg-gradient-to-r from-white to-white  dark:from-slate-600 dark:to-slate-900 ">
        <header className=" shadow-lg m-3 w-[calc(100%-24px)] fixed top-0 left-0 rounded-lg border
        flex items-center justify-between bg-gradient-to-r from-slate-500  to-white z-30 dark:from-slate-900 dark:to-slate-400">
            <figure><a href="" target="_self" className="cursor-pointer">
                <img src="/signature-solid-svgrepo-com.svg" alt="logo" width={50} className="w-14 h-14 p-1 dark:filter_color_semi_white"/>
                </a></figure>
            <div className="flex md:w-3/4 items-center justify-around">
                <ul ref={nav} className="absolute md:relative top-[68px] md:top-0 right-0 
                md:m-0 w-full h-[calc(100vh-80px)] md:w-full md:h-fit
                rounded-t-lg shadow-lg md:rounded-none md:shadow-none 
                flex-col md:flex-row   md:items-center  bg-gradient-to-r from-slate-400 dark:from-slate-900 to-slate-50 dark:to-slate-400 
                justify-start md:bg-none overflow-auto md:overflow-hidden
               flex  clip-start md:[clip-path:none] 
               transition-all duration-[1000ms] md:duration-0 ease-in-out z-40">
              <div className="md:hidden h-fit">
                <img src="/moshfequr_personal.jpg" alt="moshfequr" className="w-full h-32  rounded-t-lg object-cover object-top  " />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center m-4 pb-3 md:pb-0 md:m-0 border-b-2 border-slate-500 md:border-none">
                   <button onClick={moveToHome} href="#" className="nav_item" >
                    <img src="/home-svgrepo-com.svg" alt="home" className="ul_svg" />
                    <span className="ul_span">Home</span>
                   </button>
                   <button onClick={moveToSkill} href="#" className="nav_item" >
                    <img src="/skill.svg" alt="skill" className="ul_svg" />
                    <span className="ul_span">Skill</span>
                   </button>
                   <button onClick={moveToService} href="#" className="nav_item" >
                    <img src="/services.svg" alt="services" className="ul_svg" />
                    <span className="ul_span">Services</span>
                   </button>
                   <button onClick={moveToProjects} href="#" className="nav_item" >
                    <img src="/project-21.svg" alt="projects" className="ul_svg" />
                    <span className="ul_span">Projects</span>
                   </button>
                   <button onClick={moveToAbout} href="#" className="nav_item" >
                    <img src="/about-successful-man-svgrepo-com.svg" alt="about" className="ul_svg" />
                    <span className="ul_span">About Me</span>
                   </button>
                   <button onClick={moveToContact} href="#" className="nav_item" >
                    <img src="/contact-svgrepo-com.svg" alt="contact" className="ul_svg" />
                    <span className="ul_span">Contact</span>
                   </button>  
                
              </div>
              <div className="md:hidden w-[calc[100%-32px]] flex items-center justify-start ml-4 ">
                  <button  className="my-1 px-5 py-1 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="https://rpoxut7ngy76jkgp.public.blob.vercel-storage.com/resume%20moshfequr%20frontend-ye5vvsIjEcJ4Thj9GmMDXXqXeFXbx4.pdf" target="_blank">Resume</a></button>
              </div>
              
              <a href="#" className="md:hidden font-bold text-orange-800 dark:text-white text-wrap font-mono mx-4 w-[calc(100%-32px)] 
               hover:text-blue-600 dark:hover:text-red-100 flex items-center justify-start mt-3">
                <img src="/gmail-svgrepo-com.svg" alt="gmail" className="w-5 h-5 mr-2 dark:filter_color_blue" />
                <span className="text-xl">moshfequrrahman57@gmail.com</span>
                </a>
                <a href="#" className="md:hidden font-bold text-gray-600 dark:text-slate-300 text-wrap font-mono mx-4 w-[calc(100%-32px)] 
                 hover:text-gray-700 dark:hover:text-red-100 flex items-center justify-start mt-3">
                <img src="/contact-svgrepo-com.svg" alt="gmail" className="w-5 h-5 mr-2 dark:filter_color_blue" />
                <span className="text-xl">+88-01744975767</span>
                </a>
              <div className="md:hidden mx-4 flex items-center justify-start mb-3 mt-3">
              <a href="https://github.com/moshfequrrahman57" target="_blank"> <img src="/github-svgrepo-com.svg" alt="github" className="important_link_design" /></a>
              <a href="https://www.facebook.com/kingdomOfNoman" target="_blank"> <img src="/facebook-svgrepo-com (1).svg" alt="facebook" className="important_link_design" /></a>
              <a href="https://www.linkedin.com/in/moshfequr-rahman-a12aa5b7/" target="_blank"> <img src="/linkedin-round-svgrepo-com.svg" alt="linkedIn" className="important_link_design" /></a>
              <a href="https://www.instagram.com/moshfequrrahman57/" target="_blank"> <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" className="important_link_design" /></a>
              </div>
              
            </ul>
            <div 
            className="relative rounded-full border border-slate-100 shadow hover:bg-slate-50 dark:hover:bg-slate-50  mx-1 md:mx-14">
            <img ref={dark_img} onClick={()=>{
              mode.current.classList.toggle("active");
              console.log("Button mode click");
            }} src="/light_mode.svg" alt="dark" width={40} height={40} className="p-2 md:p-1 cursor-pointer"/>
            <div  ref={mode} className="hidden absolute w-28 h-fit -left-5 top-14 md:top-12  flex-col
            justify-start z-[60] rounded-lg bg-gradient-to-r from-slate-400 to-slate-50 dark:from-slate-600 dark:to-slate-400 p-2">
              <a onClick={()=>{
                setDarkMode("light");
                mode.current.classList.toggle("active");
              }} className="flex items-center text-black dark:text-white font-semibold cursor-pointer">
                <img  src="/light.svg" alt="light" className="w-8 h-8 p-1 mr-1 hover:filter_color_blue dark:filter_color_semi_white" />
                <span>Light</span>
              </a>
              <a onClick={()=>{
                setDarkMode("dark");
                mode.current.classList.toggle("active");
              }} className="flex items-center text-black dark:text-white font-semibold cursor-pointer">
                <img src="/dark.svg" alt="light" className="w-8 h-8 p-1 mr-1 hover:filter_color_blue dark:filter_color_semi_white" />
                <span>Dark</span>
              </a>
              <a onClick={()=>{
                setDarkMode("system");
                mode.current.classList.toggle("active");
              }} className="flex items-center text-black dark:text-white font-semibold cursor-pointer">
                <img  src="/system.svg" alt="light" className="w-8 h-8 p-1 mr-1 hover:filter_color_blue dark:filter_color_semi_white" />
                <span>System</span>
              </a>
            </div>
            </div>
            
            <button onClick={()=>{
                console.log("Button Clicked");
               nav.current.classList.toggle("clip-end-dup");
            }} className="relative rounded-full  hover:bg-slate-50 dark:hover:bg-slate-50 md:hover:bg-transparent mx-1 md:hidden">
            <img  src="/menu-dots-svgrepo-com.svg" alt="dark" width={40} height={40} className="p-1  md:mx-14 "/></button>
       
            </div>
            </header>

      
        <Profile  handleOpen={handleOpen}/>
        <Skills/>
        <Services windowQuality={windowQuality} windowWidth={windowResized}/>
        {props.children}
        </div>
     
        
    );
};

export default Layout;