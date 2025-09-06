import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStatusColor } from '../PageStatusColor/Index';
import './Index.css';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Toggle() {
  const { isOn, setIsOn } = useStatusColor();

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
        <span className="slider">
          <span className="knob">
            {isOn ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </span>
        </span>
      </label>
    </div>
  );
}
