import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">CricTracker-Pro</h3>
            <p className="text-gray-400">Real-time cricket analytics and updates.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <span className="material-icons">twitter</span>
              </a>
              <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <span className="material-icons">facebook</span>
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                <span className="material-icons">instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CricTracker-Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;