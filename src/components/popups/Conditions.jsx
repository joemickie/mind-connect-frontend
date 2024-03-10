import * as React from "react";
import Checkbox from "../../commons/Checkbox";

function Conditions() {
  return (
    <div className="flex flex-col px-4 py-2 text-base tracking-normal leading-6 text-gray-900 bg-white rounded-2xl shadow-sm max-w-[330px]">
      <div className="flex-auto flex gap-2 justify-between">
        <Checkbox
          label={"Anxiety disorder"}
          onValueChanged={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div className="flex-auto flex gap-2 justify-between mt-2">
        <Checkbox
          label={"Eating disorder"}
          onValueChanged={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div className="flex-auto flex gap-2 justify-between mt-2">
        <Checkbox
          label={"Mood disorder"}
          onValueChanged={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div className="flex-auto flex gap-2 justify-between mt-2">
        <Checkbox
          label={"Personality disorder"}
          onValueChanged={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div className="flex-auto flex gap-2 justify-between mt-2">
        <Checkbox
          label={"Psychotic disorder"}
          onValueChanged={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div className="flex-auto flex gap-2 justify-between mt-2 whitespace-nowrap">
        <Checkbox
          label={"Trauma and stress-related disorder"}
          onValueChanged={(e) => {
            console.log(e);
          }}
        />
      </div>
      <div className="flex-auto flex gap-2 justify-between mt-2">
        <Checkbox
          label={"Undiagnosed"}
          onValueChanged={(e) => {
            console.log(e);
          }}
        />
      </div>
    </div>
  );
}

export default Conditions;
