import React from 'react'
import ReactDOM from 'react-dom/client'
import Presentation from './Presentation';
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (import.meta.env.PROD) {
  getAnalytics(app);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Presentation />
  </React.StrictMode>,
)
