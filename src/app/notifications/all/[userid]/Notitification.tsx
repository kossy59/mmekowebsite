"use client"
import React, { useEffect, useState } from "react";
import notifymeIcon from "../../icons/notifymeIcon.svg";
// import { Meetupview } from "./modelnotifyviews/Meetupview";
// import { Allview } from "./modelnotifyviews/Allview";
// import { Requestview } from "./modelnotifyviews/Requestview";
// import { Acceptedview } from "./modelnotifyviews/Acceptedview";
import { FaAngleLeft } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Allview } from "./components/Allview";

const style = " hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"

export const Modelnotify = () => {
  const router = useRouter();
  const [all, setall] = useState("#292d31");
  const [meetup, setmeetup] = useState("");
  const [request, setrequest] = useState("");
  const [accepted, setaccepted] = useState("");

  return (
    <div className="w-full mt-16 px-4">
      <div className="md:w-4/5 md:mx-auto">
      <header className="flex items-center gap-4">
        <FaAngleLeft
          color="white"
          size={30}
          onClick={() => {
            router.push("/");
          }}
        />

        <h4 className="text-lg font-bold text-white">Notifications</h4>
      </header>

      <div className="flex-col items-center w-full overflow-auto pb-7 mt-8">
        <div className="flex gap-2 mb-8">
          <HeadBtn label="All" route="/notifications/all/random37392279209" />
          <HeadBtn label="Appointment" route="/notifications/appointment/random37392279209" />
          <HeadBtn label="Request" route="/notifications/request/random37392279209" />
          <HeadBtn label="Accepted" route="/notifications/accepted/random37392279209" />
        </div>

        {/*<div className="overflow-auto"></div>
        <Routes>
          <Route path="meetupview/" element={<Meetupview />} />
          <Route path="allview/" element={<Allview />} />
          <Route path="requestview/" element={<Requestview />} />
          <Route path="acceptedview/" element={<Acceptedview />} />
        </Routes>*/}
        <Allview />
      </div>
      </div>
      {/* <div className="md:hidden"><BottomNav/></div> */}
    </div>
  );
};

function HeadBtn({label, route}: {label: string, route: string}){
  const pathname = usePathname()
  return <Link href={route} className={`w-full font-bold transition-all duration-500 p-2 border border-gray-800 text-center text- text-slate-400 rounded-2xl ${pathname.includes(route) ? "bg-[#292d31] hover:bg-gray-900" : style}`}>
           {label}
          </Link>
}
