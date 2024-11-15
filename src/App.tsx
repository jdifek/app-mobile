import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { authService } from "./services/auth/auth.service";

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

      console.log(initData);
      // authService.auth({email: initData})
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