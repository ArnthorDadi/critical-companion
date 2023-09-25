"use client";

import { LoginStatusHandlerButton } from "@/components/button/LoginStatusHandlerButton";
import { Title } from "@/components/title";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="container flex flex-1 flex-col items-center justify-between gap-12 px-4 py-14 md:py-16">
        <Title title={"Dashboard"} titleStyle={"text-center"} />
        <LoginStatusHandlerButton />
      </div>
    </>
  );
}
