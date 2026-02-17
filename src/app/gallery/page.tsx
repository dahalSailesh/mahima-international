import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Gallery | Mahima International",
  description:
    "Moments of connection, creativity, and community from Mahima International's programs and events.",
};

const galleryItems = [
  { title: "Story Circle Gathering", aspect: "aspect-square", span: "" },
  {
    title: "Culinary Exchange",
    aspect: "aspect-[4/5]",
    span: "md:row-span-2",
  },
  { title: "Community Celebration", aspect: "aspect-square", span: "" },
  { title: "Textile Art Workshop", aspect: "aspect-[4/3]", span: "" },
  {
    title: "Shared Meal Preparation",
    aspect: "aspect-square",
    span: "",
  },
  {
    title: "Women in Conversation",
    aspect: "aspect-[3/4]",
    span: "md:row-span-2",
  },
  { title: "Painting Session", aspect: "aspect-square", span: "" },
  { title: "Spring Gathering", aspect: "aspect-[4/3]", span: "" },
  { title: "Traditional Dance", aspect: "aspect-square", span: "" },
  { title: "Garden Project", aspect: "aspect-[4/3]", span: "" },
  { title: "Storytelling Evening", aspect: "aspect-square", span: "" },
  { title: "Annual Celebration", aspect: "aspect-[4/3]", span: "" },
];

const bgColors = [
  "bg-lavender-100",
  "bg-lavender-50",
  "bg-warm",
  "bg-lavender-200",
  "bg-lavender-100",
  "bg-lavender-50",
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lavender-50 to-cream section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Gallery"
            subtitle="Moments of connection, creativity, and community"
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, index) => {
              const heights = [
                "h-64",
                "h-80",
                "h-72",
                "h-56",
                "h-64",
                "h-96",
                "h-72",
                "h-64",
                "h-80",
                "h-56",
                "h-72",
                "h-64",
              ];
              return (
                <div
                  key={item.title}
                  className={`${
                    bgColors[index % bgColors.length]
                  } ${heights[index]} rounded-2xl flex items-center justify-center break-inside-avoid hover:shadow-md transition-shadow duration-300 cursor-pointer group`}
                >
                  <div className="text-center px-4">
                    <svg
                      className="w-8 h-8 text-lavender-300 mx-auto mb-3 group-hover:text-lavender-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                    <p className="text-lavender-500 font-medium text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm section-padding py-12 md:py-16">
        <div className="container-narrow text-center">
          <p className="text-lavender-700 text-lg">
            Want to share photos from our events?{" "}
            <a
              href="/contact"
              className="text-plum-600 font-medium hover:text-plum-700 transition-colors"
            >
              Contact us
            </a>{" "}
            to contribute to our gallery.
          </p>
        </div>
      </section>
    </>
  );
}
