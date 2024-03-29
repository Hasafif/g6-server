"use client";

import "@/components/styles/components.css";
import React from "react";
import { signIn } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
const providers = options.providers;

const ProviderLogin = () => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div className="provider-btns" key={provider.name}>
          <button
            onClick={() => signIn(`${provider.id}`, { callbackUrl: "http://localhost:3000/" })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};
export default ProviderLogin;
