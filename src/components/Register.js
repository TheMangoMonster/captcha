import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        password,
        captchaValue,
      });
      if (response.data.success) {
        toast.success("Registration successful");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <ReCAPTCHA
          sitekey="6LcRKyEqAAAAAFpZvBpxAPrEuy-wwR9G8AdSOpvR"
          onChange={setCaptchaValue}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
