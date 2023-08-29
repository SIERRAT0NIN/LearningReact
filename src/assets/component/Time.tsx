import { useState } from "react";
import { Container } from "react-bootstrap";

function Time() {
  setInterval(updateTime);
  const now = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="time">
      <Container>{Time}</Container>
    </div>
  );
}
export default Time;
