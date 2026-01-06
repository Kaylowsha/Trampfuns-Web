import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { assetPath } from '@/lib/constants/config';

export const metadata: Metadata = {
  title: 'Trampolín Park',
  description: 'Trampolín Park con muro de escalada y piscina de espuma en Chiguayante. Perfecto para niños de 10-14 años. Diversión y seguridad garantizada.',
  keywords: ['trampolín park', 'muro escalada niños', 'fiestas adolescentes', 'chiguayante'],
};

const features = [
  {
    icon: '🤸',
    title: 'Trampolines Profesionales',
    description: 'Trampolines de alta resistencia con certificación de seguridad internacional.',
  },
  {
    icon: '🧗',
    title: 'Muro Spider-Man',
    description: 'Muro de escalada temático con diferentes niveles de dificultad.',
  },
  {
    icon: '🏊',
    title: 'Piscina de Espuma',
    description: 'Zona de aterrizaje suave y segura para saltos espectaculares.',
  },
  {
    icon: '🏀',
    description: 'Aro de básquetbol para encestar desde el trampolín.',
  },
  {
    icon: '🛡️',
    title: 'Zona Segura',
    description: 'Redes de protección y colchonetas en todas las áreas.',
  },
  {
    icon: '👥',
    title: 'Uso Exclusivo',
    description: 'El espacio es 100% privado durante tu evento.',
  },
];

const safetyFeatures = [
  'Superficies acolchadas en todas las áreas',
  'Redes de seguridad perimetrales',
  'Materiales certificados anti-bacteriales',
  'Limpieza y sanitización después de cada evento',
  'Supervisión recomendada de adultos',
  'Normas de seguridad claramente señalizadas',
];

export default function TrampolinParkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={assetPath("/images/gallery/IMG_9127.JPG")}
          alt="Trampolín Park Trampfuns"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Container className="relative h-full flex items-end pb-16">
          <div className="text-white">
            <Badge variant="cyan" className="mb-4">10-14 Años</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Trampolín Park
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl opacity-90">
              La experiencia más emocionante para preadolescentes. Saltos, escalada y diversión sin límites.
            </p>
          </div>
        </Container>
      </section>

      {/* Descripción */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00B8D4] to-[#2196F3] bg-clip-text text-transparent">
                ¡La Atracción Principal!
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Nuestro Trampolín Park está diseñado específicamente para niños de 10 a 14 años que buscan
              diversión más intensa y desafíos emocionantes. Con elementos profesionales y máxima seguridad.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} hover>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Galería */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Conoce el Espacio
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <Image
                src={assetPath("/images/gallery/IMG_9127.JPG")}
                alt="Vista del trampolín park"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <Image
                src={assetPath("/images/gallery/IMG_9129.JPG")}
                alt="Área de juegos"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <Image
                src={assetPath("/images/gallery/IMG_9130.JPG")}
                alt="Instalaciones"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/galeria">
                Ver Galería Completa
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Seguridad */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="cyan" className="mb-4">Seguridad Primero</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Diversión 100% Segura
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La seguridad de los niños es nuestra máxima prioridad. Todos nuestros equipos
                cuentan con certificaciones internacionales y son sometidos a mantenimiento regular.
              </p>
              <ul className="space-y-3">
                {safetyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-[#00B8D4] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={assetPath("/images/gallery/IMG_9120.JPG")}
                alt="Seguridad en Trampfuns"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#00B8D4]/10 to-[#E91E63]/10">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00B8D4] to-[#E91E63] bg-clip-text text-transparent">
                ¿Listo para Saltar?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              El Trampolín Park está incluido en todos nuestros paquetes. ¡Reserva ahora y asegura la fecha!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacto">Reservar Ahora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tour-virtual">Ver en Tour 360°</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
