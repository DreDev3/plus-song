import { useState, useEffect } from "react";

import './Index.css';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      document.body.classList.add("daltonismo");
    } else {
      document.body.classList.remove("daltonismo");
    }
  }, [isOn]);

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
      <p>{isOn ? "" : ""}</p>
    </div>
  );
}
