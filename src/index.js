import React from "react";
import ReactDOM from 'react-dom/client';
import TodoComp from "./Components/TodoComp";



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <TodoComp />
  </React.StrictMode>
);
