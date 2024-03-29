<<<<<<< HEAD
import { ReactNode } from "react";
=======
>>>>>>> 9d52956 (v1.1)
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
export default async function HomePage() {
  const session = await getServerSession(options);
  return (
    <section className="home-page">
      <h1>HOME PAGE</h1>
    </section>
  );
}
