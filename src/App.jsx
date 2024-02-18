import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

const App = () => {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Headers />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
};

export default App;
