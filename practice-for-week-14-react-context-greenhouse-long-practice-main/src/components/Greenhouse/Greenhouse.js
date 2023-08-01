import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import {useTheme} from '../../context/ThemeContext.js'

function Greenhouse() {

  const {themeName} = useTheme();

  const image = (themeName === 'day' ? <img  className='greenhouse-img'
    src={dayImage} alt='greenhouse' /> : <img  className='greenhouse-img' src={nightImage} alt='greenhouse'/>)
  return (
    
      <section>
      {image}
        <LightSwitch />
        <ClimateStats />
      </section>

  );
}

export default Greenhouse;