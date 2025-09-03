import { useStatusColor } from '../PageStatusColor/Index';
import './Index.css';

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
        <span className="slider"></span>
      </label>
    </div>
  );
}
