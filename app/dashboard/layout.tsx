import FullHeader from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import { Suspense } from "react";
const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <FullHeader />
      <div className="flex">
        {/* Sidebar */}
        <NextAuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar />
          </Suspense>
          {/* Main content area */}
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </NextAuthProvider>
      </div>
    </main>
  );
};

export default layout;
