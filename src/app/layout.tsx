import "~/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { GeistSans } from "geist/font/sans";
import { TopNav } from "./_components/topnav";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata = {
  title: "GPA",
  description: "Gym Progress App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
        <CSPostHogProvider>
      <html lang="en">
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`font-sans ${GeistSans.variable} dark`}>
          <div className="h-screen grid grid-rows-[auto,1fr]">
            <TopNav />
           <main className="overflow-y-scroll"> {children}</main>
          </div>
          <Toaster theme="dark" />
        </body>
      </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
