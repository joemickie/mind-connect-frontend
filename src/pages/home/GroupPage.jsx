import * as React from "react";
import DescriptionFormField from "../../components/formFields/DescriptionFormField";
import TextFormField from "../../components/formFields/TextFormField";
import { useState } from "react";
import { Button } from "../../components/Button";
import SweetAlert from "../../commons/SweetAlert";
import OnboardingHeader from "../../components/headers/OnboardingHeader";
import useAxiosWithAuth from "../../services/hooks/useAxiosWithAuth";
import SweetPopup from "../../commons/SweetPopup";
import CreatedGroupSuccessModal from "../../components/popups/CreatedGroupSuccessmodal";


function GroupPage() {
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState("");
  const [ isSuccess, setSuccess ] = useState(false);
  

  const axios = useAxiosWithAuth()

  const handleCreateGroup = async () => {
    setLoading(true)
    await axios.post("/group/create-group", {
        name: name,
        about: about
    }).then((response) => {
        setLoading(false)
        if(response.data["statusCode"] === 200) {
            SweetAlert(response.data["message"], 'success')
            setLoading(true)
            setSuccess(true)
            return
        } else {
            SweetAlert(response.data["message"], 'error')
            return
        }
    }).catch(() => setLoading(false))
}
 


  return (
    

    <div className="flex flex-col pb-12 bg-slate-50">
      <OnboardingHeader />

      <SweetPopup 
       open={ loading }
       loaderElement={
           < CreatedGroupSuccessModal /> 
       }  
   
      />
     
      <div className="justify-center self-center px-4 py-8 w-full max-w-[1266px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 py-8 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-bold leading-8 text-gray-900 max-md:max-w-full">
                Popular Groups
              </div>
              <div className="flex flex-col px-6 pt-4 pb-7 mt-6 bg-gray-50 rounded-2xl border-b border-solid shadow-sm border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl leading-8 text-blue-700">
                  Meditation Group
                </div>
                <div className="flex gap-5 justify-between self-start mt-1 text-sm leading-5 text-gray-400">
                  <div className="flex-auto">Created by: John Johnson</div>
                  <div>4m, 3d ago.</div>
                </div>
                <div className="flex flex-col px-2 py-1 mt-6 bg-white rounded-2xl max-md:max-w-full">
                  <div className="text-base font-medium tracking-normal leading-6 text-gray-400 max-md:max-w-full">
                    Just because meditation has helped a lot with my
                    Schizophrenia. I would like to share the techniques that
                    worked for me with you. If you’ve been finding it difficult
                    to handle you schizophrenia, please join us, and if you have
                    ideas and helpful techniques, please join. Everyone with any
                    form of mental health condition is also welcomed to join{" "}
                  </div>
                  <div className="flex gap-5 justify-between mt-4 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                    <div>40 Members</div>
                    <div>278 Posts</div>
                  </div>
                </div>
                <div className="self-end mt-4 mr-4 text-base font-medium tracking-normal leading-6 text-blue-700 whitespace-nowrap max-md:mr-2.5">
                  Join group
                </div>
              </div>
              <div className="flex flex-col px-6 pt-4 pb-7 mt-4 bg-gray-50 rounded-2xl border-b border-solid shadow-sm border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl leading-8 text-blue-700">
                  Meditation Group
                </div>
                <div className="flex gap-5 justify-between self-start mt-1 text-sm leading-5 text-gray-400">
                  <div className="flex-auto">Created by: John Johnson</div>
                  <div>4m, 3d ago.</div>
                </div>
                <div className="flex flex-col px-2 py-1 mt-6 bg-white rounded-2xl max-md:max-w-full">
                  <div className="text-base font-medium tracking-normal leading-6 text-gray-400 max-md:max-w-full">
                    Just because meditation has helped a lot with my
                    Schizophrenia. I would like to share the techniques that
                    worked for me with you. If you’ve been finding it difficult
                    to handle you schizophrenia, please join us, and if you have
                    ideas and helpful techniques, please join. Everyone with any
                    form of mental health condition is also welcomed to join{" "}
                  </div>
                  <div className="flex gap-5 justify-between mt-4 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                    <div>40 Members</div>
                    <div>278 Posts</div>
                  </div>
                </div>
                <div className="self-end mt-4 mr-4 text-base font-medium tracking-normal leading-6 text-blue-700 whitespace-nowrap max-md:mr-2.5">
                  Exit group
                </div>
              </div>
              <div className="flex flex-col px-6 pt-4 pb-7 mt-4 bg-gray-50 rounded-2xl border-b border-solid shadow-sm border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl leading-8 text-blue-700">
                  Meditation Group
                </div>
                <div className="flex gap-5 justify-between self-start mt-1 text-sm leading-5 text-gray-400">
                  <div className="flex-auto">Created by: John Johnson</div>
                  <div>4m, 3d ago.</div>
                </div>
                <div className="flex flex-col px-2 py-1 mt-6 bg-white rounded-2xl max-md:max-w-full">
                  <div className="text-base font-medium tracking-normal leading-6 text-gray-400 max-md:max-w-full">
                    Just because meditation has helped a lot with my
                    Schizophrenia. I would like to share the techniques that
                    worked for me with you. If you’ve been finding it difficult
                    to handle you schizophrenia, please join us, and if you have
                    ideas and helpful techniques, please join. Everyone with any
                    form of mental health condition is also welcomed to join{" "}
                  </div>
                  <div className="flex gap-5 justify-between mt-4 text-sm leading-5 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                    <div>40 Members</div>
                    <div>278 Posts</div>
                  </div>
                </div>
                <div className="self-end mt-4 mr-4 text-base font-medium tracking-normal leading-6 text-blue-700 whitespace-nowrap max-md:mr-2.5">
                  Join group
                </div>
              </div>
              <div className="self-start mt-8 text-2xl font-bold leading-8 text-gray-900 max-md:max-w-full">
                More Groups
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-6 max-w-full leading-[140%] w-[499px] max-md:flex-wrap">
                <div className="flex-auto text-2xl text-gray-900">
                  You Are What You Eat
                </div>
                <div className="my-auto text-base font-medium tracking-normal text-blue-700">
                  Join group
                </div>
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-5 max-w-full leading-[140%] w-[499px] max-md:flex-wrap">
                <div className="flex-auto text-2xl text-gray-900">
                  Jos Crisis PTSD
                </div>
                <div className="my-auto text-base font-medium tracking-normal text-blue-700">
                  Exit group
                </div>
              </div>
              <div className="flex gap-5 justify-between py-1.5 mt-5 max-w-full leading-[140%] w-[499px] max-md:flex-wrap">
                <div className="flex-auto text-2xl text-gray-900">
                  Grief & Loss Hugs
                </div>
                <div className="my-auto text-base font-medium tracking-normal text-blue-700">
                  Join group
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-end self-stretch px-6 py-8 my-auto w-full bg-gray-50 rounded-2xl shadow-sm max-md:px-5 max-md:mt-10">
              <div className="self-center text-2xl font-bold leading-8 text-gray-900 whitespace-nowrap">
                Create a new group here
              </div>
              <div className="mt-14 text-sm font-medium leading-5 text-neutral-800 max-md:mt-10">
                Group name
              </div>
              <TextFormField
                id={"name"}
                type={"text"}
                placeHolder={"Enter group name"}
                onValueChanged={(e) => setName(e)}
              />
              <div className="flex flex-col mt-4 whitespace-nowrap bg-white">
                <div className="text-sm font-medium leading-5 text-neutral-800">
                  About
                </div>
                <DescriptionFormField
                  id="description"
                  title="About"
                  placeHolder="write group description"
                  onValueChanged={(e) => setAbout(e)}
                />
              </div>
                <Button text="Create a new group" onClick={handleCreateGroup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GroupPage;
