import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { siteInfo } from '@/lib/constants/site-info';

export const metadata: Metadata = {
  title: 'Planes y Precios',
  description: `Precios de arriendo para cumpleaños en Chiguayante. Promoción $${siteInfo.pricing.promotional.toLocaleString('es-CL')} para 50 personas. Arriendo exclusivo.`,
  keywords: ['precios arriendo', 'cumpleaños económico', 'promoción 150000', 'chiguayante'],
};

const included = [
  {
    icon: '🤸',
    title: 'Trampolín Park Completo',
    description: 'Acceso ilimitado al área de trampolines, muro de escalada y piscina de espuma',
  },
  {
    icon: '🎮',
    title: 'Juegos Modulares',
    description: 'Mega juego modular de 3 pisos con resbalines y túneles',
  },
  {
    icon: '🍽️',
    title: 'Cocina Equipada',
    description: 'Uso de cocina con refrigerador, microondas y utensilios',
  },
  {
    icon: '🪑',
    title: 'Mesas y Sillas',
    description: 'Para 50 personas cómodamente sentadas',
  },
  {
    icon: '🚻',
    title: 'Baños Modernos',
    description: 'Limpios y sanitizados, adaptados para niños',
  },
  {
    icon: '🎵',
    title: 'Sistema de Audio',
    description: 'Parlantes con Bluetooth para tu música',
  },
  {
    icon: '🧼',
    title: 'Limpieza Incluida',
    description: 'Antes y después de tu evento',
  },
  {
    icon: '🔒',
    title: 'Uso Exclusivo',
    description: 'El espacio completo es 100% privado para ti',
  },
];

const faqs = [
  {
    question: '¿Cuánto tiempo dura el arriendo?',
    answer: '4 horas completas para que disfrutes sin apuros.',
  },
  {
    question: '¿Puedo traer mi propia comida?',
    answer: 'Sí, puedes traer toda la comida y bebidas que quieras. No trabajamos con catering exclusivo.',
  },
  {
    question: '¿Puedo decorar el espacio?',
    answer: 'Absolutamente. Tienes total libertad para decorar según tu temática. Solo te pedimos retirar la decoración al final.',
  },
  {
    question: '¿Qué edades pueden jugar?',
    answer: 'Nuestras instalaciones son perfectas para niños de 1 a 14 años. Tenemos áreas específicas para cada rango de edad.',
  },
  {
    question: '¿Se puede reservar con anticipación?',
    answer: 'Sí, te recomendamos reservar con al menos 2 semanas de anticipación para asegurar tu fecha.',
  },
];

export default function TarifasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#FFD700]/20 via-white to-[#FFA500]/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="cyan" className="mb-4">Oferta Especial</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
                Planes y Precios
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Precio transparente, sin costos ocultos. Todo incluido para tu tranquilidad.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Card */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-[#FFD700] shadow-2xl overflow-hidden">
              {/* Badge de oferta */}
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-center py-3">
                <p className="text-lg font-bold text-gray-900">
                  🎉 PROMOCIÓN ESPECIAL - CUPOS LIMITADOS 🎉
                </p>
              </div>

              <CardHeader className="text-center bg-gradient-to-br from-[#00B8D4]/5 to-[#E91E63]/5 pb-8">
                <div className="mb-4">
                  <Badge variant="magenta" className="text-lg px-6 py-2">
                    Paquete Completo
                  </Badge>
                </div>
                <CardTitle className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
                    ${siteInfo.pricing.promotional.toLocaleString('es-CL')}
                  </span>
                </CardTitle>
                <p className="text-2xl text-gray-700 font-medium">
                  Arriendo Completo - 4 Horas
                </p>
                <p className="text-gray-600 mt-2">
                  Hasta {siteInfo.pricing.capacity} personas
                </p>
              </CardHeader>

              <CardContent className="py-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">TODO INCLUIDO</h3>
                  <p className="text-gray-600">Sin costos adicionales ni sorpresas</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {included.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex-col space-y-4 bg-gray-50">
                <Button size="lg" className="w-full md:w-auto px-12" asChild>
                  <Link href="/contacto">
                    ¡Reservar Ahora!
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  📞 También puedes llamarnos: {siteInfo.contact.phone}
                </p>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-[#00B8D4]/5 to-[#E91E63]/5">
                    <h3 className="font-bold text-lg">{faq.question}</h3>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Proceso de Reserva */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Cómo Reservar?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00B8D4] to-[#2196F3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Contáctanos</h3>
              <p className="text-sm text-gray-600">Por WhatsApp, teléfono o formulario web</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00B8D4] to-[#2196F3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Confirma la Fecha</h3>
              <p className="text-sm text-gray-600">Verificamos disponibilidad y apartamos tu fecha</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00B8D4] to-[#2196F3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Prepara tu Fiesta</h3>
              <p className="text-sm text-gray-600">Planifica decoración, comida y todos los detalles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00B8D4] to-[#2196F3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">¡Disfruta!</h3>
              <p className="text-sm text-gray-600">Nosotros nos encargamos del espacio</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tienes Dudas Sobre el Precio?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contáctanos por WhatsApp y te resolveremos todas tus preguntas al instante.
            </p>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
              <a
                href={`https://wa.me/${siteInfo.contact.whatsapp}?text=${encodeURIComponent('Hola, quiero consultar sobre los precios 💰')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
