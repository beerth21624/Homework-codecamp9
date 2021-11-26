import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SignUp from './screen/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Route exac path="/signup">
        <SignUp />
      </Route>
    </BrowserRouter>
  );
}

export default App;
