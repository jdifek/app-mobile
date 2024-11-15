import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tgWebApp = window.Telegram.WebApp;

    if (tgWebApp) {
      const initData = tgWebApp.initData;

      tgWebApp.MainButton.text = "Закрыть";
      tgWebApp.MainButton.show();
      tgWebApp.MainButton.onClick(() => {
        tgWebApp.close();
      });
    } else {
      console.error("Telegram Web App не поддерживается.");
    }
  }, []);

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;