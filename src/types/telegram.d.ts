declare global {
  interface TelegramWebApp {
    MainButton: {
      text: string;
      show: () => void;
      hide: () => void;
      onClick: (callback: () => void) => void;
    };
    initData: string;
    initDataUnsafe: {
      user?: {
        first_name: string;
        last_name?: string;
        username?: string;
      };
    };
    themeParams: {
      bg_color?: string;
      text_color?: string;
    };
    close: () => void;
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

export {};