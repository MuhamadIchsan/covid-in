import './styles/style.css';
import React from 'react';
import RouterComponent from './router/RouterComponent';
import NavbarComponent from './router/NavbarComponent';

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <div>
        <RouterComponent />
      </div>
    </React.Fragment>
  );
}

export default App;
