
import { useTheme } from './ThemeContext';
function SkillList({ src, skill }) {

  const { theme } = useTheme();
   
  return (
    <span className={ theme === 'light' ? 'skillListlight' : 'skillListdark'}>
      <img className={theme === 'light' ?  'techImagelight' : 'techImagedark' } src={src} alt="Checkmark icon" />
      <p className="skillName">{skill}</p>
    </span>
  );
}

export default SkillList;
