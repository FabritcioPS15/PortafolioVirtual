import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-900 text-gray-400 py-4 text-center mt-12">
    © {new Date().getFullYear()} Fabritcio Peña. Todos los derechos reservados.
  </footer>
);

export default Footer;