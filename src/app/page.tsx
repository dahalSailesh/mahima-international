import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import DonateButton from "@/components/DonateButton";

const approaches = [
  {
    title: "Food",
    icon: (
      <svg
        className="w-10 h-10 text-plum-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z"
        />
      </svg>
    ),
    description:
      "Through culinary exchange, women share recipes, traditions, and flavors from their homelands, creating bonds over shared meals and the universal language of food.",
  },
  {
    title: "Art",
    icon: (
      <svg
        className="w-10 h-10 text-plum-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    description:
      "Creative expression through art provides a powerful outlet for healing, self-discovery, and sharing cultural traditions that transcend language barriers.",
  },
  {
    title: "Story Circles",
    icon: (
      <svg
        className="w-10 h-10 text-plum-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    description:
      "In story circles, women reclaim authorship of their own narratives, sharing lived experiences in a safe space that fosters mutual understanding and solidarity.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lavender-50 via-cream to-lavender-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-lavender-200 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-lavender-100 rounded-full blur-3xl" />
        </div>
        <div className="relative container-narrow section-padding py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-lavender-900">
              Reclaiming Our Narratives and Fostering Collaborative Connections
            </h1>
            <p className="text-lg md:text-xl text-lavender-700 mb-10 max-w-2xl leading-relaxed">
              Mahima International is a women-led organization creating spaces
              where refugee women connect, share, and thrive through food, art,
              and stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
              <DonateButton variant="inline" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Our Mission"
            subtitle="Building bridges through shared experience"
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-lavender-800">
              Our mission is to foster social connections that uphold the dignity
              and value of refugee experiences, provide a sanctuary for all women
              to share their respective stories, and create opportunities for
              developing relationships with the broader community that are
              grounded in cross-cultural understanding, mutual respect,
              reciprocity, and solidarity. We use food, art, and story circles
              as ways to develop meaningful and lasting connections between women
              of all backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-warm section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Our Approach"
            subtitle="Three pillars of connection"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-lavender-50 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3 text-lavender-900">{item.title}</h3>
                <p className="text-lavender-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gradient-to-b from-lavender-50 to-white section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Get Involved"
            subtitle="Join us in making a difference"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-14 h-14 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-plum-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Volunteer</h3>
              <p className="text-lavender-700 mb-6 leading-relaxed">
                Share your time and skills to support refugee women in building
                new connections and opportunities.
              </p>
              <Link
                href="/volunteer"
                className="text-plum-600 font-medium hover:text-plum-700 transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>

            <div className="text-center p-8">
              <div className="w-14 h-14 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-plum-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Donate</h3>
              <p className="text-lavender-700 mb-6 leading-relaxed">
                Your contribution directly supports programs that empower
                refugee women and strengthen community bonds.
              </p>
              <Link
                href="/donate"
                className="text-plum-600 font-medium hover:text-plum-700 transition-colors"
              >
                Give Today &rarr;
              </Link>
            </div>

            <div className="text-center p-8">
              <div className="w-14 h-14 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-plum-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Stay Connected</h3>
              <p className="text-lavender-700 mb-6 leading-relaxed">
                Subscribe to our newsletter for updates on events, stories, and
                ways to support our community.
              </p>
              <Link
                href="/contact"
                className="text-plum-600 font-medium hover:text-plum-700 transition-colors"
              >
                Get in Touch &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
