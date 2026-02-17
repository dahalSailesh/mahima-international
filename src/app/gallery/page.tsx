import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Gallery | Mahima International",
  description:
    "Moments of connection, creativity, and community from Mahima International's programs and events.",
};

const galleryItems = [
  { title: "Story Circle Gathering", aspect: "aspect-square" },
  { title: "Culinary Exchange", aspect: "aspect-[4/5]" },
  { title: "Community Celebration", aspect: "aspect-square" },
  { title: "Textile Art Workshop", aspect: "aspect-[4/3]" },
  { title: "Shared Meal Preparation", aspect: "aspect-square" },
  { title: "Women in Conversation", aspect: "aspect-[3/4]" },
  { title: "Painting Session", aspect: "aspect-square" },
  { title: "Spring Gathering", aspect: "aspect-[4/3]" },
  { title: "Traditional Dance", aspect: "aspect-square" },
  { title: "Garden Project", aspect: "aspect-[4/3]" },
  { title: "Storytelling Evening", aspect: "aspect-square" },
  { title: "Annual Celebration", aspect: "aspect-[4/3]" },
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
      <PageHeader
        title="Gallery"
        subtitle="Moments of connection, creativity, and community"
      />

      {/* Gallery Grid */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={`${
                    bgColors[index % bgColors.length]
                  } ${item.aspect} rounded-2xl flex items-center justify-center hover:shadow-md transition-shadow duration-300 group`}
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
            <Link
              href="/contact"
              className="text-plum-600 font-medium hover:text-plum-700 transition-colors"
            >
              Contact us
            </Link>{" "}
            to contribute to our gallery.
          </p>
        </div>
      </section>
    </>
  );
}
