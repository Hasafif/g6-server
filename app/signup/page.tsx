"use client";

import "../styles.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import validate from "../lib/formVaild";
import Notify from "@/components/notification";

const initialFormData = {
  username: "",
  email: "",
  password: "",
  passwordC: "",
};
const initialErrorMessage = {
  username: "",
  email: "",
  password: "",
};

const Page: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState(initialErrorMessage);
  const [notif, setIsNotif] = useState(false);
  const success = `We have sent a verification email to:${formData.email.toString()},please check it up and verify your account`;
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        message.email !== "" ||
        message.username !== "" ||
        message.password !== ""
      ) {
        alert("Fix errors to proceed");
      } else {
        const response = await axios.post("/api/auth/signup", {
          usr: formData.username.toString(),
          email: formData.email.toString(),
          pwd: formData.password.toString(),
        });
        console.warn(response.data);
        switch (response.status) {
          case 201:
            setIsNotif(true);
            break;
          case 226:
            if (response.data.error.username) {
              setMessage({
                username: response.data.error?.username,
                email: "",
                password: "",
              });
            } else {
              setMessage({
                username: "",
                email: response.data.error?.email,
                password: "",
              });
            }
            break;
        }
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };
  const handleBlur = (e: unknown) => {
    setMessage(validate(formData));
  };
  return (
    <>
      {notif && <Notify message={success} dur={30} display={setIsNotif} />}
      <section className="layout">
        <form className="form" onSubmit={onSubmit}>
          <h1>Signup</h1>

          <input
            type="text"
            onBlur={handleBlur}
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            name="username"
            required
          />
          <p className="error-message">{message?.username}</p>
          <input
            type="email"
            onBlur={handleBlur}
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            name="email"
            required
          />
          <p className="error-message">{message?.email}</p>
          <input
            type="password"
            onBlur={handleBlur}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
          />
          <input
            type="password"
            onBlur={handleBlur}
            value={formData.passwordC}
            placeholder="Confirm password"
            onChange={handleChange}
            name="passwordC"
            required
          />
          <p className="error-message">{message?.password}</p>
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </>
  );
};

export default Page;
