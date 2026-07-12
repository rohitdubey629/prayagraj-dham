"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../lib/authSlice";
import { RootState } from "../lib/store";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state: RootState) => state.auth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-bhagwa-DEFAULT text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🕉️</span>
          प्रयागराज धाम
        </Link>

        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-amber-200 transition">
            मुखपृष्ठ
          </Link>
          <Link href="/sangam" className="hover:text-amber-200 transition">
            त्रिवेणी संगम
          </Link>
          <Link href="/kumbh" className="hover:text-amber-200 transition">
            कुम्भ मेला
          </Link>
          <Link href="/jhusi" className="hover:text-amber-200 transition">
            झूंसी
          </Link>
          <Link href="/yatra-suvidha" className="hover:text-amber-200 transition">
            यात्रा सुविधा
          </Link>
          <Link href="/blog" className="hover:text-amber-200 transition">
            ब्लॉग
          </Link>
          <Link href="/temples" className="hover:text-amber-200 transition">
            मंदिर
          </Link>
          {isAdmin && (
            <Link href="/admin" className="hover:text-amber-200 transition">
              प्रशासन
            </Link>
          )}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hover:text-amber-200 transition"
            >
              लॉगआउट
            </button>
          ) : (
            <Link href="/login" className="hover:text-amber-200 transition">
              लॉगिन
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" onClick={toggleMobileMenu} className="block hover:text-amber-200">
            मुखपृष्ठ
          </Link>
          <Link href="/sangam" onClick={toggleMobileMenu} className="block hover:text-amber-200">
            त्रिवेणी संगम
          </Link>
          <Link href="/kumbh" onClick={toggleMobileMenu} className="block hover:text-amber-200">
            कुम्भ मेला
          </Link>
          <Link href="/jhusi" onClick={toggleMobileMenu} className="block hover:text-amber-200">
            झूंसी
          </Link>
          <Link href="/yatra-suvidha" onClick={toggleMobileMenu} className="block hover:text-amber-200">
            यात्रा सुविधा
          </Link>
          <Link href="/blog" onClick={toggleMobileMenu} className="block hover:text-amber-200">
            ब्लॉग
          </Link>
          <Link href="/temples" onClick={toggleMobileMenu} className="block hover:text-amber-200">
            मंदिर
          </Link>
          {isAdmin && (
            <Link href="/admin" onClick={toggleMobileMenu} className="block hover:text-amber-200">
              प्रशासन
            </Link>
          )}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="block text-left w-full hover:text-amber-200"
            >
              लॉगआउट
            </button>
          ) : (
            <Link href="/login" onClick={toggleMobileMenu} className="block hover:text-amber-200">
              लॉगिन
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
