import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: "Stories & Updates | Mahima International",
  description:
    "Read stories, updates, and reflections from the Mahima International community.",
};

const blogPosts = [
  {
    slug: "finding-home-through-story",
    date: "February 5, 2026",
    title: "Finding Home Through Story",
    excerpt:
      "In our latest story circle, women from five different countries gathered to share what 'home' means to them. The evening revealed how the concept of home transcends physical spaces and lives in the connections we build with one another.",
    category: "Story Circles",
    placeholder: "Story Circle Session",
  },
  {
    slug: "recipes-that-carry-memory",
    date: "January 18, 2026",
    title: "Recipes That Carry Memory",
    excerpt:
      "When Sunita prepared her grandmother's dal recipe for our culinary exchange, it was more than cooking. It was an act of remembrance, a way of honoring the women who came before her and passing their legacy to a new community.",
    category: "Culinary Exchange",
    placeholder: "Cooking Together",
  },
  {
    slug: "art-as-bridge",
    date: "December 12, 2025",
    title: "Art as a Bridge Between Worlds",
    excerpt:
      "Our recent textile art workshop brought together women who speak different languages but found a shared vocabulary in color, pattern, and craft. The pieces they created tell stories that words alone cannot express.",
    category: "Art & Expression",
    placeholder: "Art Workshop",
  },
  {
    slug: "year-in-review-2025",
    date: "November 30, 2025",
    title: "A Year of Growth: 2025 in Review",
    excerpt:
      "As we reflect on the past year, we are grateful for the 200+ women who participated in our programs, the 15 community partnerships we formed, and the countless moments of connection that made it all possible.",
    category: "Updates",
    placeholder: "Community Gathering",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lavender-50 to-cream section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Stories & Updates"
            subtitle="Voices, reflections, and news from our community"
          />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-warm rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Placeholder Image */}
                <div className="aspect-[16/9] bg-lavender-100 flex items-center justify-center">
                  <p className="text-lavender-400 font-medium">
                    {post.placeholder}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-plum-600 uppercase tracking-wider bg-lavender-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-lavender-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl mb-3 text-lavender-900 group-hover:text-plum-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-lavender-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-plum-600 font-medium hover:text-plum-700 transition-colors text-sm"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
