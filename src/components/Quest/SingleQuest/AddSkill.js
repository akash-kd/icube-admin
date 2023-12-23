import { X } from "@phosphor-icons/react";
import ChronosButton from "components/Comman/Buttons";
import React, { useEffect, useState } from "react";
import Points from "./Points";
function AddSkill({ isOpen, closeModal, label, details, setDetails }) {
  const [skills, setSkills] = useState(details);

  useEffect(() => {
    if (isOpen) {
      setSkills(details);
    }
  }, [isOpen]);

  return (
    <div className="p-5 flex flex-col gap-4 max-w-xl bg-white rounded mx-auto">
      <div className="flex flex-row items-center justify-between space-x-5">
        <h1 className="text-lg font-manrope font-medium">{label} Skills</h1>
        <X
          onClick={() => closeModal()}
          className="text-primary-grey-800 cursor-pointer"
          size={16}
        />
      </div>
      <div className="flex flex-col items-start w-full space-y-6">
        <div className="flex flex-col items-start w-full space-y-4">
          <div className="text-sm font-manrope underline">
            <b>Skill 1</b>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full flex flex-col items-start space-y-1 col-span-2">
              <label>Name</label>{" "}
              <input
                value={skills?.length > 0 ? skills[0]?.name : null}
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];

                  obj[0] = { ...obj[0], name: e.target.value };
                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
            <div className="w-full flex flex-col items-start space-y-1">
              <label>Level</label>{" "}
              <input
                value={skills?.length > 0 ? skills[0]?.level : null}
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];
                  console.log(obj);
                  obj[0] = { ...obj[0], level: e.target.value };
                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
          </div>
          <div className="w-full flex flex-col items-start space-y-1">
            <label>Sub skills</label>
            <Points
              input
              list={
                skills?.length > 0 && skills[0]?.subSkills?.skills
                  ? skills[0]?.subSkills?.skills
                  : []
              }
              setList={(val) => {
                let obj = skills?.length > 0 ? [...skills] : [{}];
                let obj1 = {};
                if (skills[0]?.subSkills) {
                  obj1 = { ...skills[0].subSkills };
                }
                obj1["skills"] = val;
                obj[0]["subSkills"] = obj1;

                setSkills(obj);
              }}
              editMode={true}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full flex flex-col items-start space-y-1">
              <label>Maximum Points Per Sub-Skill / Concepts</label>
              <input
                value={
                  skills?.length > 0
                    ? skills[0]?.subSkills?.maxPointPerSub
                    : null
                }
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];
                  let obj1 = {};
                  if (skills[0]?.subSkills) {
                    obj1 = { ...skills[0].subSkills };
                  }
                  obj1["maxPointPerSub"] = e.target.value;
                  obj[0] = { ...obj[0], subSkills: obj1 };

                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
            <div className="w-full flex flex-col items-start space-y-1">
              <label>Total Possible Points for Skill</label>
              <input
                value={
                  skills?.length > 0
                    ? skills[0]?.subSkills?.totalMaxPoint
                    : null
                }
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];
                  let obj1 = {};
                  if (skills[0]?.subSkills) {
                    obj1 = { ...skills[0].subSkills };
                  }
                  obj1["totalMaxPoint"] = e.target.value;
                  obj[0] = { ...obj[0], subSkills: obj1 };

                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full space-y-4">
          <div className="text-sm font-manrope underline">
            <b>Skill 2</b>
          </div>{" "}
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full flex flex-col items-start space-y-1 col-span-2">
              <label>Name</label>{" "}
              <input
                value={skills?.length > 1 ? skills[1]?.name : null}
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];

                  if (obj?.length == 1) obj.push({});

                  obj[1] = { ...obj[1], name: e.target.value };
                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
            <div className="w-full flex flex-col items-start space-y-1 col-span-1">
              <label>Level</label>{" "}
              <input
                value={skills?.length > 1 ? skills[1]?.level : null}
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];

                  if (obj?.length == 1) obj.push({});

                  obj[1] = { ...obj[1], level: e.target.value };
                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
          </div>
          <div className="w-full flex flex-col items-start space-y-1">
            <label>Sub skills</label>
            <Points
              input
              list={
                skills?.length > 1 && skills[1]?.subSkills?.skills
                  ? skills[1]?.subSkills?.skills
                  : []
              }
              setList={(val) => {
                let obj = skills?.length > 0 ? [...skills] : [{}];
                if (obj?.length == 1) obj.push({});
                let obj1 = {};
                if (skills[1]?.subSkills) {
                  obj1 = { ...skills[1].subSkills };
                }
                obj1["skills"] = val;
                obj[1]["subSkills"] = obj1;

                setSkills(obj);
              }}
              editMode={true}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full flex flex-col items-start space-y-1">
              <label>Maximum Points Per Sub-Skill / Concepts</label>
              <input
                value={
                  skills?.length > 1
                    ? skills[1]?.subSkills?.maxPointPerSub
                    : null
                }
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];
                  if (obj?.length == 1) obj.push({});
                  let obj1 = {};
                  if (skills[1]?.subSkills) {
                    obj1 = { ...skills[1].subSkills };
                  }
                  obj1["maxPointPerSub"] = e.target.value;
                  obj[1] = { ...obj[1], subSkills: obj1 };
                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
            <div className="w-full flex flex-col items-start space-y-1">
              <label>Total Possible Points for Skill</label>
              <input
                value={
                  skills?.length > 1
                    ? skills[1]?.subSkills?.totalMaxPoint
                    : null
                }
                onChange={(e) => {
                  let obj = skills?.length > 0 ? [...skills] : [{}];
                  if (obj?.length == 1) obj.push({});
                  let obj1 = {};
                  if (skills[1]?.subSkills) {
                    obj1 = { ...skills[1].subSkills };
                  }
                  obj1["totalMaxPoint"] = e.target.value;
                  obj[1] = { ...obj[1], subSkills: obj1 };
                  setSkills(obj);
                }}
                className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-satoshi"
              ></input>
            </div>
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
            setDetails(skills);
            closeModal();
          }}
        />
      </div>
    </div>
  );
}

export default AddSkill;
