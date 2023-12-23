import { Plus, Trash } from "@phosphor-icons/react";
import ChronosButton from "components/Comman/Buttons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDetailsField } from "redux/quests";

function QuestMethodology({ editMode }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state?.quest?.details);
  return (
    <div className="flex flex-col gap-4  ">
      <h1 className="text-lg font-manrope font-medium  ">Methodology</h1>
      <div className="space-y-5 font-satoshi text-sm md:text-md leading-6  md:leading-8 ">
        {details?.methodology?.map((method, index) => {
          if (editMode)
            return (
              <div className="space-y-5 relative">
                <input
                  placeholder={`Step ${index + 1}`}
                  value={method?.name}
                  onChange={(e) => {
                    let temp = [...details.methodology];
                    temp[index] = {
                      ...temp[index],
                      name: e.target.value,
                    };
                    dispatch(
                      updateDetailsField({
                        field: "methodology",
                        value: temp,
                      })
                    );
                  }}
                  className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full font-semibold"
                ></input>
                <ul className="space-y-2.5 pl-5">
                  {method?.points?.map((p, ind) => {
                    return (
                      <li className="relative list-disc">
                        <input
                          value={p}
                          onChange={(e) => {
                            let temp = [...method.points];
                            temp[ind] = e.target.value;
                            let m = [...details.methodology];
                            m[index] = { ...m[index], points: temp };
                            dispatch(
                              updateDetailsField({
                                field: "methodology",
                                value: m,
                              })
                            );
                            // setDetails({ ...details, methodology: m });
                          }}
                          className="bg-primary-grey-100 px-2 border-0 focus:border-0 focus:outline-none focus:ring-transparent w-full"
                        ></input>
                        <Trash
                          className="text-primary-red-500 absolute top-1.5 right-1.5"
                          size={16}
                          onClick={() => {
                            let temp = [...method.points];
                            temp = temp?.filter((a, index1) => index1 !== ind);
                            let m = [...details.methodology];
                            m[index] = { ...m[index], points: temp };
                            dispatch(
                              updateDetailsField({
                                field: "methodology",
                                value: m,
                              })
                            );
                          }}
                        />
                      </li>
                    );
                  })}
                  <ChronosButton
                    underline
                    tertiary
                    text="Add points"
                    onClick={() => {
                      let temp = [...details.methodology];
                      let pts = method?.points ? [...method.points] : [];
                      pts.push("");
                      temp[index] = { ...temp[index], points: pts };
                      dispatch(
                        updateDetailsField({
                          field: "methodology",
                          value: temp,
                        })
                      );
                      // setDetails({
                      //   ...details,
                      //   methodology: temp,
                      // });
                    }}
                    icon={<Plus size={16} className="mr-1.5" />}
                    reverseIcon
                  />
                </ul>
                <Trash
                  className="text-primary-red-500 absolute -top-3 right-1.5 cursor-pointer"
                  size={16}
                  onClick={() => {
                    let temp = [...details.methodology];
                    temp = temp?.filter((a, index1) => index1 !== index);
                    dispatch(
                      updateDetailsField({
                        field: "methodology",
                        value: temp,
                      })
                    );
                  }}
                />
              </div>
            );
          else
            return (
              <div className="space-y-5">
                <p className="font-semibold">
                  Step {index + 1}: {method?.name}
                </p>
                <ul className="space-y-2.5 pl-5">
                  {method?.points?.map((p) => {
                    return <li className=" list-disc">{p}</li>;
                  })}
                </ul>
              </div>
            );
        })}
        {editMode && (
          <ChronosButton
            underline
            tertiary
            text="Add step"
            onClick={() => {
              let temp = [...details.methodology];
              temp.push({ name: "", points: [] });
              dispatch(
                updateDetailsField({
                  field: "methodology",
                  value: temp,
                })
              );
              // setDetails({
              //   ...details,
              //   methodology: temp,
              // });
            }}
            icon={<Plus size={16} className="mr-1.5" />}
            reverseIcon
          />
        )}
      </div>
    </div>
  );
}

export default QuestMethodology;
