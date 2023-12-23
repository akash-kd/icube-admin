import { ClockIcon } from "@heroicons/react/outline";
import { Check, Pencil, Plus, Trash, X } from "@phosphor-icons/react";
import QuestAddImage from "./QuestAddImage";
import { useDispatch, useSelector } from "react-redux";
import { updateDetailsField } from "redux/quests";
import ChronosButton from "components/Comman/Buttons";
import { useState } from "react";
import WideModalsWrapper from "components/Comman/ModalsWrapper/WideModalWrapper";
import AddSkill from "./AddSkill";

const QuestHeader = ({ onDelete, onUpdate, editMode, setEditMode }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state?.quest?.details);
  const [addSkills, setAddSkills] = useState({ isOpen: false });

  return (
    <>
      <WideModalsWrapper
        isOpen={addSkills?.isOpen ? true : false}
        closeModal={() => {
          setAddSkills({ isOpen: false });
        }}
        component={
          <AddSkill
            isOpen={addSkills?.isOpen ? true : false}
            closeModal={() => {
              setAddSkills({ isOpen: false });
            }}
            label={addSkills?.label}
            details={addSkills?.skills}
            setDetails={(val) => {
              switch (addSkills?.label) {
                case "Transferrable":
                  dispatch(
                    updateDetailsField({
                      field: "transferableSkills",
                      value: val,
                    })
                  );
                  break;
                case "Technical":
                  dispatch(
                    updateDetailsField({
                      field: "technicalSkills",
                      value: val,
                    })
                  );
                  break;
                default:
              }
              setAddSkills({ isOpen: false });
            }}
          />
        }
      />
      {console.log(addSkills)}
      <div className="flex flex-col border-b-2 relative">
        {editMode && (
          <QuestAddImage
            onAdd={(val) => {
              dispatch(
                updateDetailsField({ field: "bannerImage", value: val?.link })
              );
              // setDetails({ ...details, bannerImage: val?.link });
            }}
          />
        )}
        <img
          src={details?.bannerImage}
          className="h-24 md:h-50 object-cover object-center bg-primary-grey-100"
        />
        <div className="px-4 md:px-10 lg:px-28 py-10 md:py-8 pb-10 md:pb-12 flex flex-col gap-8 md:gap-12 ">
          <div className="relative w-full">
            <div className="flex flex-col flex-1 gap-4">
              <div className="flex gap-2">
                {editMode ? (
                  <div className="w-full flex flex-col items-start space-y-1">
                    <label>Name</label>
                    <input
                      value={details?.name}
                      onChange={(e) => {
                        dispatch(
                          updateDetailsField({
                            field: "name",
                            value: e.target.value,
                          })
                        );
                        // setDetails({ ...details, name: e.target.value });
                      }}
                      className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full md:w-11/12 font-manrope text-lg md:text-xl font-medium"
                    ></input>
                  </div>
                ) : (
                  <h1 className="font-manrope text-lg md:text-xl font-medium">
                    {details?.name}
                  </h1>
                )}
              </div>
              {editMode ? (
                <div className="w-full flex flex-col items-start space-y-1">
                  <label>Description</label>
                  <textarea
                    rows={5}
                    value={details?.description}
                    onChange={(e) => {
                      dispatch(
                        updateDetailsField({
                          field: "description",
                          value: e.target.value,
                        })
                      );
                      //  setDetails({ ...details, description: e.target.value });
                    }}
                    className="bg-primary-grey-100 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full text-sm md:text-md font-satoshi"
                  ></textarea>
                </div>
              ) : (
                <p className="font-satoshi text-sm md:text-md ">
                  {details?.description}
                </p>
              )}
            </div>
            {editMode ? (
              <div className="flex flex-row items-center space-x-2.5 absolute -top-6 md:top-2 right-2 cursor-pointer">
                <Check
                  onClick={() => {
                    onUpdate();
                  }}
                  size={20}
                  className="text-primary-blue-700"
                />
                <X
                  onClick={() => {
                    setEditMode(false);
                  }}
                  size={20}
                  className="text-primary-red-500"
                />
              </div>
            ) : (
              <div className="flex flex-row items-center space-x-2.5 absolute -top-6 md:top-2 right-2 cursor-pointer">
                <Pencil
                  onClick={() => {
                    setEditMode(true);
                  }}
                  size={20}
                  className="text-primary-blue-700"
                />
                <Trash
                  onClick={() => {
                    onDelete();
                  }}
                  size={20}
                  className="text-primary-red-500"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col items-start space-y-1.5">
            <div className="flex flex-row flex-wrap">
              {editMode ? (
                <>
                  {details?.transferableSkills?.map((skill) => {
                    return (
                      <h2 className="flex gap-2 sm:gap-4 items-center max-w-max  md:pr-4 rounded-lg text-primary-blue-600 font-bold text-md  m-1.5 ">
                        {skill?.name}
                        <span className="bg-primary-grey-250 p-1  text-mini">
                          {skill?.level}
                        </span>
                      </h2>
                    );
                  })}
                  {details?.transferableSkills?.length > 0 ? (
                    <Pencil
                      onClick={() => {
                        setAddSkills({
                          isOpen: true,
                          label: "Transferrable",
                          skills: details?.transferableSkills,
                        });
                      }}
                      size={20}
                      className="text-primary-blue-700 mt-2.5"
                    />
                  ) : (
                    <ChronosButton
                      underline
                      text="Add Transferable Skills"
                      tertiary
                      icon={<Plus size={16} className="mr-1.5" />}
                      reverseIcon
                      onClick={() => {
                        setAddSkills({
                          isOpen: true,
                          label: "Transferrable",
                          skills: details?.transferableSkills,
                        });
                      }}
                    />
                  )}
                </>
              ) : (
                details?.transferableSkills?.map((skill) => {
                  return (
                    <h2 className="flex gap-2 sm:gap-4 items-center max-w-max  md:pr-4 rounded-lg text-primary-blue-600 font-bold text-md  m-1.5 ">
                      {skill?.name}
                      <span className="bg-primary-grey-250 p-1  text-mini">
                        {skill?.level}
                      </span>
                    </h2>
                  );
                })
              )}
            </div>
            <div className="flex flex-row flex-wrap">
              {editMode ? (
                <>
                  {details?.technicalSkills?.map((skill) => {
                    return (
                      <h2 className="flex gap-2 sm:gap-4 items-center max-w-max  md:pr-4 rounded-lg text-primary-blue-600 font-bold text-md  m-1.5 ">
                        {skill?.name}
                        <span className="bg-primary-grey-250 p-1  text-mini">
                          {skill?.level}
                        </span>
                      </h2>
                    );
                  })}
                  {details?.technicalSkills?.length > 0 ? (
                    <Pencil
                      onClick={() => {
                        setAddSkills({
                          isOpen: true,
                          label: "Technical",
                          skills: details?.technicalSkills,
                        });
                      }}
                      size={20}
                      className="text-primary-blue-700 mt-2.5"
                    />
                  ) : (
                    <ChronosButton
                      underline
                      text="Add Technical Skills"
                      tertiary
                      icon={<Plus size={16} className="mr-1.5" />}
                      reverseIcon
                      onClick={() => {
                        setAddSkills({
                          isOpen: true,
                          label: "Technical",
                          skills: details?.technicalSkills,
                        });
                      }}
                    />
                  )}
                </>
              ) : (
                details?.technicalSkills?.map((skill) => {
                  return (
                    <h2 className="flex gap-2 sm:gap-4 items-center max-w-max  md:pr-4 rounded-lg text-primary-red-500 font-bold text-md m-1.5  ">
                      {skill?.name}
                      <span className="bg-primary-grey-250 p-1  text-mini">
                        {skill?.level}
                      </span>
                    </h2>
                  );
                })
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 px-5 md:px-0 ">
            <div className=" flex  gap-10">
              {/* <div className="flex gap-2 sm:gap-1 items-start ">
              <Lightning
                // src={BoltIcon}
                alt=""
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
              <div className="flex flex-col font-satoshi ">
                <h3 className="text-xs sm:text-sm text-primary-grey-800 font-bold ">
                  0000
                </h3>
                <p className="text-xxs sm:text-xs font-normal">
                  Maximum possible XP
                </p>
              </div>
            </div> */}
              <div className="flex gap-2 sm:gap-1 items-start">
                <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue-500" />
                <div className="flex flex-col font-satoshi ">
                  {editMode ? (
                    <input
                      value={details?.daysToComplete}
                      onChange={(e) => {
                        dispatch(
                          updateDetailsField({
                            field: "daysToComplete",
                            value: e.target.value,
                          })
                        );
                      }}
                      className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-20 text-xs sm:text-sm text-primary-grey-800 font-bold "
                    ></input>
                  ) : (
                    <h3 className="text-xs sm:text-sm text-primary-grey-800 font-bold ">
                      {details?.daysToComplete} Days
                    </h3>
                  )}
                  <p className="text-xxs sm:text-xs font-normal">
                    Days to complete
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-1 md:px-0 font-satoshi ">
              {editMode ? (
                <div className="w-full flex flex-col items-start space-y-1">
                  <label>Project Name</label>
                  <input
                    value={details?.projectName}
                    onChange={(e) => {
                      dispatch(
                        updateDetailsField({
                          field: "projectName",
                          value: e.target.value,
                        })
                      );
                      //  setDetails({ ...details, projectName: e.target.value });
                    }}
                    className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-manrope text-sm font-bold text-primary-grey-800"
                  ></input>
                </div>
              ) : (
                <h3 className="text-sm text-primary-grey-800 font-bold ">
                  {details?.projectName}
                </h3>
              )}
              {editMode ? (
                <div className="w-full flex flex-col items-start space-y-1 mt-2.5">
                  <label>Role</label>
                  <input
                    value={details?.role}
                    onChange={(e) => {
                      dispatch(
                        updateDetailsField({
                          field: "role",
                          value: e.target.value,
                        })
                      );
                      //  setDetails({ ...details, role: e.target.value });
                    }}
                    className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-manrope text-xs"
                  ></input>
                </div>
              ) : (
                <p className="text-xs font-normal">{details?.role}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestHeader;
