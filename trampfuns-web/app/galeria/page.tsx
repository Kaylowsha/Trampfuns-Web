import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galería de Fotos',
  description: 'Galería de fotos de Trampfuns. Ve nuestras instalaciones, trampolín park, juegos modulares y eventos realizados en Chiguayante.',
};

// Imágenes disponibles en el proyecto
const galleryImages = [
  {
    src: '/images/gallery/IMG_9120.JPG',
    alt: 'Instalaciones Trampfuns',
    width: 1200,
    height: 900,
    category: 'instalaciones',
  },
  {
    src: '/images/gallery/IMG_9127.JPG',
    alt: 'Trampolín Park',
    width: 1200,
    height: 900,
    category: 'trampolin',
  },
  {
    src: '/images/gallery/IMG_9128 2.jpg',
    alt: 'Vista del trampolín',
    width: 1200,
    height: 900,
    category: 'trampolin',
  },
  {
    src: '/images/gallery/IMG_9129.JPG',
    alt: 'Juegos Modulares',
    width: 1200,
    height: 900,
    category: 'juegos',
  },
  {
    src: '/images/gallery/IMG_9130.JPG',
    alt: 'Área de juegos',
    width: 1200,
    height: 900,
    category: 'juegos',
  },
  {
    src: '/images/gallery/IMG_9131.JPG',
    alt: 'Instalaciones internas',
    width: 1200,
    height: 900,
    category: 'instalaciones',
  },
  {
    src: '/images/gallery/IMG_9132.JPG',
    alt: 'Detalles de espacios',
    width: 1200,
    height: 900,
    category: 'instalaciones',
  },
  {
    src: '/images/gallery/IMG_9135.JPG',
    alt: 'Área completa',
    width: 1200,
    height: 900,
    category: 'instalaciones',
  },
  {
    src: '/images/gallery/IMG_9136 2.jpg',
    alt: 'Vista panorámica',
    width: 1200,
    height: 900,
    category: 'instalaciones',
  },
  {
    src: '/images/gallery/IMG_9243 2.jpg',
    alt: 'Exterior de las instalaciones',
    width: 1200,
    height: 900,
    category: 'instalaciones',
  },
];

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#00B8D4]/10 to-[#E91E63]/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="magenta" className="mb-4">Galería de Fotos</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00B8D4] to-[#E91E63] bg-clip-text text-transparent">
                Conoce Nuestras Instalaciones
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Fotos reales de nuestro espacio. Todo lo que ves aquí está disponible para tu evento.
            </p>
          </div>
        </Container>
      </section>

      {/* Categorías (futuro) */}
      <section className="py-8 bg-white border-b">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="cyan" className="cursor-pointer hover:scale-105 transition-transform">
              📸 Todas las Fotos
            </Badge>
            <Badge variant="blue" className="cursor-pointer hover:scale-105 transition-transform opacity-60">
              🤸 Trampolín Park
            </Badge>
            <Badge variant="magenta" className="cursor-pointer hover:scale-105 transition-transform opacity-60">
              🎮 Juegos Modulares
            </Badge>
            <Badge variant="purple" className="cursor-pointer hover:scale-105 transition-transform opacity-60">
              🏠 Instalaciones
            </Badge>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Haz click en cualquier foto para verla en tamaño completo
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#00B8D4] to-[#2196F3] bg-clip-text text-transparent mb-2">
                {galleryImages.length}+
              </div>
              <p className="text-gray-600">Fotos Disponibles</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-600">Fotos Reales</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#9C27B0] to-[#00B8D4] bg-clip-text text-transparent mb-2">
                HD
              </div>
              <p className="text-gray-600">Alta Calidad</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#00B8D4] to-[#E91E63] bg-clip-text text-transparent mb-2">
                2024
              </div>
              <p className="text-gray-600">Fotos Actuales</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Instagram Feed (Placeholder) */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Síguenos en Instagram
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ve más contenido, eventos y fotos de nuestros clientes en nuestra cuenta de Instagram
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://instagram.com/trampfuns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @trampfuns
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00B8D4] to-[#2196F3]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Te Convencieron las Fotos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Reserva ahora y crea tus propios recuerdos inolvidables en Trampfuns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacto">Reservar Ahora</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#00B8D4]" asChild>
                <Link href="/tour-virtual">Ver Tour 360°</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
