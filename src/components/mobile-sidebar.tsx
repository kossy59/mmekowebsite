import { useAuth } from "@/lib/context/auth-context";
import "../styles/app.css"
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
      route: "/settings",
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
      className={`sidebar bg-gray-900 ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <Link href="/" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={'/icons/logo.png'} alt="logo" className="brand-logo w-20" />
        {/* <img src={'/icons/icon-192.png'} alt="logo" className="logo" /> */}
      </Link>
      <ul className="px-4 py-6">
        {sideBarItems.map((item) => (
          <li key={item.name} onClick={toggle} className="grid gap-y-5 text-sm">
            <Link
              className="flex items-center text-white space-x-2"
              href={item.route}
            >
              {item.icon}
              <p className="text-lg">{item.name}</p>
            </Link>
          </li>

        ))}
      </ul>
    </section>
  );
}
