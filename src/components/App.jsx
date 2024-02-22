import Clock from "./Clock";

const App = () => {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <div className="clock-container">
      <Clock />
      <button className="fullscreen" onClick={handleFullscreen}>
        Full screen
      </button>
    </div>
  );
};

export default App;
