import join from "url-join";

const BACKEND_API = process.env.REACT_APP_BACKEND_API
const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    config => {
      const {
        auth: { authToken }
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      if ( !isAbsoluteURLRegex.test(config.url) ) {
        config.url = join(BACKEND_API, config.url);
      }

      return config;
    },
    err => Promise.reject(err)
  );
}
