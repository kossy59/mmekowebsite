"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import DummyModelImage from "@/icons/mmekoDummy.png";
import onlineIcon from "@/icons/onlineIcon.svg";
import offlineIcon from "@/icons/offlineIcon.svg";
import femaleIcon from "@/icons/femaleIcon.svg";
import maleIcon from "@/icons/maleIcon.svg";
import transIcon from "@/icons/transIcon.svg";
import { getCountryData } from "@/api/getCountries";

// Props interface
interface ListOfModelsProps {
  photolink: string[];
  hosttype: string;
  online: boolean;
  name: string;
  age: number;
  gender: string;
  location: string;
  interest: string[];
  amount: number;
  modelid: string;
  userid: string;
  createdAt: string;
}

interface CountryData {
  flag: string;
  abbreviation: string;
  fifa: string;
}

export const ListofModels = ({
  photolink,
  hosttype,
  online,
  name,
  age,
  gender,
  location,
  interest,
  amount,
  modelid,
  userid,
  createdAt,
}: ListOfModelsProps) => {
  const router = useRouter();
  const [hostImg, setHostImg] = useState<string>(DummyModelImage.src);
  const [countryData, setCountryData] = useState<CountryData>({
    flag: "",
    abbreviation: "",
    fifa: "",
  });
  const [isNew, setIsNew] = useState(false);

  // Check if model was created within 7 days
  useEffect(() => {
    if (createdAt) {
      const creationDate = new Date(createdAt);
      const currentDate = new Date();
      const diffInMs = currentDate.getTime() - creationDate.getTime();
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      setIsNew(diffInDays <= 7);
    }
  }, [createdAt]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountryData(location);
      if (data) setCountryData(data);
    };
    fetchData();
  }, [location]);

  useEffect(() => {
    if (photolink?.length > 0) {
      setHostImg(photolink[0]);
    }
  }, [photolink]);

  const fetchGenderIcon = () => {
    if (gender === "Man") return maleIcon;
    if (gender === "Woman") return femaleIcon;
    return transIcon;
  };

  const handleClick = () => {
    router.push(`/modelbyid/${modelid},${userid}`);
  };

  return (
    <li className="overflow-hidden" onClick={handleClick}>
      <div className="relative">
        {/* Host Image */}
        <div>
          <Image
            alt="model"
            src={hostImg}
            width={400}
            height={300}
            className="object-cover w-full rounded h-80"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = DummyModelImage.src;
            }}
          />
        </div>

        {/* Online/Offline Indicator */}
        <div className="absolute top-0 left-0 w-6 h-6 m-1">
          <Image
            alt={online ? "online" : "offline"}
            src={online ? onlineIcon : offlineIcon}
            width={20}
            height={20}
            className={`object-cover rounded-full ${
              online ? "bg-[#d3f6e0]" : "bg-[#ffd8d9]"
            }`}
          />
        </div>

        {/* New Badge */}
        {isNew && (
          <div className="absolute top-0 right-0 m-1">
            <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl rounded-full">
              New
            </span>
          </div>
        )}

        {/* Bottom Info */}
        <div className="absolute bottom-1">
          <div className="flex flex-col items-start gap-1 px-1 overflow-auto sm:gap-2">
            {/* Country */}
            <div className="flex items-center gap-1 p-1 bg-black bg-opacity-40 rounded-lg">
              {countryData.flag && (
                <Image
                  src={countryData.flag}
                  alt={`${countryData.abbreviation} flag`}
                  width={12}
                  height={12}
                  className="rounded-full"
                />
              )}
              <span className="text-xs text-white">{countryData.fifa}</span>
            </div>

            {/* Host Type */}
            <h4 className="p-1 text-xs bg-black bg-opacity-40 rounded-lg whitespace-nowrap">
              {hosttype}
            </h4>

            {/* First Name */}
            <h4 className="p-1 text-xs bg-black bg-opacity-50 rounded-lg overflow-auto">
              {name?.split?.(" ")[0] ?? "Name"}
            </h4>
          </div>
        </div>
      </div>
    </li>
  );
};
