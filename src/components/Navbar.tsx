// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../lib/authSlice";
import { RootState } from "../lib/store";

export default function Navbar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-bhagwa-DEFAULT text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🕉️</span>
          प्रयागराज धाम
        </Link>

        <div className="flex space-x-6">
          <Link href="/" className="hover:text-amber-200 transition">
            मुखपृष्ठ
          </Link>
          <Link href="/sangam" className="hover:text-amber-200 transition">
            त्रिवेणी संगम
          </Link>
          <Link href="/kumbh" className="hover:text-amber-200 transition">
            कुम्भ मेला
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
    </nav>
  );
}
