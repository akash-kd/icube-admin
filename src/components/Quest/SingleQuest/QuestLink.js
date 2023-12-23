import {
  Article,
  File,
  FileDoc,
  Pencil,
  Plus,
  Trash,
  YoutubeLogo,
} from "@phosphor-icons/react";
import WideModalsWrapper from "components/Comman/ModalsWrapper/WideModalWrapper";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddLink from "./AddLink";
import { updateDetailsField } from "redux/quests";

function QuestLink({ editMode }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state?.quest?.details);
  const [addLink, setAddLink] = useState({ isOpen: false });
  return (
    <>
      <WideModalsWrapper
        isOpen={addLink?.isOpen ? true : false}
        closeModal={() => {
          setAddLink({ isOpen: false });
        }}
        component={
          <AddLink
            isOpen={addLink?.isOpen ? true : false}
            closeModal={() => {
              setAddLink({ isOpen: false });
            }}
            details={addLink?.link}
            setDetails={(val) => {
              console.log(val, addLink);
              if (addLink?.index) {
                let temp = [...details.usefullLinks];
                temp[addLink.index] = val;
                dispatch(
                  updateDetailsField({ field: "usefullLinks", value: temp })
                );
              } else {
                let temp = details.usefullLinks
                  ? [...details.usefullLinks]
                  : [];
                temp.push(val);
                dispatch(
                  updateDetailsField({ field: "usefullLinks", value: temp })
                );
              }
              setAddLink({ isOpen: false });
            }}
          />
        }
      />
      <div className="flex flex-col gap-4  ">
        <h1 className="text-lg font-manrope font-medium  ">Useful Links</h1>
        <div className="font-satoshi text-sm md:text-md grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {details?.usefullLinks?.map((link, index) => {
            return (
              <div className="flex flex-col items-center space-y-5 relative">
                {link?.type == "youtube" ? (
                  <YoutubeLogo
                    size={80}
                    className="text-primary-red-500"
                    weight="fill"
                  />
                ) : link?.type == "article" ? (
                  <Article
                    size={80}
                    className="text-primary-grey-300"
                    weight="fill"
                  />
                ) : link?.type == "doc" ? (
                  <FileDoc
                    size={80}
                    className="text-primary-blue-300"
                    weight="fill"
                  />
                ) : (
                  <img
                    src={""}
                    className="w-20 h-20 bg-primary-grey-100 rounded"
                  />
                )}
                <a
                  href={link?.link}
                  target="__blank"
                  className="text-center text-primary-blue-500 underline"
                >
                  {link?.name}
                </a>
                {editMode && (
                  <div className="flex flex-row items-center space-x-2.5 absolute -top-5 right-0">
                    <div
                      onClick={() => {
                        setAddLink({ isOpen: true, link: link, index: index });
                      }}
                      className="w-7 h-7 rounded-full flex flex-row items-center justify-center bg-primary-blue-100"
                    >
                      <Pencil size={20} className="text-primary-blue-700" />
                    </div>
                    <div
                      onClick={() => {
                        let temp = [...details.usefullLinks];
                        temp = temp?.filter((a, index1) => index1 !== index);
                        dispatch(
                          updateDetailsField({
                            field: "usefullLinks",
                            value: temp,
                          })
                        );
                      }}
                      className="w-7 h-7 rounded-full flex flex-row items-center justify-center bg-red-50"
                    >
                      <Trash size={20} className="text-primary-red-500" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {editMode && (
            <div
              onClick={() => {
                setAddLink({ isOpen: true, link: {} });
              }}
              className="flex flex-col items-center space-y-5 relative"
            >
              <div className="bg-primary-blue-100 rounded-full h-20 w-20 flex flex-row items-center justify-center">
                <Plus size={32} className="text-primary-blue-600" />
              </div>

              <div className="text-center text-primary-blue-500 underline">
                Add more
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuestLink;
