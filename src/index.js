import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initialState, reducer } from './components/Books/reducer';
import { StateProvider } from './components/Books/StateProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

