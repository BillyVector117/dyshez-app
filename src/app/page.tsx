'use client'
import Image from "next/image";
import Login from "./login/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <p>HELLO</p>
    </main>
  );
}
