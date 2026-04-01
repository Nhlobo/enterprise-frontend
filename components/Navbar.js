import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-brand-700">
            Mapengo Innovation
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/solutions/enterprise" className="text-gray-600 hover:text-brand-600 transition-colors">Solutions</Link>
            <Link href="/industries/finance" className="text-gray-600 hover:text-brand-600 transition-colors">Industries</Link>
            <Link href="/case-studies/digital-transformation" className="text-gray-600 hover:text-brand-600 transition-colors">Case Studies</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-brand-600 transition-colors">Pricing</Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors" data-track="navbar-cta">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/solutions/enterprise" className="block px-2 py-2 text-gray-600 hover:text-brand-600">Solutions</Link>
            <Link href="/industries/finance" className="block px-2 py-2 text-gray-600 hover:text-brand-600">Industries</Link>
            <Link href="/case-studies/digital-transformation" className="block px-2 py-2 text-gray-600 hover:text-brand-600">Case Studies</Link>
            <Link href="/pricing" className="block px-2 py-2 text-gray-600 hover:text-brand-600">Pricing</Link>
            <Link href="/about" className="block px-2 py-2 text-gray-600 hover:text-brand-600">About</Link>
            <Link href="/contact" className="block px-2 py-2 bg-brand-600 text-white rounded-lg text-center">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
