import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const initData = window.Telegram.WebApp.initData;
  }, []);
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
