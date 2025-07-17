"use client";
import React, { ReactNode, useEffect, useState } from "react";
import homeicon from "../icons/homeIcon.svg";
import searchIcon from "../icons/searchIcon1.svg";
import notificationIcon from "../icons/notificationIcon.svg";
import Link from "next/link";
import Image from "next/image";
import { FaThLarge } from "react-icons/fa";

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
      route: "/",
    },
    {
      route: "/",
      icon: <FaThLarge className="w-8 h-8 text-gray-500" />,
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="fixed p-3 rounded-full bg-gray-800 flex justify-around w-[95%] mx-2 items-center bottom-4">
        {routes.map((item, i) => (
          <Link key={i} href={item.route}>
            {item.icon || (
              <Image
                src={item.imgUrl || ""}
                className="size-8"
                alt="Home"
                width={100}
                height={100}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
