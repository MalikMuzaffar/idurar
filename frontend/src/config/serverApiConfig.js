// export const API_BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
//     ? import.meta.env.VITE_BACKEND_SERVER + 'api/'
//     : 'http://localhost:8888/api/';
// export const BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
//     ? import.meta.env.VITE_BACKEND_SERVER
//     : 'http://localhost:8888/';

// export const WEBSITE_URL = import.meta.env.PROD
//   ? 'http://cloud.idurarapp.com/'
//   : 'http://localhost:3000/';
// export const DOWNLOAD_BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
//     ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
//     : 'http://localhost:8888/download/';
// export const ACCESS_TOKEN_NAME = 'x-auth-token';

// export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;

//  console.log(
//    '🚀 Welcome to IDURAR ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@idurarapp.com for more information.'
//  );


//const backend = import.meta.env.VITE_BACKEND_SERVER || 'http://localhost:8888/'; For Localhost
const backend = import.meta.env.VITE_BACKEND_SERVER || 'http://18.219.17.41:8888/';

export const API_BASE_URL = backend.endsWith('/')
  ? backend + 'api/'
  : backend + '/api/';

export const BASE_URL = backend;

export const WEBSITE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE === 'remote'
    ? 'http://18.219.17.41:3000/'
    : 'http://18.219.17.41:3000/'; //'http://localhost:3000/'; for localhost

export const DOWNLOAD_BASE_URL = backend.endsWith('/')
  ? backend + 'download/'
  : backend + '/download/';

export const ACCESS_TOKEN_NAME = 'x-auth-token';
export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;

