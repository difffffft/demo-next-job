"use client";
import { Suspense, use, useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {    
  }, []);
  return (
    <div>
      <nav>导航</nav>
      {children}
    </div>
  );
}
