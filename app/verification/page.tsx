"use client";
import { useEffect, useState } from "react";
import { verifyUser } from "../lib/Auth";
import { useRouter } from "next/navigation";

const VerifyPage: React.FC = () => {
  const [token, setToken] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [verifyMessage, setVerifyMessage] = useState("");
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    const email = params.get("email");
    setToken(urlToken);
    setEmail(email);
  }, [token]);
  useEffect(() => {
    if (token && email) {
      verifyUser(token, email).then((verifyState) => {
        if (verifyState.status === 200) {
          setVerifyMessage("Verification done successfully");
          router.push("/api/auth/signin");
          alert("Email verified, please login now");
        } else if (verifyState.status === 226) {
          setVerifyMessage("Token Expired!");
        } else {
          setVerifyMessage("Something went wrong, please try again later");
        }
      });
    }
  }, [token, email, router]);
  return (
    <>
      <p>{verifyMessage}</p>
      <p>
        Token: {token}
        <br />
        Email: {email}
      </p>
      <a href="/">Back to HOME PAGE</a>
    </>
  );
};
export default VerifyPage;
