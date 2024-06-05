"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Signed out successfully" });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLink;
