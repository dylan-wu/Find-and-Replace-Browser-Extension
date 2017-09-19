import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Loading Search Widget.");

  ReactDOM.render(
    <Main />,
    document.getElementById('app-root')
  );
});



