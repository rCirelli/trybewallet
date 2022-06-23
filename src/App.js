import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Wallet from './pages/Wallet';

function App() {
  return (
    <main className="bg-gray-900 h-screen text-gray-200">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/carteira" component={ Wallet } /> */}
          <Route path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
