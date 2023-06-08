"use client";
import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";

export default function Home() {
  const [user] = useAuthState(auth);

  if (!user) return <Login />;

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
