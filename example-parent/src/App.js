import React from 'react';
import './App.css';

import { OneApp } from '@itekako/itekako-one/dist';
import { TwoApp } from '@itekako/itekako-two/dist';

function App() {
  return (
    <div className="App">
      <OneApp />
      <TwoApp />
    </div>
  );
}

export default App;
