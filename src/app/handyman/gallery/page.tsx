"use client";

import Link from "next/link";
import { useState } from "react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/lib/handyman/data";

const CATEGORY_COLORS: Record<string, string> = {
  "Deck & Outdoor": "bg-green-100 text-green-800",
  "Painting": "bg-purple-100 text-purple-800",
  "TV & Shelving": "bg-blue-100 text-blue-800",
  "Drywall": "bg-gray-100 text-gray-800",
  "Assembly": "bg-orange-100 text-orange-800",
  "Doors & Windows": "bg-yellow-100 text-yellow-800",
  "Junk Removal": "bg-red-100 text-red-800",
};

const PLACEHOLDER_COLORS = [
  "from-blue-200 to-blue-300",
  "from-green-200 to-green-300",
  "from-amber-200 to-amber-300",
  "from-purple-200 to-purple-300",
  "from-teal-200 to-teal-300",
  "from-rose-200 to-rose-300",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Gallery</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Browse before &amp; after photos from recent jobs across Northeast Ohio.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                {/* Placeholder image */}
                <div
                  className={`h-48 bg-gradient-to-br ${PLACEHOLDER_COLORS[item.id % PLACEHOLDER_COLORS.length]} flex flex-col items-center justify-center relative`}
                >
                  <div className="text-4xl mb-2 opacity-40">📷</div>
                  {item.before && (
                    <div className="absolute top-2 left-2 right-2 flex gap-1">
                      <span className="bg-gray-800/70 text-white text-xs font-semibold px-2 py-0.5 rounded">
                        Before
                      </span>
                      <span className="bg-green-600/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
                        After
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-gray-500 opacity-60 text-center px-4 absolute bottom-2">
                    Photo coming soon
                  </p>
                </div>
                <div className="p-4">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded ${CATEGORY_COLORS[item.category] ?? "bg-gray-100 text-gray-700"}`}
                  >
                    {item.category}
                  </span>
                  <p className="text-sm font-medium text-gray-800 mt-2">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No items in this category yet.
            </div>
          )}

          <div className="mt-12 text-center bg-blue-50 rounded-xl border border-blue-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Want to see work like this in your home?
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;d love to add your project to our gallery. Get a free quote today.
            </p>
            <Link
              href="/handyman/quote"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
