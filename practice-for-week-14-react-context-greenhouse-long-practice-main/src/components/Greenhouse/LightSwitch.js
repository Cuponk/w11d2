import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext'

function LightSwitch() {

  let {themeName, setThemeName} = useTheme();

  const handleClick = e => {
    e.preventDefault();
    console.log(themeName);
    if (themeName === 'day') {
      setThemeName('night');
    } else {
      setThemeName('day');
    }
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleClick}>DAY</div>
      <div className="off" onClick={handleClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;