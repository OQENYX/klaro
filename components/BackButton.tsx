"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-sub transition-colors hover:text-dark"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform group-hover:-translate-x-1"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Zurück
    </button>
  );
}
