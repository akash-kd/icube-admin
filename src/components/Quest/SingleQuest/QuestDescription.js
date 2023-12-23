import React from "react";
import QuestMissionDetails from "./QuestMissionDetails";
import QuestPointsTable from "./QuestPointsTable";
import QuestMethodology from "./QuestMethodology";
import QuestLink from "./QuestLink";
import Points from "./Points";
import { updateDetailsField } from "redux/quests";
import { useDispatch, useSelector } from "react-redux";

const QuestDescription = ({ editMode }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state?.quest?.details);
  return (
    <div className="flex flex-col space-y-20">
      <QuestMissionDetails editMode={editMode} />
      <QuestMethodology editMode={editMode} />
      <div className="flex flex-col gap-4  ">
        <h1 className="text-lg font-manrope font-medium  ">
          Required Submission
        </h1>
        <Points
          list={details?.requiredSubmission?.points}
          setList={(val) => {
            let obj = {};
            if (details?.requiredSubmission) {
              obj = { ...details.requiredSubmission };
            }
            obj["points"] = val;
            dispatch(
              updateDetailsField({
                field: "requiredSubmission",
                value: obj,
              })
            );
            // setDetails({ ...details, requiredSubmission: obj });
          }}
          editMode={editMode}
        />

        <p className="font-satoshi text-sm md:text-md leading-6  md:leading-8 ">
          You can access the submission templates from the link below
          <br />
          {editMode ? (
            <div className="w-full flex flex-col items-start space-y-1">
              <label>Submission Link</label>
              <input
                value={details?.requiredSubmission?.link}
                onChange={(e) => {
                  let obj = {};
                  if (details?.requiredSubmission) {
                    obj = { ...details.requiredSubmission };
                  }
                  obj["link"] = e.target.value;
                  dispatch(
                    updateDetailsField({
                      field: "requiredSubmission",
                      value: obj,
                    })
                  );
                  // setDetails({ ...details, requiredSubmission: obj });
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full"
              ></input>
            </div>
          ) : (
            <a
              href={details?.requiredSubmission?.link}
              target="__blank"
              className="underline text-primary-blue-500 cursor-pointer"
            >
              {details?.requiredSubmission?.link}
            </a>
          )}
        </p>
      </div>
      <QuestLink editMode={editMode} />
      <QuestPointsTable editMode={editMode} />
      <div className="flex flex-col gap-4  ">
        <h1 className="text-lg font-manrope font-medium  ">
          About the Project
        </h1>
        {editMode ? (
          <textarea
            rows={5}
            value={details?.projectDetails}
            onChange={(e) => {
              dispatch(
                updateDetailsField({
                  field: "projectDetails",
                  value: e.target.value,
                })
              );
              // setDetails({ ...details, projectDetails: e.target.value });
            }}
            className="bg-primary-grey-100 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full text-sm md:text-md font-satoshi"
          ></textarea>
        ) : (
          <p className="font-satoshi text-sm md:text-md leading-6  md:leading-8 ">
            {details?.projectDetails}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestDescription;
