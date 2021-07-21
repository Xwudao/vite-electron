const debug = import.meta.env.MODE !== 'production';
const LOCAL_API = 'http://10.2.0.155:80';
const PRODUCTION_API = '';
const API_URL = debug ? LOCAL_API : PRODUCTION_API;
const API_HOST = debug
  ? 'ws://10.2.0.155:80'
  : location.protocol === 'http:'
  ? `ws://${location.host}`
  : `wss://${location.host}`;
export { API_URL, API_HOST };
