import { useState } from "react";

function Time() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="time">
      <h3>{Time}</h3>
    </div>
  );
}
export default Time;
