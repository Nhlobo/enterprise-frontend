import Navbar from '../components/Navbar';
import CookieConsent from '../components/CookieConsent';
import Link from 'next/link';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Mapengo Innovation</h4>
              <p className="text-sm">Enterprise solutions for modern businesses across Africa.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/solutions/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
                <li><Link href="/industries/finance" className="hover:text-white transition-colors">Finance</Link></li>
                <li><Link href="/case-studies/digital-transformation" className="hover:text-white transition-colors">Case Studies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Mapengo Innovation. All rights reserved. | Registered in South Africa.</p>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
}
