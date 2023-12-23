import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Bell, SignOut, User } from "@phosphor-icons/react";
import LogoutModal from "./LogoutModal";
import WideModalsWrapper from "../Comman/ModalsWrapper/WideModalWrapper";
import { navigation } from "../../helpers/constants";
import PageHeader from "./PageHeader";

const tabs = [...navigation];

function DesktopWrapper({ children }) {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const [logOut, setLogOut] = useState(false);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("navList");
    localStorage.removeItem("selectedTab");
    window.location.href = window.location.origin + "/";
  };
  return (
    <>
      <WideModalsWrapper
        isOpen={logOut}
        closeModal={() => {
          setLogOut(false);
        }}
        component={<LogoutModal onLogout={onLogout} />}
      />

      <div className="w-screen h-screen lg:flex flex-row items-stretch hidden text-primary-blue-700">
        <div className="side-nav py-5 h-full w-full flex flex-col justify-between border-r border-primary-grey-100">
          <div className="flex flex-col space-y-7 items-center">
            <div className="flex flex-row items-center bg-primary-blue-900 justify-between w-full px-5">
              <a href="/">
                <div className="flex flex-row items-center space-x-2.5">
                  <img
                    src="/assets/caaryaLogos/caaryaMe.svg"
                    className="w-20 object-fill"
                    alt="logo"
                  />
                </div>
              </a>
              <div className="flex gap-2 items-center text-primary-blue-700">
                <User size={14} />
                <Bell size={14} />
              </div>
            </div>
            <div className="px-6 flex items-start space-y-1.5 w-full justify-between pb-2 border-b border-opacity-50 border-white">
              <div className="flex flex-col items-start w-full">
                <h2 className="font-lato text-base leading-8">Hello,</h2>
                <h1 className="text-xl font-lato font-medium leading-8">
                  {user?.first_name}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start w-full pl-2.5 space-y-2">
              {tabs?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      history.push(item?.path);
                    }}
                    className={`w-full cursor-pointer flex flex-row items-center space-x-4 menuitem ${window.location.pathname.includes(item?.path)
                      ? "active"
                      : ""
                      }`}
                  >
                    {item?.image ? (
                      <img
                        src={
                          window.location.pathname.includes(item?.path)
                            ? item?.selectedImage
                            : item?.image
                        }
                        alt=""
                        className="w-6 h-6"
                      />
                    ) : (
                      item?.icon
                    )}
                    <p className="">{item?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pl-2.5 mt-auto mx-auto w-full flex flex-row items-center justify-between cursor-pointer">
            <div
              className={`w-full cursor-pointer px-2 flex flex-row items-center space-x-5 py-3 menuitem`}
              onClick={() => {
                setLogOut(true);
              }}
            >
              <SignOut size={25} />
              <p className="ml-1.5 font-normal">Logout</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch w-full">
          <PageHeader />
          {children}
        </div>
      </div>
    </>
  );
}

export default DesktopWrapper;
