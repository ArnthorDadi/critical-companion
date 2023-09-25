"use client";

import { Providers } from "@/app/provider";
import { api } from "@/utils/api";
import Head from "next/head";
import React, { useEffect } from "react";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export enum Page {
  Login = "/",
  Dashboard = "/dashboard",
}

const PROTECTED_ROUTES = [Page.Dashboard];

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <InnerRootLayout>{children}</InnerRootLayout>
    </Providers>
  );
}

const InnerRootLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const pathName = usePathname();
  const route = useRouter();

  const isLoading = status === "loading" || status === undefined;
  useEffect(() => {
    const isOnProtectedPage = PROTECTED_ROUTES.includes(pathName as Page);
    const isLoggedIn = status === "authenticated";
    console.log({
      isLoggedIn,
      isLoading,
      isOnProtectedPage,
      pathName,
      status,
    });
    if (!isLoading && !isLoggedIn && isOnProtectedPage) {
      console.log("Redirected to Login", {});
      // toast.error("Unauthorized, need to login!", { toastId: "notAuth" });
      route.push(Page.Login);
    } else if (!isLoading && isLoggedIn && pathName === Page.Login) {
      console.log("Redirected to Dashboard", {});
      route.push(Page.Dashboard);
    }
  }, [pathName, status, isLoading]);
  return (
    <>
      <Head>
        <title>Critical Companion</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body
          className={
            "min-w-screen relative flex min-h-screen flex-col items-center border-[0.40rem] bg-[#121212]"
          }
        >
          <main
            className={"container relative mx-8 my-4 flex flex-1 flex-col px-4"}
          >
            {!isLoading ? (
              children
            ) : (
              <div className={"flex flex-1 items-center justify-center"}>
                Loading...
              </div>
            )}
          </main>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </body>
      </html>
    </>
  );
};

export default api.withTRPC(RootLayout);
