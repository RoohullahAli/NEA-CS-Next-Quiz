"use client";
import React from "react";

import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Login from "./login";
import { Loading, HomePage } from "./Components";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) return <Login loggedIn={user} />;

  return <HomePage />;
}
