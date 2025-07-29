"use client";

import { useRouter } from "next/navigation";

const HeaderBackNav = () => {
  const router = useRouter();

  return (
    <nav className="p-4 border-b bg-white shadow">
      <button
        onClick={() => router.back()}
        className="text-sm text-blue-500 hover:underline"
      >
        ← Back
      </button>
    </nav>
  );
};

export default HeaderBackNav;
