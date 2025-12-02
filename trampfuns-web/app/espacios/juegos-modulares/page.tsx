import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Juegos Modulares',
  description: 'Juego modular de 3 pisos con resbalines y túneles para niños de 1-9 años. Fiestas seguras infantiles en Chiguayante.',
  keywords: ['juegos modulares', 'resbalín', 'túneles niños', 'fiestas infantiles'],
};

const ageGroups = [
  {
    range: '1-3 Años',
    title: 'Toddlers',
    icon: '👶',
    description: 'Área especial con juegos bajos, suaves y seguros.',
    features: [
      'Piscina de espuma acolchada',
      'Juegos a baja altura',
      'Materiales súper suaves',
      'Zona separada y protegida',
    ],
    color: 'cyan',
  },
  {
    range: '4-6 Años',
    title: 'Exploradores',
    icon: '🧒',
    description: 'Nivel intermedio con más desafíos y obstáculos.',
    features: [
      'Resbalín mediano',
      'Túneles de exploración',
      'Obstáculos suaves',
      'Áreas de escalada básica',
    ],
    color: 'magenta',
  },
  {
    range: '7-9 Años',
    title: 'Aventureros',
    icon: '🧑',
    description: 'Nivel superior con el mega resbalín de 3 pisos.',
    features: [
      'Mega resbalín de 3 pisos',
      'Túneles complejos',
      'Puentes colgantes',
      'Zona de desafíos',
    ],
    color: 'purple',
  },
] as const;

const highlights = [
  {
    icon: '🏗️',
    title: 'Estructura de 3 Pisos',
    description: 'Mega juego modular con múltiples niveles de diversión y exploración.',
  },
  {
    icon: '🌈',
    title: 'Colores Vibrantes',
    description: 'Diseño colorido y atractivo que estimula la creatividad de los niños.',
  },
  {
    icon: '🧼',
    title: 'Limpieza Profunda',
    description: 'Sanitización completa antes y después de cada evento.',
  },
  {
    icon: '🛡️',
    title: 'Materiales Certificados',
    description: 'Todos los materiales son anti-bacteriales y libres de tóxicos.',
  },
];

export default function JuegosModularesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/gallery/IMG_9129.JPG"
          alt="Juegos Modulares Trampfuns"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Container className="relative h-full flex items-end pb-16">
          <div className="text-white">
            <Badge variant="magenta" className="mb-4">1-9 Años</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Juegos Modulares
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl opacity-90">
              Mega estructura de 3 pisos diseñada para explorar, deslizarse y quemar energía.
            </p>
          </div>
        </Container>
      </section>

      {/* Descripción */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
                Diversión Para Todas las Edades
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Nuestro juego modular está dividido estratégicamente por edades, asegurando que cada niño
              pueda jugar de forma segura y divertida en el nivel adecuado para su desarrollo.
            </p>
          </div>

          {/* Age Groups */}
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, idx) => (
              <Card key={idx} hover>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{group.icon}</div>
                  <Badge variant={group.color} className="mb-4">{group.range}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{group.title}</h3>
                  <p className="text-gray-600 mb-6">{group.description}</p>
                  <ul className="space-y-2 text-left">
                    {group.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-[#E91E63] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-br from-[#E91E63]/5 to-[#9C27B0]/5">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Por Qué Nuestros Juegos Son Especiales?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Galería */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Ve el Juego en Acción
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image
                src="/images/gallery/IMG_9129.JPG"
                alt="Vista del juego modular"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="relative h-full rounded-2xl overflow-hidden group">
                <Image
                  src="/images/gallery/IMG_9130.JPG"
                  alt="Detalles del juego"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-full rounded-2xl overflow-hidden group">
                <Image
                  src="/images/gallery/IMG_9120.JPG"
                  alt="Área de juegos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Safety Info */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#E91E63]/10 to-[#9C27B0]/10 rounded-2xl p-8 md:p-12 border-2 border-[#E91E63]/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center text-white text-2xl">
                  ℹ️
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Información Importante</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Se recomienda que los niños usen calcetas antideslizantes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Los padres pueden supervisar desde las áreas designadas.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>El juego se limpia y sanitiza completamente entre eventos.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Todos los materiales cumplen con normativas de seguridad internacionales.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¡Diversión Garantizada!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              El juego modular está incluido en todos los paquetes. Perfecto para cumpleaños de niños pequeños.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#E91E63] hover:bg-gray-100" asChild>
                <Link href="/contacto">Reservar Ahora</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link href="/espacios">Ver Todos los Espacios</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
