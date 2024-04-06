import React, { useState } from 'react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>Email:</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Username:</label><br />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label>Password:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <label>Confirm Password:</label><br />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpPage;

