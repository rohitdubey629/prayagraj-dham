"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../lib/authSlice";
import { RootState } from "../lib/store";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state: RootState) => state.auth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);
  const addMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const nav = translations.navbar;
  const sh = translations.shlokas;

  const handleLogout = () => {
    dispatch(logout());
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (addMenuRef.current && !addMenuRef.current.contains(e.target as Node)) {
        setAddMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 text-white bg-bhagwa-dark shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🕉️</span>
          {t(nav.brand)}
        </Link>

        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gold transition">
            {t(nav.home)}
          </Link>
          <Link href="/sangam" className="hover:text-gold transition">
            {t(nav.sangam)}
          </Link>
          <Link href="/kumbh" className="hover:text-gold transition">
            {t(nav.kumbh)}
          </Link>
          <Link href="/blog" className="hover:text-gold transition">
            {t(nav.blog)}
          </Link>
          <Link href="/temples" className="hover:text-gold transition">
            {t(nav.temples)}
          </Link>
          <Link href="/hindu-dharma-diary" className="hover:text-gold transition">
            {t(nav.dharmaDiary)}
          </Link>
          {/* Add dropdown: Add a Place / Add a Shloka */}
          <div className="relative" ref={addMenuRef}>
            <button
              onClick={() => setAddMenuOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-gold transition"
            >
              {t(nav.addMenu)}
              <ChevronDown size={16} className={`transition-transform ${isAddMenuOpen ? "rotate-180" : ""}`} />
            </button>
            {isAddMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-cream text-bhagwa-dark rounded-lg shadow-lg overflow-hidden z-50 border border-gold/30">
                <Link
                  href="/places/add"
                  onClick={() => setAddMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gold/10 transition"
                >
                  {t(nav.addPlace)}
                </Link>
                <Link
                  href="/shlokas/add"
                  onClick={() => setAddMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gold/10 transition"
                >
                  {t(sh.addLink)}
                </Link>
              </div>
            )}
          </div>

          {isAdmin && (
            <Link href="/admin" className="hover:text-gold transition">
              {t(nav.admin)}
            </Link>
          )}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hover:text-gold transition"
            >
              {t(nav.logout)}
            </button>
          ) : (
            <Link href="/login" className="hover:text-gold transition">
              {t(nav.login)}
            </Link>
          )}
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" onClick={toggleMobileMenu} className="block hover:text-gold">
            {t(nav.home)}
          </Link>
          <Link href="/sangam" onClick={toggleMobileMenu} className="block hover:text-gold">
            {t(nav.sangam)}
          </Link>
          <Link href="/kumbh" onClick={toggleMobileMenu} className="block hover:text-gold">
            {t(nav.kumbh)}
          </Link>
          <Link href="/blog" onClick={toggleMobileMenu} className="block hover:text-gold">
            {t(nav.blog)}
          </Link>
          <Link href="/temples" onClick={toggleMobileMenu} className="block hover:text-gold">
            {t(nav.temples)}
          </Link>
          <Link href="/hindu-dharma-diary" onClick={toggleMobileMenu} className="block hover:text-gold">
            {t(nav.dharmaDiary)}
          </Link>
          <div className="pt-2 border-t border-gold/20">
            <p className="text-sm text-gold mb-1">{t(nav.addMenu)}</p>
            <Link href="/places/add" onClick={toggleMobileMenu} className="block hover:text-gold pl-2">
              {t(nav.addPlace)}
            </Link>
            <Link href="/shlokas/add" onClick={toggleMobileMenu} className="block hover:text-gold pl-2">
              {t(sh.addLink)}
            </Link>
          </div>

          {isAdmin && (
            <Link href="/admin" onClick={toggleMobileMenu} className="block hover:text-gold">
              {t(nav.admin)}
            </Link>
          )}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="block text-left w-full hover:text-gold"
            >
              {t(nav.logout)}
            </button>
          ) : (
            <Link href="/login" onClick={toggleMobileMenu} className="block hover:text-gold">
              {t(nav.login)}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
