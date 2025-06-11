
import Project_card from './Project_card';

const Project = () => {

    let description={
        foodie: "This is a simple restaurant food item management website.  This is a dynamic website all  data of the website is Inherited from API. Here I use dummy Jason API. This project is built by React and Tailwindcss.  inside the project you can see the component base structure and the component is managed by react  hooks.  the project is fully designed by Tailwindcss. Here I develop category  navigation. this website is fully responsive. Check out in my project  externally linked menu and github repository for more details inside about project.",
        snek: "This is also a simple responsive navbar project.   Inside the porject you can see multiple categories are composed by multiple items and sub items. Here used multiple mouse event actions. When Mouse is placed inside the drop down then drop stays and when mouth is outside the drop down the drop down is vanished.  you can see in the mobile device the category is extended by each compost items Is bill by Tailwindcss v3.",
        login: "This is simple login design page.This project is prominent  by its input field design which  is developed by Tailwindcss v3. In desktop view two sections are aligned by row and in mobile  devices two sections are aligned by column. Here  sample login user id (abc@hello.com) and password(123)  just for view checking.Type wrong for arrow message view.",
        portfolio: "This is my portfolio project. This project is developed by react and Tailwindcss.  A lot of transactional operations  reflect here which is developed by Tailwindcss. Animating navbar is developed by clip path and transactions. Multiple components, multiple states and multiple hooks are managed by react. The most prominent think is selector dark mode manually   controlled yourself that link with device theme color mode.",
        flashback: "This is my Next.js project. This is simple photo gallery project. Here I used Nextjs App Page Structure. Beside there i used React for project components. Tailwindcss is used for designing. There are several pages. This project is under construction. In future account login system and authentication will be developed. This project is fully responsive. Here tailwind 4.1.7 is used. So graphical view will not rendering on windows 7. For proper viewing use windows 10 or later version browser.",
        alpha: "This is my next.js project. This project is an composite navigation that contains of dropdown navbar. This project is fully responsive. I used Tailwind Css for designing this project. This navbar can be used for any kind of other websites. Here i also used animation when components are intersecting the window. This project is under working. Navigation components will be broght from db in future. Here React is used for maning component and layout based architecture. This navigation is used as master layout as navigation can be viewed on all pages."
        
    }
    let project_git_link={
        foodie:"https://github.com/moshfequrrahman57/foodie",
        snek: "https://github.com/moshfequrrahman57/Project-1-Responsive-Extended-Navigation",
        login:"https://github.com/moshfequrrahman57/Log-In",
        portfolio:"https://github.com/moshfequrrahman57/myself_portfolio",
        flashback: "https://github.com/moshfequrrahman57/flashback",
        alpha: "https://github.com/moshfequrrahman57/alpha"
    }
    let project_live_link={
        foodie:"https://foodie-eight-green.vercel.app/",
        snek: "https://project-1-responsive-extended-navigation.vercel.app/",
        login:"https://log-in-flax.vercel.app/",
        portfolio:"https://myself-portfolio.vercel.app/",
        flashback: "https://flashback-iota.vercel.app/",
        alpha: "https://alpha-eta-red.vercel.app/"
    }

    return (
        <div className=' mx-5 my-2 w-[calc(100%-40px)]'>
        <header className='text-4xl font-extrabold mb-5 text-black dark:text-white'>Projects</header>
        <Project_card img_url="/foodie.PNG" glink={project_git_link.foodie} llink={project_live_link.foodie} des={description.foodie} title="Foodie" category="React &#8226; Tailwindcss &#8226; API"/>
        <Project_card img_url="/snek.png" glink={project_git_link.snek} llink={project_live_link.snek} des={description.snek} title="Snek" category="Tailwindcss &#8226; JS"/>
        <Project_card img_url="/login.PNG" glink={project_git_link.login} llink={project_live_link.login} des={description.login} title="Log In" category="Tailwindcss &#8226; JS"/>
        <Project_card img_url="/portfolio.PNG" glink={project_git_link.portfolio} llink={project_live_link.portfolio} des={description.portfolio} title="Portfolio" category="React &#8226; Tailwindcss"/>
         <Project_card img_url="/flashback.PNG" glink={project_git_link.flashback} llink={project_live_link.flashback} des={description.flashback} title="Flashback" category="Next.js &#8226; React &#8226; Tailwindcss"/>
        <Project_card img_url="/alphaa.PNG" glink={project_git_link.alpha} llink={project_live_link.alpha} des={description.alpha} title="Alpha" category="Next.js &#8226; React &#8226; Tailwindcss"/>

      
           
        </div>
    );
};

export default Project;