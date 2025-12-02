"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-24 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
        Discover Your <span className="text-teal-700">Dream</span> Scholarship
      </h1>

      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Explore thousands of scholarship opportunities from universities
        worldwide. Your educational journey starts here.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <Link
          href="/scholarships"
          className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-800 transition"
        >
          Browse Scholarships →
        </Link>

        <Link
          href="/countries"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Explore Countries
        </Link>
      </div>
    </section>
  );
}