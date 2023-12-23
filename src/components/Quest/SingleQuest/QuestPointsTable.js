import React from "react";
import { Lightning } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";

const QuestPointsTable = ({ editMode }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state?.quest?.details);
  return (
    <div className="flex flex-col gap-6 md:gap-4  ">
      <h1 className="text-lg font-manrope font-medium  ">Point Breakdown</h1>
      <div className="flex gap-2 sm:gap-1 items-start ">
        <Lightning alt="" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
        <div className="flex flex-col font-satoshi ">
          <h3 className="text-sm text-primary-grey-800 font-bold ">
            {details?.maxXP}
          </h3>
          <p className="text-xs font-normal">Maximum possible XP</p>
        </div>
      </div>
      <table className=" text-primary-grey-800 ">
        <tbody>
          <tr>
            <th className="border-2 p-2  font-satoshi min-w-[80px] max-w-[264px] font-bold text-xs md:text-md ">
              <div className="flex justify-center items-center">Skill Name</div>
            </th>
            <th className="border-2 p-2  font-satoshi max-w-[264px] font-bold text-xs md:text-md ">
              <div className="flex gap-2 justify-center items-center">
                No. of Sub-Skills/ Concepts
              </div>
            </th>
            <th className="border-2 p-2  font-satoshi max-w-[264px] font-bold text-xs md:text-md ">
              <div className="flex gap-2 justify-center items-center">
                Maximum Points Per Sub-Skill / Concepts
              </div>
            </th>
            <th className="border-2 p-2  font-satoshi max-w-[264px] font-bold text-xs md:text-md ">
              <div className="flex gap-2 justify-center items-center">
                Total Possible Points for Skill
              </div>
            </th>
          </tr>
          {details?.transferableSkills?.map((skill) => {
            return (
              <tr>
                <td className="font-bold text-sm md:text-md p-2 text-primary-blue-700 font-satoshi text-center border-2">
                  {skill?.name}
                </td>
                <td className=" text-sm md:text-md p-2  font-satoshi text-center border-2">
                  {skill?.subSkills?.skills?.length || 0}
                </td>
                <td className=" text-sm md:text-md p-2  font-satoshi text-center border-2">
                  {skill?.subSkills?.maxPointPerSub || 0}
                </td>
                <td className=" text-sm md:text-md p-2  font-satoshi text-center border-2">
                  {skill?.subSkills?.totalMaxPoint || 0}
                </td>
              </tr>
            );
          })}
          {details?.technicalSkills?.map((skill) => {
            return (
              <tr>
                <td className="font-bold text-sm md:text-md p-2 text-primary-red-500 font-satoshi text-center border-2">
                  {skill?.name}
                </td>
                <td className=" text-sm md:text-md p-2  font-satoshi text-center border-2">
                  {skill?.subSkills?.skills?.length || 0}
                </td>
                <td className=" text-sm md:text-md p-2  font-satoshi text-center border-2">
                  {skill?.subSkills?.maxPointPerSub || 0}
                </td>
                <td className=" text-sm md:text-md p-2  font-satoshi text-center border-2">
                  {skill?.subSkills?.totalMaxPoint || 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default QuestPointsTable;
