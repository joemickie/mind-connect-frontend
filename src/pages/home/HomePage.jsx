import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import OnboardingHeader from "../../components/headers/OnboardingHeader"
import { Icon } from "@iconify/react";
import OurRoutes from "../../commons/OurRoutes";
import { Link } from "react-router-dom";
import SweetAlert from "../../commons/SweetAlert";
import {Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";
import axiosConfig from "../../services/api/axiosConfig";
import useAxiosWithAuth from "../../services/hooks/useAxiosWithAuth";
import SaveIcon from '@mui/icons-material/Save';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function HomePage() {

    const [posts, setPosts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    
  };
  

const axios = useAxiosWithAuth()

const [ active, setActive ] = useState(0)
const [ currentPage, setCurrentPage ] = useState(1)
const [ totalPages, setTotalPages ] = useState(1)

const handleNextPage = () => {
    if(currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
        fetchPosts(currentPage)
    }
}

const handlePreviousPage = () => {
    if(currentPage !== 1) {
        setCurrentPage(currentPage - 1)
        fetchPosts(currentPage - 2)
    }
}

// useEffect(() => {
//   try {
//       axios.get("/api/posts/getAllPost")
//       .then((data) => {
//           const result = data?.data?.data
//           setPosts(result);
//       })
//       .catch((err) => console.error(err))
//   } catch (error) {
//       throw error
//   }
// },[])

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

// const handleClick = (key) => {
//   setActive(key)
// }


const fetchPosts = useCallback(async (page) => {
  await axios.get(`/user/news/feed?isUser=false&page=0&size=10`).then((response) => {
      if(response != null) {
          if(response.data["statusCode"] === 200){
              setTotalPages(response.data["data"]["pages"])
              const posts = response.data["data"]["data"].map(posts => ({
                  context: posts.context,
                  name: posts.name
              }));
              setPosts(posts)
          } else {
              SweetAlert(response.data["message"])
          }
      }
  }).catch((error) => {})
}, [ axios ])

useEffect(() => {
  fetchPosts(0);
}, [ fetchPosts ]);

  return (
    <div className="flex flex-col pb-12 bg-slate-70">
      <OnboardingHeader />
      <div className="flex flex-col px-10 justify-center  bg-slate-50 rounded border border-solid">
        <div className="flex flex-col justify-center text-base leading-6 text-gray-400 whitespace-nowrap max-w-[628px]">
          <Link to={OurRoutes.post} className="font-semibold text-blue-700">
            What's on your mind?
          </Link>
        </div>
        <div className="mx-5 mt-6 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full border-solid rounded-2xl">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-8 py-4 bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                      <div className="justify-center self-start px-5 py-5 text-xs font-medium leading-4 text-center text-white whitespace-nowrap bg-blue-600 aspect-[1.35] rounded-[200px]">
                        SA
                      </div>
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="font-semibold text-center leading-[140%] max-md:max-w-full">
                        {posts?.user?.firstName} {posts?.user?.lastName}
                        </div>
                        <div className="text-sm leading-5 text-gray-400">
                        {new Date(posts?.createdAt)?.toDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between my-auto"> 
                    <div>
                    <Tooltip title="">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                      <Icon icon="ph:dots-three-bold" width={25} /> 
                    </IconButton>
                    <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem >
                    <ListItemIcon>
                        <SaveIcon fontSize="small" color="blue"/>
                    </ListItemIcon>
                    Save post
                </MenuItem>
                <Divider />
                <MenuItem >
                    <ListItemIcon>
                    <Icon icon="ph:flag" width={25} color="blue"/>
                    </ListItemIcon>
                    Report account
                </MenuItem>
                </Menu>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                       <Icon icon="fontisto:close-a" />  
                    </IconButton>
                    <Menu
                id="basic"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem >
                    <ListItemIcon>
                        <ManageAccountsIcon fontSize="small" color="blue"/>
                    </ListItemIcon>
                    Block account
                </MenuItem>
                </Menu>
                </Tooltip>
                </div>
            
                      
                     
                    </div>
                  </div>
                  <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                  {posts?.content}
                  </div>
                  <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 justify-between whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee02ffa827a318216f6b5ccbeadb8ca651e9dcb5413ec02e709a04ff8b05d68?"
                        className="w-5 aspect-square fill-red-700"
                      />
                      {posts?.likes}
                    </div>
                    <div className="flex-auto">{posts?.comment?.length} comment{posts?.comment?.length > 1 ? "s" : ""}</div>
                  </div>
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                  <div className="flex gap-5 justify-between px-20 mt-2 w-full text-sm leading-5 whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-1 justify-between">
                      <Icon icon="icon-park-outline:like" width={25} />
                      <div className="grow my-auto">Like</div>
                    </div>
                    <div className="flex gap-1 justify-between">
                      <Icon icon="uil:comment" width={25} />
                      <div className="grow my-auto">Comment</div>
                    </div>
                    <div className="flex gap-1 justify-between">
                      <Icon icon="ph:flag" width={25} />
                      <div className="grow my-auto">Report</div>
                    </div>
                  </div>
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                  <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                    <Icon icon="carbon:user-avatar-filled" width={50} />
                    <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                      <div className="flex flex-col px-2.5 py-1 text-base tracking-normal text-gray-900 bg-white rounded-2xl max-md:max-w-full">
                        <div className="font-semibold text-center leading-[140%] max-md:max-w-full">
                          Jane Doe
                        </div>
                        <div className="mt-1 leading-6 max-md:max-w-full">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.{" "}
                        </div>
                      </div>{" "}
                      <div className="flex gap-5 justify-between pr-12 mt-1 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex gap-4">
                          <div>32 min</div> <div>Like</div> <div>Reply</div>
                        </div>{" "}
                        <div className="flex gap-1 justify-between whitespace-nowrap">
                          <div>2</div>{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56f11efc5c2631e4ec06d02c80380e32329d858cb1968906fc21df73aa210292?"
                            className="w-5 aspect-square fill-red-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center self-start px-5 py-5 text-xs font-medium leading-4 text-center text-white whitespace-nowrap bg-blue-600 aspect-[1.35] rounded-[200px]">
                      SA
                    </div>{" "}
                    <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                      <div className="flex flex-col px-3 py-1 text-base tracking-normal leading-6 text-gray-900 bg-white rounded-2xl max-md:max-w-full">
                        <div className="font-semibold text-center max-md:max-w-full">
                          Jane Doe
                        </div>{" "}
                        <div className="mt-1 max-md:max-w-full">
                          There are many variations of passages of Lorem Ipsum.{" "}
                        </div>
                      </div>{" "}
                      <div className="flex gap-5 justify-between pr-20 mt-1 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex gap-4">
                          <div>19 min</div> <div>Like</div> <div>Reply</div>
                        </div>{" "}
                        <div className="flex gap-1 justify-between whitespace-nowrap">
                          <div>2</div>{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a32a6e31f372f11194b6c8d01b6c5e854f7eb4917712a97f7bd203cc5f14dd?"
                            className="w-5 aspect-square fill-red-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                    <Icon icon="carbon:user-avatar-filled" width={50} />{" "}
                    <form className="flex gap-5 justify-between px-2.5 py-3 w-full bg-white rounded border border-solid border-[color:var(--Gray-400,#BDBDBD)] max-md:flex-wrap max-md:max-w-full">
                      {/* <div className="flex-auto text-base leading-6 text-neutral-500">
                        Write a comment
                      </div>{" "} */}
                      <input
                        type="text"
                        placeholder="Write a comment"
                        className="grow border-none"
                      />
                      <div className="flex gap-1 justify-between text-sm leading-5 whitespace-nowrap text-slate-600">
                        <Icon icon="lucide:send" width={25} />{" "}
                        <div className="grow my-auto">send</div>
                      </div>
                    </form>
                  </div>
                </div>{" "}
                <div className="flex flex-col px-8 py-4 mt-6 bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                   
                    <div className="justify-center self-start px-5 py-5 text-xs font-medium leading-4 text-center text-white whitespace-nowrap bg-blue-600 aspect-[1.35] rounded-[200px]">
                      SA
                    </div>{" "}
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                          Jane Doe
                        </div>{" "}
                        <div className="text-sm leading-5 text-gray-400">
                          37 min
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex gap-5 justify-between my-auto">
                    <Icon icon="ph:dots-three-bold" width={25} />{" "}
                    <Icon icon="fontisto:close-a" />
                    </div>
                  </div>{" "}
                 
                  <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 justify-between whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee02ffa827a318216f6b5ccbeadb8ca651e9dcb5413ec02e709a04ff8b05d68?"
                        className="w-5 aspect-square fill-red-700"
                      />{" "}
                      <div>12</div>
                    </div>{" "}
                    <div className="flex-auto">9 comments</div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />{" "}
                  <div className="flex gap-5 justify-between px-20 mt-2 w-full text-sm leading-5 whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-1 justify-between">
                      <Icon icon="icon-park-outline:like" width={25} />{" "}
                      <div className="grow my-auto">Like</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <Icon icon="uil:comment" width={25} />{" "}
                      <div className="grow my-auto">Comment</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <Icon icon="ph:flag" width={25} />{" "}
                      <div className="grow my-auto">Report</div>
                    </div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                </div>{" "}
                <div className="flex flex-col px-8 py-4 mt-6 bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                      <Icon icon="carbon:user-avatar-filled" width={50} />{" "}
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                          Jane Doe
                        </div>{" "}
                        <div className="text-sm leading-5 text-gray-400">
                          37 min
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex gap-5 justify-between my-auto">
                      <Icon icon="ph:dots-three-bold" width={25} />{" "}
                      <Icon icon="fontisto:close-a" />
                    </div>
                  </div>{" "}
                  <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 justify-between whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1964fd9625bb68998c2bf64f072658ee86a801e0db7d5eaf35184eedc2e3f7f2?"
                        className="w-5 aspect-square fill-red-700"
                      />{" "}
                      <div>12</div>
                    </div>{" "}
                    <div className="flex-auto">9 comments</div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />{" "}
                  <div className="flex gap-5 justify-between px-20 mt-2 w-full text-sm leading-5 whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-1 justify-between">
                      <Icon icon="icon-park-outline:like" width={25} />{" "}
                      <div className="grow my-auto">Like</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <Icon icon="uil:comment" width={25} />{" "}
                      <div className="grow my-auto">Comment</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <Icon icon="ph:flag" width={25} />{" "}
                      <div className="grow my-auto">Report</div>
                    </div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col px-5 py-11 mx-auto w-full text-base leading-6 bg-white shadow-sm max-w-[480px]">
            <Sidebar />
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-4 justify-center self-center mt-16 text-base tracking-normal leading-6 text-blue-600 whitespace-nowrap max-md:mt-10">
          <div className="grow" >View older posts</div>{" "}
          <Icon icon="mynaui:arrow-down" width={25} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;