import { Plus, Trash } from "@phosphor-icons/react";
import ChronosButton from "components/Comman/Buttons";
import React from "react";

function Points({ list, setList, editMode, input }) {
  return (
    <>
      {editMode ? (
        <>
          {list?.map((p, ind) => {
            return (
              <div className="flex flex-row items-center justify-between space-x-1 relative">
                {input ? (
                  <input
                    value={p}
                    onChange={(e) => {
                      let temp = [...list];
                      temp[ind] = e.target.value;
                      setList(temp);
                    }}
                    className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi text-sm md:text-md leading-6  md:leading-8 "
                  ></input>
                ) : (
                  <textarea
                    value={p}
                    onChange={(e) => {
                      let temp = [...list];
                      temp[ind] = e.target.value;
                      setList(temp);
                    }}
                    className="bg-primary-grey-100 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi text-sm md:text-md leading-6  md:leading-8 "
                  ></textarea>
                )}
                <Trash
                  className="cursor-pointer text-primary-red-500 absolute top-1.5 right-1.5"
                  size={16}
                  onClick={() => {
                    let temp = [...list];
                    temp = temp?.filter((a, index) => index !== ind);
                    setList(temp);
                  }}
                />
              </div>
            );
          })}
          <ChronosButton
            underline
            tertiary
            text="Add more"
            onClick={() => {
              let temp = [...list];
              temp.push("");
              setList(temp);
            }}
            icon={<Plus size={16} className="mr-1.5" />}
            reverseIcon
          />
        </>
      ) : (
        list?.map((p) => {
          return (
            <p className="font-satoshi text-sm md:text-md leading-6  md:leading-8 ">
              {p}
            </p>
          );
        })
      )}
    </>
  );
}

export default Points;
