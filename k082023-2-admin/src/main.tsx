import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'react-toastify/dist/ReactToastify.css';

// import reportWebVitals from './reportWebVitals';

import '@/assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        {/* <BrowserRouter> */}

    <App />
    {/* </BrowserRouter> */}

  </React.StrictMode>,
);
