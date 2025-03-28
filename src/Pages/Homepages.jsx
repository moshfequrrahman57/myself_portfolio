

import About from '../Components/About';
import Contact from '../Components/Contact';
import Layout from '../Components/Layout';
import Profile from '../Components/Profile';
import Project from '../Components/Project';
import Services from '../Components/Services';
import Skills from '../Components/Skills';

const Homepages = () => {


 
    return (
       <Layout > 
       <Project/>
       <About/>
       <Contact/>
       </Layout>
    );
};

export default Homepages;