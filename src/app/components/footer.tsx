import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-6 border-t border-gray-100 bg-gray-50 text-gray-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-sm">
          <p className="font-bold text-black mb-1">LEE JEE HYUN PORTFOLIO</p>
          <p>© {currentYear} All rights reserved. Designed in Figma & Built with React</p>
        </div>
      </div>
    </footer>
  );
}