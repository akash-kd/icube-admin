import React from "react";
import { LogoutIcon } from "@heroicons/react/outline";

function TopBar() {
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("navList");
    localStorage.removeItem("selectedTab");
    window.location.href = window.location.origin + "/";
  };
  return (
    <div className="lg:hidden fixed w-full top-0 right-0 left-0 px-5 py-2 bg-primary-blue-100 flex flex-row items-center justify-between">
      <a href="/">
        <div className="flex flex-row items-center space-x-1">
          <img
            src="/assets/caaryaLogos/caaryaMe.svg"
            className="h-8 w-20 object-fill"
            alt="logo"
          />
        </div>
      </a>
      <LogoutIcon
        onClick={() => {
          onLogout();
        }}
        className="h-6 w-6 text-primary-blue-700"
      />
      {/* <div className="flex flex-row items-center space-x-4">
        <img
          src="/assets/svg/navigation/bell.svg"
          className="h-4 w-4 object-cover"
          alt="logo"
        />
        <img
          src="/assets/svg/navigation/menu.svg"
          className="h-4 w-4 object-cover"
          alt="logo"
        />
      </div> */}
    </div>
  );
}

export default TopBar;
