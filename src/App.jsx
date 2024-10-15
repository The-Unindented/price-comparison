import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PriceComparisonLanding from './components/PriceComparisonLanding';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PriceComparisonLanding />} />
          <Route path="/signin" element={<SignIn onSignIn={() => setUser(true)} />} />
          <Route path="/signup" element={<SignUp onSignUp={() => setUser(true)} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
