"use client";

import Link from "next/link";

interface DonateButtonProps {
  /** Display variant */
  variant?: "default" | "large" | "inline";
  /** Custom class names */
  className?: string;
}

export default function DonateButton({
  variant = "default",
  className = "",
}: DonateButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:ring-offset-2";

  const variantStyles: Record<string, string> = {
    default:
      "bg-lavender-600 text-white px-6 py-3 text-base hover:bg-lavender-700 hover:shadow-md",
    large:
      "bg-lavender-600 text-white px-8 py-4 text-lg hover:bg-lavender-700 hover:shadow-lg",
    inline:
      "bg-lavender-600 text-white px-5 py-2.5 text-sm hover:bg-lavender-700 hover:shadow-md",
  };

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <Link
        href="/donate"
        className={`${baseStyles} ${variantStyles[variant]} group`}
      >
        {/* Heart icon */}
        <svg
          className="w-4 h-4 mr-2 opacity-80 group-hover:opacity-100 transition-opacity"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        Donate Now
      </Link>

      {/* Payment methods badge */}
      {variant !== "inline" && (
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Secure checkout &middot; Apple&nbsp;Pay &middot; Cards</span>
        </div>
      )}
    </div>
  );
}
