import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { assetPath } from '@/lib/constants/config';

export const metadata: Metadata = {
  title: 'Servicios Adicionales',
  description: 'Cocina equipada, baños modernos, mesas y sillas para 50 personas. Todo lo que necesitas para tu fiesta en Chiguayante.',
};

const services = [
  {
    icon: '🍽️',
    title: 'Cocina Equipada',
    description: 'Cocina completa con todo lo necesario para preparar y servir alimentos.',
    features: [
      'Refrigerador',
      'Microondas',
      'Utensilios básicos',
      'Área de preparación',
      'Lava platos',
    ],
  },
  {
    icon: '🚻',
    title: 'Baños Modernos',
    description: 'Baños limpios, modernos y adaptados para niños.',
    features: [
      'Baños para niños y adultos',
      'Cambiador de bebés',
      'Completamente sanitizados',
      'Artículos de limpieza',
      'Siempre limpios',
    ],
  },
  {
    icon: '🪑',
    title: 'Mesas y Sillas',
    description: 'Capacidad para 50 personas cómodamente sentadas.',
    features: [
      '10 mesas grandes',
      '50 sillas',
      'Mesas auxiliares',
      'Área de servicio',
      'Espacio para decoración',
    ],
  },
  {
    icon: '🎈',
    title: 'Espacio para Decorar',
    description: 'Libertad total para decorar según tu temática.',
    features: [
      'Ganchos para decoración',
      'Espacio en paredes',
      'Mesa principal destacada',
      'Área para piñata',
      'Trae tu decoración',
    ],
  },
  {
    icon: '🎵',
    title: 'Sistema de Audio',
    description: 'Reproduce tu música favorita durante la fiesta.',
    features: [
      'Parlantes de calidad',
      'Conexión Bluetooth',
      'Entrada auxiliar',
      'Buen volumen',
      'Fácil de usar',
    ],
  },
  {
    icon: '📦',
    title: 'Área de Regalos',
    description: 'Espacio designado para los regalos del cumpleañero.',
    features: [
      'Mesa especial para regalos',
      'Área protegida',
      'Espacio amplio',
      'Fácil acceso',
      'Seguridad',
    ],
  },
];

const included = [
  'Uso exclusivo de todas las instalaciones',
  'Limpieza antes y después del evento',
  'Electricidad y agua incluidas',
  'Estacionamiento disponible',
  'Personal de apoyo si lo necesitas',
  'Sin costos ocultos',
];

export default function ServiciosAdicionalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={assetPath("/images/gallery/IMG_9120.JPG")}
          alt="Servicios Trampfuns"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Container className="relative h-full flex items-end pb-16">
          <div className="text-white">
            <Badge variant="purple" className="mb-4">Todo Incluido</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Servicios Adicionales
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl opacity-90">
              Todo lo que necesitas para una celebración perfecta, sin preocupaciones.
            </p>
          </div>
        </Container>
      </section>

      {/* Descripción */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#9C27B0] to-[#00B8D4] bg-clip-text text-transparent">
                ¡Todo Está Listo Para Ti!
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              No tienes que preocuparte por nada. Nuestras instalaciones están completamente equipadas
              para que solo te enfoques en disfrutar el cumpleaños de tu hijo.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} hover>
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#9C27B0] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Capacidad */}
      <section className="py-16 bg-gradient-to-br from-[#9C27B0]/10 to-[#00B8D4]/10">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#9C27B0] to-[#00B8D4] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">Personas</p>
              <p className="text-sm text-gray-500 mt-2">Capacidad total sentadas</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#9C27B0] to-[#00B8D4] bg-clip-text text-transparent mb-2">
                4h
              </div>
              <p className="text-gray-600 font-medium">Tiempo de Arriendo</p>
              <p className="text-sm text-gray-500 mt-2">Tiempo completo para tu evento</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#9C27B0] to-[#00B8D4] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-600 font-medium">Exclusivo</p>
              <p className="text-sm text-gray-500 mt-2">El espacio es solo para ti</p>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="purple" className="mb-4">Sin Costos Ocultos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Qué Está Incluido?
              </h2>
              <p className="text-lg text-gray-600">
                Todo lo que ves aquí está incluido en el precio del arriendo. Sin sorpresas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {included.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-gradient-to-r from-[#9C27B0]/5 to-[#00B8D4]/5 rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#9C27B0] to-[#00B8D4] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tips */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Consejos Útiles
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <span className="mr-2">🎂</span>
                  Puedes traer tu propia comida
                </h3>
                <p className="text-gray-600 ml-8">
                  No trabajamos con catering exclusivo. Trae la comida que prefieras o contrata el servicio que más te guste.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <span className="mr-2">🎈</span>
                  Decora a tu gusto
                </h3>
                <p className="text-gray-600 ml-8">
                  Tienes total libertad para decorar el espacio según la temática que elijas. Solo te pedimos retirar la decoración al final.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <span className="mr-2">⏰</span>
                  Llega con tiempo
                </h3>
                <p className="text-gray-600 ml-8">
                  Recomendamos llegar 30 minutos antes para decorar y organizar todo con calma.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#9C27B0] to-[#00B8D4]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo Para Reservar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Todos estos servicios están incluidos en el precio. Sin extras, sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#9C27B0] hover:bg-gray-100" asChild>
                <Link href="/tarifas">Ver Precios</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link href="/contacto">Contactar Ahora</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
