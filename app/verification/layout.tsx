import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Page",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main >{children}</main>
  );
}
