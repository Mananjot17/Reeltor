import { useState } from "react";
import { SignIn } from "@clerk/clerk-react";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn />
    </div>
  );
};

export default AuthPage;
