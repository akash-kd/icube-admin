import { X } from "@phosphor-icons/react";
import ChronosButton from "components/Comman/Buttons";
import React, { useEffect, useState } from "react";

function AddLink({ isOpen, closeModal, details, setDetails }) {
  const [link, setLink] = useState(details);

  useEffect(() => {
    if (isOpen) {
      setLink({ ...details, type: details?.type || "article" });
    }
  }, [isOpen]);

  return (
    <div className="p-5 flex flex-col gap-4 max-w-xl bg-white rounded mx-auto">
      <div className="flex flex-row items-center justify-between space-x-5">
        <h1 className="text-lg font-manrope font-medium">Usefull Links</h1>
        <X
          onClick={() => closeModal()}
          className="text-primary-grey-800 cursor-pointer"
          size={16}
        />
      </div>
      <div className="flex flex-col items-start w-full space-y-6">
        <div className="flex flex-col items-start w-full space-y-4">
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="w-full flex flex-col items-start space-y-1 col-span-2">
              <label>Name</label>{" "}
              <input
                value={link ? link?.name : null}
                onChange={(e) => {
                  let obj = link ? { ...link } : {};

                  obj = { ...obj, name: e.target.value };
                  setLink(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
            <div className="w-full flex flex-col items-start space-y-1">
              <label>Type</label>{" "}
              <select
                value={link ? link?.type : null}
                onChange={(e) => {
                  let obj = link ? { ...link } : {};

                  obj = { ...obj, type: e.target.value };
                  setLink(obj);
                }}
                className="capitalize bg-primary-grey-100 w-full px-2 py-0 border-0 focus:border-0 focus:outline-none focus:ring-transparent font-satoshi"
              >
                {["article", "youtube", "doc"]?.map((a) => {
                  return (
                    <option value={a} className="font-inter capitalize">
                      {a}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="w-full flex flex-col items-start space-y-1 col-span-2">
            <label>Link</label>{" "}
            <input
              value={link ? link?.link : null}
              onChange={(e) => {
                let obj = link ? { ...link } : {};

                obj = { ...obj, link: e.target.value };
                setLink(obj);
              }}
              className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between space-x-5 pt-5">
        <ChronosButton
          secondary
          text="Cancel"
          onClick={() => {
            closeModal();
          }}
        />{" "}
        <ChronosButton
          primary
          text="Save"
          onClick={() => {
            setDetails(link);
            closeModal();
          }}
        />
      </div>
    </div>
  );
}

export default AddLink;
