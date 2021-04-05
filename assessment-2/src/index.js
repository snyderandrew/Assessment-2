import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import react bootstaps css file


// import routing components here, particularly the router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
