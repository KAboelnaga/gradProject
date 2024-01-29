import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [email, setEmail] = useState('');

  const login = userEmail => {
    setEmail(userEmail);
  };

  const logout = () => {
    setEmail('');
  };

  const authValue = useMemo(() => ({
    email,
    login,
    logout
  }), [email]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { AuthContext, AuthProvider };
