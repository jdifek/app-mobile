import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { authService } from "./services/auth/auth.service";
import { saveTokens } from "./services/auth/auth.helper";

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

      const checkAuth = async () => {
        const data = await authService.auth({
          id: tgWebApp.initDataUnsafe.user?.id ?? 0,
        });
        if (!data) tgWebApp.close()
        saveTokens(data.access_token, data.refresh_token);
      };

      checkAuth()
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
