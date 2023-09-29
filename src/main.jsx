import React from 'react'
import ReactDOM from 'react-dom/client';
import {PuppyApp} from "./PuppyApp.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PuppyApp />
  </React.StrictMode>,
)
