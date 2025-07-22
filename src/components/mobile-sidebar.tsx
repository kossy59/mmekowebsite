import { useAuth } from "@/lib/context/auth-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCamera,
  FaCog,
  FaComments,
  FaCompass,
  FaHeart,
  FaQuestionCircle,
  FaUpload,
  FaUsersCog,
  FaVideo,
} from "react-icons/fa";

export default function MobileSidebar() {
  const sideBarItems = [
    {
      route: "/",
      name: "For You",
      icon: <FaHeart size={25} />,
    },
    {
      route: "/models",
      name: "Models",
      icon: <FaCamera size={25} />,
    },

    {
      route: "/",
      name: "Explorer",
      icon: <FaCompass size={25} />,
    },
    {
      route: "/upload",
      name: "Upload",
      icon: <FaUpload size={25} />,
    },
    {
      route: "/",
      name: "Live",
      icon: <FaVideo size={25} />,
    },
    {
      route: "/",
      name: "Settings",
      icon: <FaCog size={25} />,
    },
    {
      route: "/",
      name: "Feedback",
      icon: <FaComments size={25} />,
    },
    {
      route: "/",
      name: "Support",
      icon: <FaQuestionCircle size={25} />,
    },
    {
      route: "/",
      name: "Guidelines",
      icon: <FaUsersCog size={25} />,
    },
  ];
  const { isOpen, toggle } = useAuth();
  return (
    <section
      className={`h-screen z-[999] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }  mt-12 fixed w-full max-w-[250px] md:max-w-sm bg-gray-900`}
    >
      <div className="px-4 py-6 grid gap-y-4">
        {sideBarItems.map((item) => (
          <Link
            className="flex hover:text-secondary  items-center text-white space-x-2"
            href={item.route}
            key={item.name}
            onClick={toggle}
          >
            {item.icon}
            <p className="text-lg">{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
