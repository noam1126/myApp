import { useState } from "react";
import "./Clock.css";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return <h1>{ctime}</h1>;
};
export default Clock;
