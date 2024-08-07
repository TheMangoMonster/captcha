import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
        captchaValue,
      });
      if (response.data.success) {
        toast.success("Login successful");
        onLogin();
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ReCAPTCHA
          sitekey="6LcRKyEqAAAAAFpZvBpxAPrEuy-wwR9G8AdSOpvR"
          onChange={setCaptchaValue}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
