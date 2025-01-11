import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black text-white py-8">

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Logo or Title */}
          <div className="mb-4 md:mb-0">
            <a className="text-2xl font-bold font-heading" href="#">
              logo
            </a>
          </div>

          {/* Footer Navigation Links */}
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li><a href="/home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.73.62-2.675.733a4.728 4.728 0 002.088-2.608 9.479 9.479 0 01-3.002 1.148 4.727 4.727 0 00-8.076 4.303 13.415 13.415 0 01-9.733-4.947 4.723 4.723 0 001.46 6.297 4.698 4.698 0 01-2.137-.592v.06a4.724 4.724 0 003.794 4.627 4.733 4.733 0 01-2.132.08 4.726 4.726 0 004.415 3.284 9.484 9.484 0 01-5.857 2.019c-.38 0-.758-.022-1.132-.066a13.375 13.375 0 007.246 2.122c8.696 0 13.45-7.202 13.45-13.45 0-.204-.004-.408-.013-.61a9.573 9.573 0 002.348-2.444z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.794.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.325-.594 1.325-1.324V1.325C24 .595 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c3.295 0 3.693.012 4.987.072 1.29.06 2.165.284 2.66.475a5.372 5.372 0 011.916 1.118 5.372 5.372 0 011.117 1.916c.191.495.415 1.37.475 2.66.06 1.294.072 1.692.072 4.987s-.012 3.693-.072 4.987c-.06 1.29-.284 2.165-.475 2.66a5.374 5.374 0 01-1.118 1.916 5.37 5.37 0 01-1.916 1.117c-.495.191-1.37.415-2.66.475-1.294.06-1.692.072-4.987.072s-3.693-.012-4.987-.072c-1.29-.06-2.165-.284-2.66-.475a5.373 5.373 0 01-1.916-1.117 5.373 5.373 0 01-1.117-1.916c-.191-.495-.415-1.37-.475-2.66C.012 15.693 0 15.295 0 12s.012-3.693.072-4.987c.06-1.29.284-2.165.475-2.66A5.372 5.372 0 011.664 3.435a5.372 5.372 0 011.916-1.118c.495-.191 1.37-.415 2.66-.475C8.307.012 8.705 0 12 0zm0 2.163c-3.22 0-3.599.011-4.867.07-1.176.054-1.811.244-2.237.407a3.523 3.523 0 00-1.308.854 3.523 3.523 0 00-.854 1.308c-.163.426-.353 1.061-.407 2.237-.059 1.268-.07 1.647-.07 4.867s.011 3.599.07 4.867c.054 1.176.244 1.811.407 2.237.194.518.482.998.854 1.308.426.163 1.061.353 2.237.407 1.268.059 1.647.07 4.867.07s3.599-.011 4.867-.07c1.176-.054 1.811-.244 2.237-.407a3.528 3.528 0 001.308-.854 3.528 3.528 0 00.854-1.308c.163-.426.353-1.061.407-2.237.059-1.268.07-1.647.07-4.867s-.011-3.599-.07-4.867c-.054-1.176-.244-1.811-.407-2.237a3.523 3.523 0 00-.854-1.308 3.523 3.523 0 00-1.308-.854c-.426-.163-1.061-.353-2.237-.407-1.268-.059-1.647-.07-4.867-.07zm0 5.837a6 6 0 100 12 6 6 0 000-12zm0 9.837a3.837 3.837 0 110-7.675 3.837 3.837 0 010 7.675zm6.406-10.995a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;