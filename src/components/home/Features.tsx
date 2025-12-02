import { Search, Globe, Link as LinkIcon } from "lucide-react";

const features = [
  {
    icon: <Search size={40} className="text-teal-700" />,
    title: "Easy Search",
    text: "Find scholarships quickly with intelligent filtering.",
  },
  {
    icon: <Globe size={40} className="text-teal-700" />,
    title: "Global Coverage",
    text: "Scholarships from 100+ countries worldwide.",
  },
  {
    icon: <LinkIcon size={40} className="text-teal-700" />,
    title: "Direct Links",
    text: "Apply directly from verified scholarship websites.",
  },
];

export default function Features() {
  return (
    <section className="py-20 w-full bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Use <span className="text-teal-700">Agaaw Scholar?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-xl border shadow-sm bg-gray-50"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}