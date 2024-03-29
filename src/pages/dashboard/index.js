import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { JobListingsContainer } from "../../components/util/jobList";
import { AddJobs } from "../../components/util/addJobs";
import { UpdateJobs } from "../../components/util/updateJobs";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../../src/config/APIs/job";
import { addToList } from "../../redux/job/index";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "../../components/util/searchbox";

const userNavigation = [{ name: "Sign out" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const jobs = useSelector((state) => state.job);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIndex = (index, job) => {
    setSelectedIndex(index);

    const updatedNavigation = navigation.map((item, i) => ({
      ...item,
      current: i === index,
    }));

    if (index == 2) {
      updatedNavigation[index].component = <UpdateJobs initialJobData={job} onSubmit={handleIndex} />;
    }
    setNavigation(updatedNavigation);
  };

  const [navigation, setNavigation] = useState([
    {
      name: "All Job",
      icon: HomeIcon,
      component: <JobListingsContainer jobsList={jobs.list} />,
      current: true,
    },
    {
      name: "Add Jobs",
      icon: UsersIcon,
      component: <AddJobs onSubmit={handleIndex}></AddJobs>,
      current: false,
    },
    {
      name: "Update Jobs",
      icon: UsersIcon,
      component: <AddJobs onSubmit={handleIndex}></AddJobs>,
      current: false,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllJobs();
        dispatch(addToList(res.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []);



  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/auth/signIn");
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://ibb.co/7WFQvbY"
                        alt="iCube Technologies"
                      />
                      <div>iCube Technologies</div>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1 cursor-pointer">
                            {navigation.map((item, index) =>
                              index !== 1 ? (
                                <div
                                  key={index}
                                  onClick={() => {
                                    if (index !== 2) {
                                      handleIndex(index);
                                    }
                                  }}
                                >
                                  <li>
                                    <div
                                      className={classNames(
                                        item.current
                                          ? "bg-gray-50 text-indigo-600"
                                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                      )}
                                    >
                                      <item.icon
                                        className={classNames(
                                          item.current
                                            ? "text-indigo-600"
                                            : "text-gray-400 group-hover:text-indigo-600",
                                          "h-6 w-6 shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </div>
                                  </li>
                                </div>
                              ) : (
                                <div key={index}></div>
                              )
                            )}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 place-items-center">
              <img
                className="h-8 w-auto"
                src="https://i.ibb.co/7WFQvbY/android-chrome-192x192.png"
                alt="iCube Technologies"
              />
              <div className="ml-2 font-bold">iCube Technologies</div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1 cursor-pointer">
                    {navigation.map((item, index) =>
                      index !== 2 ? (
                        <div
                          key={index}
                          onClick={() => {
                            if (index !== 2) {
                              handleIndex(index);
                            }
                          }}
                        >
                          <li>
                            <div
                              className={classNames(
                                item.current
                                  ? "bg-gray-50 text-indigo-600"
                                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-indigo-600"
                                    : "text-gray-400 group-hover:text-indigo-600",
                                  "h-6 w-6 shrink-0"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </div>
                          </li>
                        </div>
                      ) : (
                        <div key={index}></div>
                      )
                    )}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-end gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">



            <div className="flex items-center space-x-4">
              {/* <SearchBox /> */}

              <div className="ml-auto ">

                {/* <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                /> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-end justify-end p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Admin
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <div
                              onClick={() => {
                                if (item.name === "Sign out") {
                                  handleLogOut();
                                }
                              }}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="py-5">
            <div className="px-4 sm:px-6 lg:px-8 ">
              {/* // main from here */}
              {selectedIndex == 0 ? (
                <JobListingsContainer
                  jobsList={jobs.list}
                  onUpdateIndex={handleIndex}
                />
              ) : (
                navigation[selectedIndex].component
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
