import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: שלח את שם המשתמש והסיסמה לשרת
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-page">
      <h1>!ברוכים הבאים</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username">           :שם משתמש</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">         :סיסמה</label>
        <br />
        <button type="submit">היכנס</button>
      </form>
    </div>
  );
};

export default LoginPage;
