import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <h2 className='font-black text-xl w-24'>SOUTHSIDE Engineering.</h2>
            </Link>
          </div>

          {/* Navigation Links - First Column */}
          <div>
            <nav className="space-y-4">
              <Link 
                href="/" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/capabilities" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Capabilities
              </Link>
              <Link 
                href="/industries" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Industries
              </Link>
            </nav>
          </div>

          {/* Navigation Links - Second Column */}
          <div>
            <nav className="space-y-4">
              <Link 
                href="/about" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/quote" 
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Get a Quote
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h4 className="text-gray-900 dark:text-white font-medium">Address:</h4>
              <p className="text-gray-600 dark:text-gray-400">8 Avlona Street, Mordialloc, Victoria 3195</p>
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white font-medium">Contact:</h4>
              <p className="text-gray-600 dark:text-gray-400">(03) 9587 0405</p>
              <a 
                href="mailto:info@ssengineering.com.au" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                info@ssengineering.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              © {currentYear} Southside Australia Pty Ltd. · ABN: 28 051 655 639 · Website by{' '}
              <a 
                href="https://pinecone.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Pinecone Agency
              </a>
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link 
                href="/terms" 
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy" 
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;