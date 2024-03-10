import * as React from "react";
import SidebarImage from '../../assets/SidebarImage.png'
import { useEffect } from "react";
import axiosConfig from "../../services/api/axiosConfig";
import SweetAlert from "../../commons/SweetAlert";

function Sidebar(props) {

  const [groups, setGroups] = React.useState([])
  useEffect(() => {
      try {
          axiosConfig.get("/group/popular_groups?page=0&size=100")
          .then((data) => {
              const result = data?.data
              setGroups(result);
          })
          .catch((err) => console.error(err))
      } catch (error) {
          throw error
      }
  },[])


  const joingroup = async (name) => {
    try {
       /*  const res = await axiosConfig.post(`/group/joinGroup?name=${name}`)
        if(res.status === 200 || res.status === 201) {
            SweetAlert("Group joined succesfully!")
        } */
        await axiosConfig.post(`/group/joinGroup?name=${name}`)
        .then((data) => {
          if(data.status === 200 || data.status === 201) {
            SweetAlert("Group joined succesfully!")
          }
        })
    } catch(error) {
      alert(error)
    }
}


  return (
    <div className="flex flex-col px-5 pt-10 pb-14 mx-auto w-full text-base leading-6 bg-white shadow-sm max-w-[480px] mt-20 mr-24">
      <div className="flex flex-col px-2 py-4 w-full bg-white rounded-md shadow-md border-t ">
        <div className="self-center font-semibold tracking-normal text-center text-blue-600">
          Suggestions
        </div>
        <div className="shrink-0 mt-6 h-px bg-zinc-100" />
        <div className="mt-8 text-2xl font-bold text-center text-gray-900">
          Popular Groups
        </div>
        <div className="mt-2 text-sm leading-5 text-gray-400">
          Here is a list of some very active groups you might be interested in
          based on your location and engagements.
        </div>
        {
          groups?.map((group, idx) => (
            <div className="flex gap-5 justify-between py-3 mt-6 tracking-normal whitespace-nowrap" key={idx}>
            <div className="grow text-gray-900">{group.name}</div>
            <div className="font-medium text-blue-700 cursor-pointer" role="button"onClick={() => joingroup(group?.name)}>Join</div>
          </div>
          ))
        }
       
      </div>
      <img
        loading="lazy"
        srcSet={SidebarImage}
        className="mt-16 w-full aspect-[2.38]"
      />
      <div className="flex flex-col px-2 py-4 mt-16 w-full bg-white rounded-2xl shadow-sm">
        <div className="self-center font-semibold tracking-normal text-center text-blue-600">
          Messages
        </div>
        <div className="shrink-0 mt-6 h-px bg-zinc-100" />
        <div className="mt-8 text-2xl font-bold text-center text-gray-900">
          {" "}
          Chats
        </div>
        <div className="mt-2 text-sm leading-5 text-gray-400 whitespace-nowrap">
          Here is a list of people you chat with frequently.
        </div>
        <div className="flex gap-5 justify-between py-3 mt-6 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-emerald-500">Online</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-gray-400">Offline</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-emerald-600">Online</div>
        </div>
        <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
          <div className="grow text-gray-900">Jane Doe</div>
          <div className="font-medium text-gray-400">Offline</div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

