'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteInfo } from '@/lib/constants/site-info';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#00B8D4]/5 via-white to-[#E91E63]/5">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B8D4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#00B8D4]/10 to-[#E91E63]/10 rounded-full border border-[#00B8D4]/20">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#00B8D4] to-[#E91E63] bg-clip-text text-transparent">
                ⭐ El mejor lugar para cumpleaños en Chiguayante
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#00B8D4] via-[#2196F3] to-[#E91E63] bg-clip-text text-transparent">
                {siteInfo.claim}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Trampolín Park exclusivo, juegos modulares de 3 pisos y todo lo que necesitas
              para una celebración inolvidable. Espacio equipado para hasta {siteInfo.pricing.capacity} personas.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00B8D4] to-[#2196F3] bg-clip-text text-transparent">
                  {siteInfo.pricing.capacity}+
                </div>
                <div className="text-sm text-gray-600">Capacidad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-gray-600">Seguro</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00B8D4] to-[#E91E63] bg-clip-text text-transparent">
                  1-14
                </div>
                <div className="text-sm text-gray-600">Años</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  ¡Reserva Ahora!
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/tour-virtual">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ver Tour 360°
                </Link>
              </Button>
            </div>

            {/* Promoción destacada */}
            <div className="inline-block p-6 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-2xl border-2 border-[#FFD700]/50">
              <p className="text-sm font-semibold text-gray-700 mb-2">🎉 Oferta Especial</p>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
                ¡Solo ${siteInfo.pricing.promotional.toLocaleString('es-CL')}!
              </p>
              <Link href="/tarifas/promocion-150mil" className="text-sm text-[#00B8D4] hover:underline font-medium">
                Ver detalles de la promoción →
              </Link>
            </div>
          </div>

          {/* Image gallery preview */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/gallery/IMG_9127.JPG"
                    alt="Trampolín Park"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/gallery/IMG_9129.JPG"
                    alt="Juegos Modulares"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/gallery/IMG_9120.JPG"
                    alt="Instalaciones"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/gallery/IMG_9130.JPG"
                    alt="Espacios"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 animate-bounce">
              <p className="text-sm font-bold">¡Diversión Garantizada!</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#00B8D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
