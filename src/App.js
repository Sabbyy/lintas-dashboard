import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapView from './MapView.js';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MapView />
    </div>
  );
}

export default App;
