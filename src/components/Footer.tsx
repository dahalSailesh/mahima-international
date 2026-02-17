"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { primaryNavLinks, socialLinks, supportLinks } from "@/content/site";

export default function Footer() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <footer className="bg-lavender-900 text-lavender-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold text-white mb-3">
              Mahima International
            </h3>
            <p className="text-sm leading-relaxed text-lavender-200 mb-6">
              Reclaiming Our Narratives and Fostering Collaborative Connections
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="px-3 h-9 inline-flex items-center justify-center rounded-full bg-lavender-800 text-lavender-200 hover:bg-lavender-700 hover:text-white transition-colors duration-200 text-xs font-medium"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-sm text-lavender-200 mb-4">
              Newsletter integration is in progress. Add your email and we will
              connect this soon.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2.5">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-2.5 text-sm bg-lavender-800 border border-lavender-700 rounded-lg text-white placeholder:text-lavender-400 focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 text-sm font-medium bg-lavender-600 text-white rounded-lg hover:bg-lavender-500 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:ring-offset-2 focus:ring-offset-lavender-900 transition-colors duration-200"
              >
                Join Waiting List
              </button>
            </form>
            {newsletterSubmitted && (
              <p className="mt-3 text-xs text-lavender-300">
                Thanks. We will notify you when newsletter signup goes live.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-lavender-800">
          <p className="text-center text-xs text-lavender-300">
            &copy; {new Date().getFullYear()} Mahima International. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
