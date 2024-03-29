"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import "@/app/styles.css";
import ProviderLogin from "@/components/Providers";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: "http://localhost:3000/",
    });
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h1>Login</h1>
        {/*!!props.error && <p className='error'>Authentication Failed</p>*/}
        <input
          name="usr"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          name="pwd"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <span>
          Dont have an account? <a href="/signup">Register</a>
        </span>
        <ProviderLogin />
      </form>
    </>
  );
};

export default SignInPage;
