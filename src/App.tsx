import React from 'react';
import './App.css';
import Increment from './Increment';
import Store from './Store';

const App: React.FC = () => {

  return (
    <div>
      <Store>
        <Increment/>
      </Store>
    </div>
  );
}

export default App;
