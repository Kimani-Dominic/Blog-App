// interface FormData {
//     fullName?: string;
//     email: string;
//     password: string;
//     termsAccepted?: boolean;
//   }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/api";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    termsAccepted: false,
  });



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value, type } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: type === "checkbox" ?  : value,
  //   }));
  // };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setErrorMessage('');


    if (formData.password !== formData.confirm_password) {
        setErrorMessage("Passwords do not match.");
        return;
    }

    setIsSubmitting(true);
    try {
        const response = await fetch(`${axiosInstance}api/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSuccessMessage("User created successfully! Please log in.");
            setTimeout(() => setSuccessMessage(''), 5000);
            // console.log("User created successfully");
            navigate('/choose-role');
        } else {
            const errorData = await response.json();
            setErrorMessage(errorData.detail || "An error occurred. Please try again.");
        }
    } catch (error) {
        console.log("An error occurred while submitting data:", error);
        setErrorMessage("An error occurred. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};
        
    // console.log(formData);


  return (
    <>
    <div className="form signup">
      <header>Signup</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
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
        <div className="checkbox">
          <input
            type="checkbox"
            id="signupCheck"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label htmlFor="signupCheck">I accept all terms & conditions</label>
        </div>
        <input type="submit" value="Signup" />
      </form>
    </div>
  </>
  );
};

export default SignupForm;


