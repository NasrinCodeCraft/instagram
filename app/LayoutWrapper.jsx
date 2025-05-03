'use client';

import Feed from "@/components/Feed";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth/signIn";

  return (
    <>
      {!isAuthPage && <Header />}
      {!isAuthPage && <Feed />}
      {children}
    </>
  );
}
