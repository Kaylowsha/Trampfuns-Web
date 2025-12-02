import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteInfo } from '@/lib/constants/site-info';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="relative w-40 h-14">
              <Image
                src="/images/brand/logo.png"
                alt="Trampfuns"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              {siteInfo.description}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/espacios"
                  className="text-gray-400 hover:text-[#00B8D4] transition-colors text-sm"
                >
                  Nuestros Espacios
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifas"
                  className="text-gray-400 hover:text-[#00B8D4] transition-colors text-sm"
                >
                  Planes y Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-virtual"
                  className="text-gray-400 hover:text-[#00B8D4] transition-colors text-sm"
                >
                  Tour Virtual 360°
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-gray-400 hover:text-[#00B8D4] transition-colors text-sm"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-400 hover:text-[#00B8D4] transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-[#00B8D4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  {siteInfo.contact.address}<br />
                  {siteInfo.contact.city}, {siteInfo.contact.region}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#00B8D4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${siteInfo.contact.phone}`}
                  className="text-gray-400 hover:text-[#00B8D4] transition-colors"
                >
                  {siteInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#00B8D4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${siteInfo.contact.phoneAlt}`}
                  className="text-gray-400 hover:text-[#00B8D4] transition-colors"
                >
                  {siteInfo.contact.phoneAlt}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${siteInfo.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#E91E63] hover:to-[#9C27B0] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://facebook.com/${siteInfo.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2196F3] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Horario de Atención:</p>
              <p className="text-gray-300 text-sm">{siteInfo.hours.weekdays}</p>
              <p className="text-gray-300 text-sm">{siteInfo.hours.weekends}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-[#00B8D4] font-semibold">Trampfuns</span>. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
