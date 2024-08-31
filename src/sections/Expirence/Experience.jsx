

import React from 'react';
import styles from './ExperienceStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

const Experince = () => {

  const { theme, toggleTheme } = useTheme();
  const ExperinceTheam = theme == 'light' ? styles.boxlight : styles.boxdark;
  return (
    <div className={styles.container}>
      <main className={styles.row}>
        {/* Education Section */}
        <section className={styles.col}>
          <header className={styles.title}>
            <h2>EDUCATION</h2>
          </header>
          <div className={styles.contents}>
            <div className={ExperinceTheam}>
              <h4>2020-2024</h4>
              <h3>Bachelor's Degree</h3>
              <p>I graduated from <b>KLE Institute of Technology Hubli</b> with a CGPA of 7.00, specializing in Computer Science. I possess excellent programming skills, with expertise in multiple programming languages and technologies, and am passionate about applying my knowledge to solve complex problems</p>
            </div>
            <div className={ExperinceTheam}>
              <h4>2019-2020</h4>
              <h3>Senior Secondary School</h3>
              <p>I completed my senior secondary education at <b> P.C. Jabin PU Science College</b> with a 71% in the Science stream, laying a strong foundation for my further studies in Computer Science.</p>
            </div>
            {/* <div className={ExperinceTheam}>
              <h4>2018 - 2022</h4>
              <h3>Master Degree</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div> */}
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.col}>
          <header className={styles.title}>
            <h2>EXPERIENCE</h2>
          </header>
          <div className={styles.contents}>
            <div className={ExperinceTheam}>
              <h4>2023 </h4>
              <h3>Full-Stack Developer Intern </h3>
              <p>I interned at <b>Samarth Meditech Pvt Ltd</b>, where I contributed to a full-stack MERN project, gaining hands-on experience in developing and optimizing web applications. I was involved in both frontend and backend development, ensuring seamless integration between the two.</p>
            </div>
            {/* <div className={ExperinceTheam}>
              <h4>2018 - 2022</h4>
              <h3>Full-Stack Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className={ExperinceTheam}>
              <h4>2018 - 2022</h4>
              <h3>Frontend Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Experince;
