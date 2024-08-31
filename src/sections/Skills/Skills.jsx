import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import cLanguage from '../../images/c-laguage.webp'
import cppLanguage from '../../images/cpp-language.webp'
import javaScript from '../../images/js-language.webp'
import typeScript from '../../images/ts-language.webp'
import python from '../../images/python.webp'
import react from '../../images/react.webp'
import nodeJs from '../../images/nodejs.webp'
import mongoDB from '../../images/mongodb.webp'
import mySql from '../../images/mysql.webp';
import expressJs from '../../images/express.webp';
import tailwind from '../../images/tailwind.webp';
import bootsrap from '../../images/Bootstrap.webp';
import redux from '../../images/redux.webp';
import git from '../../images/git.webp';
import gitHubAction from '../../images/github-actions.webp';
import docker from '../../images/docker.webp';
import mui from '../../images/mui.webp';
import postman from '../../images/postman.webp';
import router from '../../images/router.webp';
import next from '../../images/next.webp';
import jest from '../../images/jest.webp';
import java from '../../images/java.png'




function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3 className={styles.subHeading}>Language</h3>
      <div className={styles.skillList}>
        <SkillList src={cLanguage} skill="C" />
        <SkillList src={cppLanguage} skill="C++" />
        <SkillList src={javaScript} skill="JavaScript" />
        <SkillList src={java} skill="java" />
        <SkillList src={typeScript} skill="TypeScript" />
      </div>

      <br /> <br />
      <h3 className={styles.subHeading}>Familiar</h3>
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={nodeJs} skill="Node.js" />
        <SkillList src={mongoDB} skill="MongoDB" />
        <SkillList src={mySql} skill="MySQL" />
        <SkillList src={expressJs} skill="Express.js" />
        <SkillList src={tailwind} skill="Tailwind CSS" />
        <SkillList src={bootsrap} skill="Bootstrap" />
        <SkillList src={redux} skill="Redux" />
        <SkillList src={git} skill="Git" />
        <SkillList src={gitHubAction} skill="GitHub Actions" />
        <SkillList src={docker} skill="Docker" />
        <SkillList src={mui} skill="MUI" />
        <SkillList src={postman} skill="Postman" />
        <SkillList src={router} skill="React Router" />
        <SkillList src={next} skill="Next.js" />
        <SkillList src={jest } skill="Jest" />
      </div>
      <hr />

    </section>
  );
}

export default Skills;
