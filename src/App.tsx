import "./App.css";

declare global {
  interface Window {
    Telegram: any;
  }
}

const App = () => {
  return <div className="App">work</div>;
};

export default App;
