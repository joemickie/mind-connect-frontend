import * as React from "react";
import { Button, GrayButton } from "../Button";
import { useState } from "react";


function CreatedGroupSuccessModal () {

  const [showCreatedGroupSuccessModal, setShowCreatedGroupSuccessModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null)
    setShowCreatedGroupSuccessModal(false)
};

  

  return (
    <div className="flex flex-col justify-center p-12 text-sm text-gray-900 bg-white rounded-3xl shadow-sm max-w-[441px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6beca7146421b45a931f0c00addbf3dc469677b16315f26632d85bfe435d4eb5?"
        className="self-center w-16 aspect-square"
      />
      <div className="self-center mt-8 text-2xl font-bold leading-8 whitespace-nowrap text-blue-950">
        Group created{" "}
      </div>
      <div className="mt-6 leading-5 text-center">
        You have successfully created a new group: “Group name”
      </div>
        <GrayButton type="button" text="Done" onClick={ handleClose }
        className=" text-black text-base font-semibold font-['Inter'] leading-snug tracking-tight 
        justify-center items-center px-4 py-3 mt-8 max-w-full  
        mb-12 whitespace-nowrap bg-gray-100 rounded-md leading-[143%] max-w-[344px] max-h-[44px]" />
    </div>
  );
}

export default CreatedGroupSuccessModal;


