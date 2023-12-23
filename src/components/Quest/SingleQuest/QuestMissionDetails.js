import React from "react";
import QuestAddImage from "./QuestAddImage";
import Points from "./Points";
import { useDispatch, useSelector } from "react-redux";
import { updateDetailsField } from "redux/quests";

const QuestMissionDetails = ({ editMode }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state?.quest?.details);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-4 max-w-xl w-full">
          <h1 className="text-lg font-manrope font-medium">Quest Mission</h1>
          {editMode ? (
            <div className="w-full flex flex-col items-start space-y-1">
              {/* <label>Description</label> */}
              <textarea
                rows={5}
                value={details?.mission}
                onChange={(e) => {
                  dispatch(
                    updateDetailsField({
                      field: "mission",
                      value: e.target.value,
                    })
                  );
                  // setDetails({ ...details, mission: e.target.value });
                }}
                className="w-full bg-primary-grey-100 border-0 focus:border-0 focus:outline-none focus:ring-transparent font-satoshi text-sm md:text-md leading-6  md:leading-8 "
              ></textarea>
            </div>
          ) : (
            <p className="font-satoshi text-sm md:text-md leading-6  md:leading-8 ">
              {details?.mission}
            </p>
          )}
        </div>
        <div className=" grid place-items-center relative">
          {editMode && (
            <QuestAddImage
              onAdd={(val) => {
                let obj = {};
                if (details?.missionImage) {
                  obj = { ...details.missionImage };
                }
                obj["graphic"] = val?.link;
                dispatch(
                  updateDetailsField({
                    field: "missionImage",
                    value: obj,
                  })
                );
                // setDetails({ ...details, missionImage: obj });
              }}
            />
          )}
          <img
            className="h-40 lg:h-[300px] w-40 lg:w-[300px] object-cover rounded-full bg-primary-grey-100"
            src={details?.missionImage?.graphic}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4  ">
        <h1 className="text-lg font-manrope font-medium  ">Mission Details </h1>
        <Points
          list={details?.missionDetails || []}
          setList={(val) => {
            dispatch(
              updateDetailsField({
                field: "missionDetails",
                value: val,
              })
            );
            // setDetails({ ...details, missionDetails: val });
          }}
          editMode={editMode}
        />
      </div>
      <div className="flex flex-col justify-center items-center   md:flex-row gap-6 lg:gap-20">
        <div className=" grid place-items-center relative">
          {editMode && (
            <QuestAddImage
              onAdd={(val) => {
                let obj = {};
                if (details?.missionImage) {
                  obj = { ...details.missionImage };
                }
                obj["rectangular"] = val?.link;
                dispatch(
                  updateDetailsField({
                    field: "missionImage",
                    value: obj,
                  })
                );
                // setDetails({ ...details, missionImage: obj });
              }}
            />
          )}{" "}
          <img
            className="h-40 lg:h-[300px]  w-[240px] lg:w-[380px] object-cover rounded-lg bg-primary-grey-100 "
            src={details?.missionImage?.rectangular}
            alt=""
          />
        </div>
        <div className=" grid place-items-center relative">
          {editMode && (
            <QuestAddImage
              onAdd={(val) => {
                let obj = {};
                if (details?.missionImage) {
                  obj = { ...details.missionImage };
                }
                obj["square"] = val?.link;
                dispatch(
                  updateDetailsField({
                    field: "missionImage",
                    value: obj,
                  })
                );
                // setDetails({ ...details, missionImage: obj });
              }}
            />
          )}{" "}
          <img
            className="h-40 lg:h-[240px] w-[160px] rotate-45 lg:w-[240px] object-cover rounded-lg bg-primary-grey-100 "
            src={details?.missionImage?.square}
            alt=""
          />
        </div>
        <div className=" grid place-items-center relative">
          {editMode && (
            <QuestAddImage
              onAdd={(val) => {
                let obj = {};
                if (details?.missionImage) {
                  obj = { ...details.missionImage };
                }
                obj["circle"] = val?.link;
                dispatch(
                  updateDetailsField({
                    field: "missionImage",
                    value: obj,
                  })
                );
                // setDetails({ ...details, missionImage: obj });
              }}
            />
          )}{" "}
          <img
            className="h-40 lg:h-[300px] w-[160px] lg:w-[300px] object-cover rounded-full bg-primary-grey-100 "
            src={details?.missionImage?.circle}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuestMissionDetails;
