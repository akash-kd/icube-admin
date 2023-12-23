import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { privateRoutes } from "../../routes/PrivateRoute";

function PageHeader() {
  const routes = useRouteMatch();
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    let page = privateRoutes?.find((p) => p?.path == routes?.path);

    setHeading(page?.name);
    setDescription(page?.description);
  }, []);

  return (
    <div className="flex flex-row items-start justify-between px-6 py-4 bg-white border-b border-primary-grey-100">
      <div className="md:w-8/12 relative">
        <h1
          className={`text-xl hidden md:flex flex-row items-center text-left font-medium font-poppins tracking-tight text-primary-aqua-medium`}
        >
          <p>{heading ? heading : ""} </p>
        </h1>
        {/* <p className="font-inter text-sm mt-2.5 text-primary-gray-250 dark:text-white">
          {description}
        </p> */}
      </div>
      {/* <DateTime dark={dark} /> */}
    </div>
  );
}

export default PageHeader;
