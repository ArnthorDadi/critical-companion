"use client";

import React from "react";
import { LoginStatusHandlerButton } from "@/components/button/LoginStatusHandlerButton";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-between gap-12 px-4 py-14">
        <Title
          title={"Critical Companion"}
          subtitle={"Critical Helper Companion For Exhausted Dungeon Masters"}
        />
        <LoginStatusHandlerButton />
      </div>
    </>
  );
}
