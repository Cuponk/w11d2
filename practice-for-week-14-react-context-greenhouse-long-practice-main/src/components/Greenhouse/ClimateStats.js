import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  
  const {climateTemp} = useClimate();
  const {climateHydro} = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {`${climateTemp}`}°F
      </div>
      <div className="humidity">
        Humidity {`${climateHydro}`}%
      </div>
    </div>
  )
}

export default ClimateStats;