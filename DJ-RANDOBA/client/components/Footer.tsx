import { Link } from "react-router-dom";
import { Music, Instagram, Video, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F1bb0735706c241e9b62c93ae763e081d%2F3a207f81af8d4572b2e13f02fbdd85f3?format=webp&width=800"
                alt="RANDOBA Logo"
                className="h-8 w-auto filter invert"
              />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Master the art of DJing with professional courses from industry
              experts. Book exclusive events and elevate your music journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/randoba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Video className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@randoba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@randoba.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Learn
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  DJ Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Instructors
                </Link>
              </li>
              <li>
                <Link
                  to="/playlists"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sample Playlists
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Events
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Private Bookings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Corporate Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RANDOBA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
