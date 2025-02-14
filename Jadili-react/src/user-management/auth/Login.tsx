interface FormData {
    fullName?: string;
    email: string;
    password: string;
    termsAccepted?: boolean;
  }
  
import React, { useState } from "react";


const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form login">
      <header>Login</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <a href="#">Forgot password?</a>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
