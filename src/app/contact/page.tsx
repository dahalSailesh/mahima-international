"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with email service or API
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lavender-50 to-cream section-padding py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Contact Us"
            subtitle="We would love to hear from you"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-lavender-50 rounded-2xl p-8 text-center">
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
                    Thank You
                  </h3>
                  <p className="text-lavender-700">
                    Your message has been sent. We will get back to you as soon
                    as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-lavender-800 mb-2"
                    >
                      Name
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
                      placeholder="Your name"
                    />
                  </div>

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
                      htmlFor="subject"
                      className="block text-sm font-medium text-lavender-800 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-lavender-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all text-lavender-900 placeholder-lavender-400"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-lavender-800 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-lavender-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all text-lavender-900 placeholder-lavender-400 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-lavender-900 mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@mahimainternational.org"
                  className="text-plum-600 hover:text-plum-700 transition-colors"
                >
                  info@mahimainternational.org
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-lavender-900 mb-3">
                  Location
                </h3>
                <p className="text-lavender-700 leading-relaxed">
                  Spokane, Washington
                  <br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-lavender-900 mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+15091234567"
                  className="text-plum-600 hover:text-plum-700 transition-colors"
                >
                  (509) 123-4567
                </a>
              </div>

              <div className="bg-lavender-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-lavender-900 mb-2">
                  Office Hours
                </h3>
                <p className="text-lavender-700 text-sm leading-relaxed">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
