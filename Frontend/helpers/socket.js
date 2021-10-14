import URL from '../constants/Url';
const isBrowser = typeof window !== "undefined";

export const wsInstance = isBrowser ? new Websocket(URL.SOCKET_URL) : null;