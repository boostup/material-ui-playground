import React from "react";
import { useLocation } from "react-router-dom";

function LoginPage() {
  const location = useLocation();
  const error = location?.state?.error;

  const handleLogin = () => {
    window.location = "/";
  };

  return (
    <div className="login">
      <button onClick={handleLogin}>Login</button>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
