"use client"; // Mark this file as a Client Component

import { useRouter } from "next/navigation";
import React from "react";

const Page = ({ params }: { params: Promise<{ signin: string[] }> }) => {
  const router = useRouter();

  // Unwrapping the promise using `React.use()`
  const { signin } = React.use(params);
  console.log(signin);

  return (
    <div>
      <h1>Sign-in Page</h1>
      <p>Sign-in Parameter: {signin[1]}</p>
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
};

export default Page;
