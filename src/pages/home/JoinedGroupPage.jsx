import * as React from "react";
import TextFormField from "../../components/formFields/TextFormField";
import OnboardingHeader from "../../components/headers/OnboardingHeader";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa6";
import { IoFlagOutline } from "react-icons/io5";





function JoinedGroupPage() {
    return (
        <div className="bg-blue-50">
            <OnboardingHeader />
            <div className="bg-blue-50 py-12">

                <div className="flex justify-between px-10 items-center">
                    <Link className="flex gap-2">
                        <FaLongArrowAltLeft />
                        Go back
                    </Link>
                    <p class="font-inter text-32 font-bold leading-140 tracking-0.25 text-Main-Text">
                        Meditation Group
                    </p>

                    <button className="bg-blue-700 rounded-md text-white px-4 py-3 font-medium justify-center">
                        Leave group
                    </button>
                </div>
                <div className="justify-center items-start self-stretch py-3 pr-16 pl-3 text-base leading-6 text-gray-400 whitespace-nowraprounded border-[color:var(--Gray-400,#BDBDBD)] max-w-[628px] max-md:pr-5 ml-60">
                    <TextFormField
                        type="text"
                        placeHolder="what's on your mind?"
                    />
                </div>
                <div className="flex flex-col max-w-[962px] mx-60">
                    <div className="flex flex-col px-12 py-4 w-full bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                                <div className="justify-center self-start px-5 py-5 text-xs font-medium leading-4 text-center text-white whitespace-nowrap bg-blue-600 aspect-[1.35] rounded-[200px]">
                                    SA
                                </div>
                                <div className="flex flex-col flex-1 my-auto">
                                    <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                                        Jane Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-400">37 min</div>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between my-auto">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07f950cedccdedf85d6e560390b4e6bec306eda2479d06f94076be48f4286bc?"
                                    className="w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6536ec29deebf65e8721c749d6aba62ec2efe990a30c5178f0c88b5479e17608?"
                                    className="w-6 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure
                            there isn't anything embarrassing hidden in the middle of text. All
                            the Lorem Ipsum generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true generator on the
                            Internet.
                        </div>
                        <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-1 justify-between whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a94d0eb7a9dfb3ef41ec3b92dd7c35d48c33df384d16fe4f3be1f96bad211b9?"
                                    className="w-5 aspect-square fill-red-700"
                                />
                                <div>12</div>
                            </div>
                            <div>9 comments</div>
                        </div>
                        <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[621px]" />
                        <div className="flex justify-center items-center px-16 mt-2 text-sm leading-5 whitespace-nowrap text-slate-600 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between px-px max-w-full w-[542px] max-md:flex-wrap">
                            <div className="flex gap-1 justify-between">
                                       <button className="flex gap-2">
                                       <FcLike />
                                       Like
                                       </button>
                                    </div>
                                <div className="flex gap-1 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04176f4370ff24aedb8206a2d72a454989fab79a8d5d67ce2854844baaa5b783?"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="grow my-auto">Comment</div>
                                </div>
                                <div className="flex gap-1 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/82312495f05a99b77cd31759bd7004674a53b3464bbb0bb1a609ec7c996d98de?"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="grow my-auto">Report</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[621px]" />
                        <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="self-start w-12 aspect-square"
                            />
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex flex-col px-2 py-1 text-base tracking-normal text-gray-900 bg-white rounded-2xl max-md:max-w-full">
                                    <div className="font-semibold text-center leading-[140%] max-md:max-w-full">
                                        Jane Doe
                                    </div>
                                    <div className="mt-1 leading-6 max-md:max-w-full">
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour, or randomised words which don't look even
                                        slightly believable.{" "}
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between pr-20 mt-1 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="flex gap-4">
                                        <div>32 min</div>
                                        <div>Like</div>
                                        <div>Reply</div>
                                    </div>
                                    <div className="flex gap-1 justify-between whitespace-nowrap">
                                        <div>2</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dff9dfd6547b96026e4302c27caae99fabdddfd9e5322f5bbfc72442d83f115c?"
                                            className="w-5 aspect-square fill-red-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between self-start mt-6 max-md:flex-wrap max-md:max-w-full">
                            <div className="justify-center self-start px-5 py-5 text-xs font-medium leading-4 text-center text-white whitespace-nowrap bg-blue-600 aspect-[1.35] rounded-[200px]">
                                SA
                            </div>
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex flex-col px-2 py-1 text-base tracking-normal leading-6 text-gray-900 bg-white rounded-2xl max-md:max-w-full">
                                    <div className="font-semibold text-center max-md:max-w-full">
                                        Jane Doe
                                    </div>
                                    <div className="mt-1 max-md:max-w-full">
                                        There are many variations of passages of Lorem Ipsum.{" "}
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-1 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex gap-4">
                                        <div>19 min</div>
                                        <div>Like</div>
                                        <div>Reply</div>
                                    </div>
                                    <div className="flex gap-1 justify-between whitespace-nowrap">
                                        <div>2</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d82b1efcb81330bae0a3251da5892386b869c583cfa381666c1122dea5f7ccdf?"
                                            className="w-5 aspect-square fill-red-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="w-12 aspect-square"
                            />
                            <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                                <div className="flex gap-5 justify-between py-3 pr-20 pl-4 w-full bg-white rounded border border-solid border-[color:var(--Gray-400,#BDBDBD)] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="flex-auto text-base leading-6 text-neutral-500">
                                        Write a comment
                                    </div>
                                    <div className="flex gap-1 justify-between text-sm leading-5 whitespace-nowrap text-slate-600">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0086aaa484650781e2c96bb977c1f042dfe555358599de6b9fbbf40fcebc598?"
                                            className="w-6 aspect-square"
                                        />
                                        <div className="grow my-auto">send</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-12 py-4 mt-6 w-full bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="w-12 aspect-square"
                                />
                                <div className="flex flex-col flex-1 my-auto">
                                    <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                                        Jane Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-400">37 min</div>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between my-auto">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ceab5979ad0d81e8b61217b8f65076ebcb3d0ab925029a68fc9ed0b3a5a0352?"
                                    className="w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/457b76e8729d4d7dbd0233cf4e922413cc0dde7d75b9d0e4fc492c25daeaa628?"
                                    className="w-6 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure
                            there isn't anything embarrassing hidden in the middle of text. All
                            the Lorem Ipsum generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true generator on the
                            Internet.
                        </div>
                        <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-1 justify-between whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5ae0ece8ff2afbfd43dd658be7b00fd0541817f9e82aaa6cb98534ded95c74?"
                                    className="w-5 aspect-square fill-red-700"
                                />
                                <div>12</div>
                            </div>
                            <div>9 comments</div>
                        </div>
                        <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[620px]" />
                        <div className="flex justify-center items-center px-16 mt-2 text-sm leading-5 whitespace-nowrap text-slate-600 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between px-px max-w-full w-[542px] max-md:flex-wrap">
                            <div className="flex gap-1 justify-between">
                                       <button className="flex gap-2">
                                       <FcLike />
                                       Like
                                       </button>
                                    </div>
                                <div className="flex gap-1 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae97ad12f4c358f3c39e614593e4643e9cf7f20cb293b603c19dc706c8173c13?"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="grow my-auto">Comment</div>
                                </div>
                                <div className="flex gap-1 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9502773d63479e0152b0914826271537411774e16f49b41284c52140c416cca?"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="grow my-auto">Report</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[620px]" />
                    </div>
                    <div className="flex flex-col px-12 py-4 mt-6 w-full bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="w-12 aspect-square"
                                />
                                <div className="flex flex-col flex-1 my-auto">
                                    <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                                        Jane Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-400">37 min</div>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between my-auto">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ceab5979ad0d81e8b61217b8f65076ebcb3d0ab925029a68fc9ed0b3a5a0352?"
                                    className="w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/457b76e8729d4d7dbd0233cf4e922413cc0dde7d75b9d0e4fc492c25daeaa628?"
                                    className="w-6 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure
                            there isn't anything embarrassing hidden in the middle of text. All
                            the Lorem Ipsum generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true generator on the
                            Internet.
                        </div>
                        <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-1 justify-between whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5ae0ece8ff2afbfd43dd658be7b00fd0541817f9e82aaa6cb98534ded95c74?"
                                    className="w-5 aspect-square fill-red-700"
                                />
                                <div>12</div>
                            </div>
                            <div>9 comments</div>
                        </div>
                        <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[620px]" />
                        <div className="flex justify-center items-center px-16 mt-2 text-sm leading-5 whitespace-nowrap text-slate-600 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-5 justify-between px-px max-w-full w-[542px] max-md:flex-wrap">
                                <div className="flex gap-1 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/689a5dc16e7cb0b84991851ca7e8fdf5f7bf24b5e9ba443a02f48ca0b064ac39?"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="grow my-auto">Like</div>
                                </div>
                                <div className="flex gap-1 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae97ad12f4c358f3c39e614593e4643e9cf7f20cb293b603c19dc706c8173c13?"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="grow my-auto">Comment</div>
                                </div>
                                <div className="flex gap-1 justify-between">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9502773d63479e0152b0914826271537411774e16f49b41284c52140c416cca?"
                                        className="w-6 aspect-square"
                                    />
                                    <div className="grow my-auto">Report</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[620px]" />
                    </div>
                    <div className="flex gap-4 justify-center self-center mt-16 text-base tracking-normal leading-6 text-blue-600 whitespace-nowrap max-md:mt-10">
          <div className="grow">View older posts</div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad54d6b36a66e8e175a577cb019432571897eeacac761e925999a6abe8429bad?"
            className="w-6 aspect-square"
          />
        </div>
                </div>


            </div>
            



        </div>
    );
}
export default JoinedGroupPage;