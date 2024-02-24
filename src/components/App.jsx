import expand_solid from "../assets//expand-solid.svg";
import Clock from "./Clock";

const App = () => {
  let wakeLock = null;
  const screenWaker = async () => {
    try {
      wakeLock = await navigator.wakeLock.request("screen");
    } catch (err) {
      console.log(err);
    }
  };
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen();
      screen.orientation.lock("landscape-primary");
      screenWaker();
    } else {
      document.exitFullscreen();
      wakeLock.release().then(() => {
        wakeLock = null;
      });
    }
  };
  return (
    <div className="clock-container">
      <Clock />
      <button className="fullscreen" onClick={handleFullscreen}>
        <img className="expand-icon" src={expand_solid} alt="" />
      </button>
    </div>
  );
};

export default App;
