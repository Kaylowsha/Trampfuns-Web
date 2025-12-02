import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Nuestros Espacios',
  description: 'Conoce todos nuestros espacios: Trampolín Park, Juegos Modulares y Servicios. Diversión para todas las edades en Chiguayante.',
};

const espacios = [
  {
    id: 'trampolin-park',
    name: 'Trampolín Park',
    slug: '/espacios/trampolin-park',
    description: 'Área exclusiva con trampolines de alta calidad, muro de escalada, piscina de espuma y aro de básquetbol. Perfecta para niños de 10-14 años.',
    ageRange: '10-14 años',
    features: [
      'Trampolines profesionales',
      'Muro de escalada Spider-Man',
      'Piscina de espuma',
      'Aro de básquetbol',
      'Zona de saltos libres',
    ],
    image: '/images/gallery/IMG_9127.JPG',
    badge: 'Popular',
    badgeVariant: 'cyan' as const,
  },
  {
    id: 'juegos-modulares',
    name: 'Juegos Modulares',
    slug: '/espacios/juegos-modulares',
    description: 'Mega juego modular de 3 pisos con resbalines, túneles, obstáculos y áreas de exploración. Ideal para niños de 1-9 años.',
    ageRange: '1-9 años',
    features: [
      'Juego modular 3 pisos',
      'Múltiples resbalines',
      'Túneles de exploración',
      'Áreas acolchadas',
      'Zona segura para toddlers',
    ],
    image: '/images/gallery/IMG_9129.JPG',
    badge: 'Favorito',
    badgeVariant: 'magenta' as const,
  },
  {
    id: 'servicios',
    name: 'Servicios Adicionales',
    slug: '/espacios/servicios-adicionales',
    description: 'Cocina equipada, baños, mesas, sillas y todo lo que necesitas para una celebración perfecta. Capacidad para 50 personas.',
    ageRange: 'Todas las edades',
    features: [
      'Cocina completamente equipada',
      'Baños limpios y modernos',
      'Mesas y sillas para 50 personas',
      'Área de servicio de alimentos',
      'Espacio para decoración',
    ],
    image: '/images/gallery/IMG_9120.JPG',
    badge: 'Incluido',
    badgeVariant: 'purple' as const,
  },
];

export default function EspaciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#00B8D4]/10 via-white to-[#E91E63]/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="cyan" className="mb-4">Instalaciones de Primera</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00B8D4] to-[#E91E63] bg-clip-text text-transparent">
                Nuestros Espacios
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Espacios diseñados para la diversión y seguridad de tus hijos. Conoce cada área de Trampfuns.
            </p>
          </div>
        </Container>
      </section>

      {/* Espacios Grid */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {espacios.map((espacio) => (
              <Card key={espacio.id} hover className="group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={espacio.image}
                    alt={espacio.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={espacio.badgeVariant}>{espacio.badge}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{espacio.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="gray" className="mt-2">{espacio.ageRange}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{espacio.description}</p>

                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-700">Características:</p>
                    <ul className="space-y-1">
                      {espacio.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#00B8D4] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href={espacio.slug}>
                      Ver Detalles
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00B8D4] to-[#2196F3]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para la Mejor Fiesta?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Todos nuestros espacios están incluidos en el arriendo. ¡Sin costos ocultos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/tarifas">Ver Precios</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#00B8D4]" asChild>
                <Link href="/tour-virtual">Tour Virtual 360°</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
