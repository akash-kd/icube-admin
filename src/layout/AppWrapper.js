import DesktopWrapper from "../components/Layout/DesktopWrapper";
import TopBar from "../components/Layout/TopBar";
import React from "react";

function AppWrapper({ children }) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <TopBar />
      <div className="lg:hidden max-h-[100vh] overflow-y-auto mt-11">
        {children}
      </div>
      <DesktopWrapper>
        <div className="mt-0 py-0 max-h-[90vh] w-[80vw] mx-auto max-w-[1380px] overflow-y-auto">
          {children}
        </div>
      </DesktopWrapper>
    </div>
  );
}

export default AppWrapper;
