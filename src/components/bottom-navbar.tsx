"use client";
import React, { ReactNode, useEffect, useState } from "react";
import homeicon from "../icons/homeIcon.svg";
import searchIcon from "../icons/searchIcon1.svg";
import notificationIcon from "../icons/notificationIcon.svg";
import Link from "next/link";
import Image from "next/image";
import { FaThLarge } from "react-icons/fa";
import Navapp from "@/navs/NavApp";

interface BottomNavBarItemProps {
  imgUrl?: string;
  route: string;
  icon?: ReactNode;
}
export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState("home");
  const handleNavigation = (path: string, home: string) => {
    console.log(path, home);
  };

  const routes: BottomNavBarItemProps[] = [
    {
      imgUrl: "/icons/icons8-home.png",
      route: "/",
    },
    {
      imgUrl: "/icons/icons8-search-2.png",
      route: "/",
    },
    {
      imgUrl: "/icons/icons8-notification-1.png",
      route: "/",
    },
    {
      imgUrl: "/icons/icons8-message.png",
      route: "/message",
    },
    // {
    //   route: "/",
    //   icon: <FaThLarge className="w-8 h-8 text-gray-500" />,
    // },
  ];
  return (
    <div className="flex justify-end h-fit mr-8 mt-4 fixed right-0 max-[600px]:bottom-6 max-[600px]:w-full">
      <div className="w-[23rem] max-[600px]:w-[90%] rounded-2xl p-6 bg-gray-900 flex justify-between max-[500px]:w-[93%] mx-2 items-center bottom-4">
        {routes.map((item, i) => (
          <Link key={i} href={item.route}>
            {<Image
                src={item.imgUrl || ""}
                className="size-8"
                alt="Home"
                width={100}
                height={100}
              />
            }
          </Link>
        ))}
        <Navapp />
      </div>
    </div>
  );
}
