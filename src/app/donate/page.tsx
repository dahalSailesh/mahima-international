"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const presetAmounts = [25, 50, 100, 250];

const impactItems = [
  {
    amount: "$25",
    description: "Provides art supplies for one workshop session",
  },
  {
    amount: "$50",
    description: "Covers ingredients for a culinary exchange gathering",
  },
  {
    amount: "$100",
    description: "Sponsors one woman's participation in a full program cycle",
  },
  {
    amount: "$250",
    description: "Funds a complete story circle series for 10 women",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [checkoutNotice, setCheckoutNotice] = useState<string | null>(null);

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
    setCheckoutNotice(null);
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setSelectedAmount(null);
    setCheckoutNotice(null);
  };

  const handleCheckout = () => {
    setCheckoutNotice(
      "Stripe checkout is currently in development. Please use Contact Us if you want to make an immediate contribution."
    );
  };

  const currentAmount = isCustom ? parseFloat(customAmount) || 0 : selectedAmount || 0;

  return (
    <>
      <PageHeader
        title="Support Our Mission"
        subtitle="Your generosity creates spaces of connection and healing"
      />

      {/* Donation Section */}
      <section className="bg-white section-padding py-16 md:py-24">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            {/* Explanation */}
            <p className="text-lg text-lavender-700 leading-relaxed mb-10 text-center">
              Every donation to Mahima International directly supports programs
              that empower refugee women through food, art, and story circles.
              Your contribution helps create safe spaces for connection, healing,
              and cross-cultural understanding.
            </p>

            {/* Amount Selection */}
            <div className="bg-warm rounded-2xl p-8 md:p-10 mb-10">
              <h3 className="text-xl mb-6 text-lavender-900 text-center">
                Choose an Amount
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handlePresetClick(amount)}
                    className={`py-3 px-4 rounded-xl font-medium text-lg transition-all duration-200 ${
                      selectedAmount === amount && !isCustom
                        ? "bg-plum-600 text-white shadow-md"
                        : "bg-white text-lavender-800 border border-lavender-200 hover:border-lavender-300 hover:bg-lavender-50"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
                <button
                  onClick={handleCustomClick}
                  className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    isCustom
                      ? "bg-plum-600 text-white shadow-md"
                      : "bg-white text-lavender-800 border border-lavender-200 hover:border-lavender-300 hover:bg-lavender-50"
                  }`}
                >
                  Custom
                </button>
              </div>

              {/* Custom Amount Input */}
              {isCustom && (
                <div className="mb-6">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lavender-500 text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-lavender-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-transparent transition-all text-lavender-900 text-lg placeholder-lavender-400"
                      autoFocus
                    />
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={currentAmount <= 0}
                className="w-full py-4 bg-plum-600 text-white rounded-xl font-semibold text-lg hover:bg-plum-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {currentAmount > 0
                  ? `Continue with $${currentAmount} (Coming Soon)`
                  : "Select an Amount"}
              </button>

              {/* Payment Methods */}
              <div className="mt-6 text-center">
                <p className="text-sm text-lavender-500 mb-3">
                  Secure checkout integration is in progress
                </p>
                <div className="flex items-center justify-center gap-4 text-lavender-400">
                  <span className="text-xs font-medium bg-lavender-50 px-3 py-1.5 rounded-lg">
                    Apple Pay
                  </span>
                  <span className="text-xs font-medium bg-lavender-50 px-3 py-1.5 rounded-lg">
                    Google Pay
                  </span>
                  <span className="text-xs font-medium bg-lavender-50 px-3 py-1.5 rounded-lg">
                    Credit Card
                  </span>
                </div>
              </div>
              {checkoutNotice && (
                <div className="mt-6 rounded-xl border border-lavender-200 bg-lavender-50 p-4 text-sm text-lavender-800">
                  <p>{checkoutNotice}</p>
                  <Link
                    href="/contact"
                    className="inline-block mt-2 text-plum-700 font-medium hover:text-plum-800"
                  >
                    Contact Us for Immediate Support
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-warm section-padding py-16 md:py-24">
        <div className="container-narrow">
          <h2 className="text-3xl mb-8 text-lavender-900 text-center">
            Your Donation Supports
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {impactItems.map((item) => (
              <div
                key={item.amount}
                className="bg-white rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-lavender-100 rounded-xl flex items-center justify-center">
                  <span className="text-plum-600 font-bold text-lg">
                    {item.amount}
                  </span>
                </div>
                <p className="text-lavender-700 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lavender-600 text-sm">
              Mahima International is a registered 501(c)(3) nonprofit
              organization. All donations are tax-deductible to the extent
              allowed by law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
