import ReactSlider from "react-slider";
import "./Hygrometer.css";
import {useClimate} from '../../context/ClimateContext.js'

function Hygrometer() {
  const {climateHydro, setClimateHydro} = useClimate();
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {"y"}%</div>
      <ReactSlider
        value={climateHydro}
        onAfterChange={(val) => {setClimateHydro(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;