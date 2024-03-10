import * as React from "react";
import OnboardingHeader from "../../../components/headers/OnboardingHeader";
import CreatePostPageBody from "./CreatePostPageBody";
import Sidebar from "../../../components/sidebar/Sidebar";


function PostPage(){
    return(
        <div className=" bg-slate-100 min-h-screen">
            
            
         <OnboardingHeader />
         <div className="flex mx-24 gap-11 ">
        <div className="w-4/6">
        <CreatePostPageBody/>  
        </div>
         
         <div className="w-2/6">
         <Sidebar/>
         </div>
         
         </div>
         
        

        </div>
    );
}

export default PostPage;