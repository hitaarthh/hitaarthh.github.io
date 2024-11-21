"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Using next/navigation instead of next/router
import Link from "next/link";

const Preview = () => {
  const { setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    // Set dark theme immediately
    setTheme("dark");
    // Navigate to home after a brief delay to ensure theme is applied
    const redirectTimer = setTimeout(() => {
      window.location.href = "/";  // Using window.location as a fallback
    }, 100);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <Link href="/"></Link>
  );
};

export default Preview;