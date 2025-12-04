import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-3">Agaaw Scholar</h3>
            <p className="text-gray-400">
              Your trusted guide for scholarships & study abroad opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-gray-400 hover:text-white">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/countries" className="text-gray-400 hover:text-white">
                  Countries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-400">Email: mdomarfaruk.cse@gmail.com.com</p>
            <p className="text-gray-400">WhatsApp: +880 01723 878728</p>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6">
          © {new Date().getFullYear()} Agaaw Scholar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}