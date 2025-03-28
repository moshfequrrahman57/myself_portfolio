
import Project_card from './Project_card';

const Project = () => {

    let description={
        foodie: "This is a simple restaurant food item management website.  This is a dynamic website all  data of the website is Inherited from API. Here I use dummy Jason API. This project is built by React and Tailwindcss.  inside the project you can see the component base structure and the component is managed by react  hooks.  the project is fully designed by Tailwindcss. Here I develop category  navigation. this website is fully responsive. Check out in my project  externally linked menu and github repository for more details inside about project.",
        snek: "This is also a simple responsive navbar project.   Inside the porject you can see multiple categories are composed by multiple items and sub items. Here used multiple mouse event actions. When Mouse is placed inside the drop down then drop stays and when mouth is outside the drop down the drop down is vanished.  you can see in the mobile device the category is extended by each compost items Is bill by Tailwindcss v3.",
        login: "This is simple login design page.This project is prominent  by its input field design which  is developed by Tailwindcss v3. In desktop view two sections are aligned by row and in mobile  devices two sections are aligned by column. Here  sample login user id (abc@hello.com) and password(123)  just for view checking.Type wrong for arrow message view.",
        portfolio: "This is my portfolio project. This project is developed by react and Tailwindcss.  A lot of transactional operations  reflect here which is developed by Tailwindcss. Animating navbar is developed by clip path and transactions. Multiple components, multiple states and multiple hooks are managed by react. The most prominent think is selector dark mode manually   controlled yourself that link with device theme color mode.",
       
    }

    return (
        <div className=' mx-5 my-2 w-[calc(100%-40px)]'>
        <header className='text-4xl font-extrabold mb-5'>Projects</header>
        <Project_card img_url="/foodie.PNG" des={description.foodie} title="Foodie" category="React &#8226; Tailwindcss &#8226; API"/>
        <Project_card img_url="/snek.png" des={description.snek} title="Snek" category="Tailwindcss &#8226; JS"/>
        <Project_card img_url="/login.PNG" des={description.login} title="Log In" category="Tailwindcss &#8226; JS"/>
        <Project_card img_url="/portfolio.PNG" des={description.portfolio} title="Portfolio" category="React &#8226; Tailwindcss"/>

      
           
        </div>
    );
};

export default Project;