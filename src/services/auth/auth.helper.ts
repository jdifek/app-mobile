import Cookies from "js-cookie";
import { Token } from "../../types/enums";

export const getAccessToken = () => Cookies.get(Token.accessToken);
export const getRefreshToken = () => Cookies.get(Token.refreshToken);

export const setAccessToken = (token: string) => Cookies.set(Token.accessToken, token);
export const setRefreshToken = (token: string) => Cookies.set(Token.refreshToken, token);

export const saveTokens = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
}

export const removeFromStorage = () => {
    Cookies.remove(Token.accessToken);
    Cookies.remove(Token.refreshToken);
}