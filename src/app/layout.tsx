import "~/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { GeistSans } from "geist/font/sans";
import { TopNav } from "./_components/topnav";

export const metadata = {
  title: "GPA",
  description: "Gym Progress App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable}`}>
        <TopNav />
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
