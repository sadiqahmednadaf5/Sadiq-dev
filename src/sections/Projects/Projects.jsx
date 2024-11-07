import styles from './ProjectsStyles.module.css';

import { useState } from 'react';
import ProjectCard from '../../common/ProjectCard';
import ProjectImgDemo from '../../assets/image.png';
import HouseImage from '../../images/House-renting-project-image.png';
import EcommerFront from '../../images/E-commerce-Frontend.png';
import StockTrading from '../../images/StockTrading.png'
import { useTheme } from '../../common/ThemeContext';


function Projects() {
  const { theme, toggleTheme } = useTheme();

  const [data, setData] = useState({HouseProject:["Nodejs", "MongoDB", "Bootstrap", "Expressjs","EJS"],
    EcommerceFront:["Reactjs", "React-Router", "css", "Vite"],
    AIImage:["OpenAI API","Nodejs", "Expressjs", "css","JavaScript"],
    StockTrading:["MongoDB","Express.js","React.js","Node.js"]

  });
 

  const projectCardTheamChange = theme == 'light' ? styles.seperatelight : styles.seperatedark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <div className={projectCardTheamChange}>
          <ProjectCard
            src={HouseImage}
            p="House-Renting-Platform"
            arrayList={data.HouseProject}
            description="Full Stack project built with Nodejs, MongoDB, Bootstrap, and deployed on 
            Netlify ."
            gitrepoUrl="https://github.com/sadiqahmednadaf5/House-Renting-Platform"
            liveUrl="https://house-renting-platform.onrender.com/listings"
          />
        </div>
        <div className={projectCardTheamChange}>
          <ProjectCard
            src={EcommerFront}
            p="Ecommerce Front-End"
            arrayList={data.EcommerceFront}
            description="Ecommerce built with Reactjs, React Router Dom, and added Front-end Functionality."
            gitrepoUrl="https://github.com/sadiqahmednadaf5/Ecommerce-App"
            liveUrl="https://ecommerce-app-mu-taupe.vercel.app/"

          />
        </div>
        <div className={projectCardTheamChange}>
          <ProjectCard
            src={StockTrading}
            p="Stock-Trading Marketplace"
            arrayList={data.StockTrading}
            description="Stock-Trading Marketplace built with MERN stack (MongoDB, Express.js, React.js, Node.js)"
            gitrepoUrl="https://github.com/sadiqahmednadaf5/The-Stock-Trading-Marketplace"
            liveUrl="https://github.com/sadiqahmednadaf5/The-Stock-Trading-Marketplace"

          />
        </div>
        <div className={projectCardTheamChange}>
          <ProjectCard
            src={ProjectImgDemo}
            p="AI-Image Generation APP "
            arrayList={data.AIImage}
            description="AI Image Generation built with OpenAI API KEY, Nodejs, Expressjs, and Fetching images from OpenAI"
            gitrepoUrl="/"
            liveUrl="/"

          />
        </div>
       
      
        
        

      </div>

    </section>
  );
}

export default Projects;
