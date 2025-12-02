'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Nuestros Espacios', href: '/espacios' },
  { name: 'Planes y Precios', href: '/tarifas' },
  { name: 'Tour Virtual', href: '/tour-virtual' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Contacto', href: '/contacto' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-48 h-16 transition-transform group-hover:scale-105">
              <Image
                src="/images/brand/logo.png"
                alt="Trampfuns - Plena Diversión"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  pathname === item.href
                    ? 'text-[#00B8D4]'
                    : 'text-gray-700 hover:text-[#00B8D4]'
                )}
              >
                {item.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00B8D4] to-[#2196F3] transition-all duration-300 group-hover:w-full',
                    pathname === item.href && 'w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="sm" asChild>
              <Link href="/contacto">Reserva Ahora</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-[#00B8D4]/10 text-[#00B8D4]'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full" asChild>
                  <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                    Reserva Ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
