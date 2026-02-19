import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

    </div>
  );
};

export default Layout;
