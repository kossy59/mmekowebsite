import { useAuth } from "@/lib/context/auth-context";
import "@/styles/app.css"
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
  FaStar,
} from "react-icons/fa";

export default function MobileSidebar() {
  const sideBarItems = [
    {
      route: "/mmeko/admin/",
      name: "Overview",
      icon: <FaHeart size={25} />,
    },
    {
      route: "/mmeko/admin/reports",
      name: "ad_min",
      icon: <FaCamera size={25} />,
    },
    {
      route: "/mmeko/admin/model-verification",
      name: "Model Verification",
      icon: <FaCompass size={25} />,
    },
    {
      route: "/mmeko/admin/withdrawal",
      name: "Withdrawal Requests",
      icon: <FaUpload size={25} />,
    },
    {
      route: "/mmeko/admin/users",
      name: "Users",
      icon: <FaVideo size={25} />,
    }
  ];
  const { isOpen, toggle } = useAuth();
  return (
    <section
      className={`sidebar bg-gray-900 ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <Link href="/" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={'/icons/logo.png'} alt="logo" className="brand-logo w-20" />
        <img src={'/icons/icon-192.png'} alt="logo" className="sidebar-logo" />
      </Link>
      <ul className="py-4">
        {sideBarItems.map((item) => (
          <li key={item.name} className="gap-y-3.5 text-sm">
            <Link
              className="flex items-center gap-4 text-white space-x-2"
              href={item.route}
              onClick={toggle}
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
