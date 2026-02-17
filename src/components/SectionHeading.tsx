interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Align text: defaults to center */
  align?: "left" | "center";
  /** Use a lighter color scheme (e.g. on dark backgrounds) */
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const dividerAlign =
    align === "center" ? "mx-auto" : "mr-auto";

  return (
    <div className={`mb-10 md:mb-14 ${alignment}`}>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight ${
          light ? "text-white" : "text-lavender-900"
        }`}
      >
        {title}
      </h2>

      {/* Decorative divider */}
      <div
        className={`mt-4 h-[3px] w-12 rounded-full ${dividerAlign} ${
          light ? "bg-lavender-300" : "bg-lavender-400"
        }`}
        aria-hidden="true"
      />

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-lavender-200" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
