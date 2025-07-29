"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderBackNav from "../navs/HeaderBackNav";

const FeedbackForm = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [comment, setComment] = useState("");
  const [visitFrequency, setVisitFrequency] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const ratings = [
    { label: "Positive", src: "/icons/positive.png" },
    { label: "Neutral", src: "/icons/neutral.png" },
    { label: "Negative", src: "/icons/negative.png" },
  ];

  const handleSubmit = () => {
    console.log({ selectedRating, comment, visitFrequency });
    setShowModal(true);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="w-full pt-6 mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
      <HeaderBackNav title="Feedback" />
      <div className="w-[90%] mx-auto md:w-3/5 text-white p-4 md:mr-auto md:ml-0">
        <h1 className="text-2xl font-bold text-orange-600">Mmeko Feedback</h1>

        <p className="mt-4 text-lg font-semibold">
          1. Overall, how was our service today?
        </p>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {ratings.map((rating, index) => (
            <button
              key={index}
              className={`border rounded-lg p-4 flex flex-col items-center transition-all ${
                selectedRating === rating.label
                  ? "border-orange-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedRating(rating.label)}
            >
              <img src={rating.src} alt={rating.label} className="w-32 h-32" />
              <p className="mt-2">{rating.label}</p>
            </button>
          ))}
        </div>

        <p className="mt-6 text-lg font-semibold">2. Any comments on your rating?</p>
        <textarea
          className="w-full p-2 mt-2 text-gray-800 border rounded-lg"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
        ></textarea>

        <p className="mt-6 text-lg font-semibold">
          3. How often do you visit Mmeko?
        </p>
        <div className="mt-2 space-y-2">
          {["Daily", "Weekly", "Monthly", "First time"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="visitFrequency"
                value={option}
                checked={visitFrequency === option}
                onChange={(e) => setVisitFrequency(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 mt-6 text-white transition bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          Done
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center md:justify-start w-[90%] mx-auto md:w-4/5">
          <div className="p-6 bg-white rounded-lg shadow-lg md:ml-40">
            <p className="font-semibold text-center text-orange-500">Your review has been sent</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
