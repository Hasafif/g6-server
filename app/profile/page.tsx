<<<<<<< HEAD
import UserCard from "@/components/UserCard";
=======
>>>>>>> 9d52956 (v1.1)
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
export default async function Page() {
<<<<<<< HEAD
 const session = getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
  return (
      <h1>Profile</h1>
  );
=======
  const session = getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
  return <h1>Profile</h1>;
>>>>>>> 9d52956 (v1.1)
}
