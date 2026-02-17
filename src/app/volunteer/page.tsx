"use client";

import { useState, FormEvent } from "react";
import PageHeader from "@/components/PageHeader";

const interestAreas = [
  { id: "event-support", label: "Event Support" },
  { id: "story-circle", label: "Story Circle Facilitator" },
  { id: "culinary", label: "Culinary Program" },
  { id: "administrative", label: "Administrative" },
  { id: "other", label: "Other" },
];

const reasons = [
  {
    title: "Make a Direct Impact",
    description:
      "Your time and skills directly support refugee women in building new connections, learning new skills, and finding their voice in a new community.",
  },
  {
    title: "Build Cross-Cultural Friendships",
    description:
      "Volunteering with Mahima is a two-way exchange. You will learn as much from the women you work with as they learn from you.",
  },
  {
    title: "Develop New Skills",
    description:
      "Gain experience in community organizing, facilitation, cross-cultural communication, and nonprofit operations.",
  },
  {
    title: "Join a Supportive Community",
    description:
      "Become part of a network of passionate individuals dedicated to building a more connected and compassionate world.",
  },
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInterestToggle = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("[Website] Volunteer Application");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "N/A"}`,
        `Interests: ${formData.interests.join(", ") || "N/A"}`,
        "",
        formData.message || "(No additional message)",
      ].join("\n")
    );
    window.location.href = `mailto:info@mahimainternational.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Volunteer With Us"
        subtitle="Share your time and talents to support refugee women in our community"
      />

      {/* Volunteer Description */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-lavender-700 leading-relaxed">
              Volunteers are the heart of Mahima International. Whether you can
              give a few hours a month or a few hours a week, your contribution
              helps create spaces where refugee women can connect, share, and
              thrive. We welcome volunteers of all backgrounds and skill levels.
            </p>
          </div>

          {/* Why Volunteer */}
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-warm rounded-2xl p-8">
                <h3 className="text-xl mb-3 text-lavender-900">
                  {reason.title}
                </h3>
                <p className="text-lavender-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="bg-warm section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl mb-8 text-lavender-900 text-center">
              Sign Up to Volunteer
            </h2>
            <div className="mb-6 rounded-xl border border-lavender-200 bg-white p-4">
              <p className="text-sm text-lavender-800">
                Direct form processing is still in development. Submitting this
                form will open a prefilled email draft.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-plum-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl mb-2 text-lavender-900">
                  Thank You for Your Interest!
                </h3>
                <p className="text-lavender-700">
                  Your volunteer draft is ready in your email app. Send it and a
                  team member will follow up with next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-10 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-lavender-800 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lavender-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all text-lavender-900 placeholder-lavender-400"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-lavender-800 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-lavender-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all text-lavender-900 placeholder-lavender-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-lavender-800 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-lavender-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all text-lavender-900 placeholder-lavender-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Areas of Interest */}
                <div>
                  <label className="block text-sm font-medium text-lavender-800 mb-3">
                    Areas of Interest
                  </label>
                  <div className="space-y-3">
                    {interestAreas.map((area) => (
                      <label
                        key={area.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                            formData.interests.includes(area.id)
                              ? "bg-plum-600 border-plum-600"
                              : "border-lavender-300 group-hover:border-lavender-400"
                          }`}
                        >
                          {formData.interests.includes(area.id) && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={formData.interests.includes(area.id)}
                          onChange={() => handleInterestToggle(area.id)}
                        />
                        <span className="text-lavender-800">{area.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-lavender-800 mb-2"
                  >
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-lavender-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all text-lavender-900 placeholder-lavender-400 resize-none"
                    placeholder="Share any relevant experience, availability, or questions..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Open Volunteer Draft
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
