import React, { useState } from 'react';

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, for example, sending data to the server
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username or Email:</label><br />
        <input type="text" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} /><br />
        <label>Password:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;

