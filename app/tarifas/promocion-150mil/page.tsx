import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { siteInfo } from '@/lib/constants/site-info';
import { assetPath } from '@/lib/constants/config';

export const metadata: Metadata = {
  title: 'Promoción $150.000',
  description: 'Oferta especial de cumpleaños por solo $150.000. Incluye Trampolín Park, juegos modulares y todo el espacio para 50 personas.',
};

export default function PromocionPage() {
  return (
    <>
      {/* Hero con Urgencia */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={assetPath("/images/gallery/IMG_9127.JPG")}
            alt="Promoción Trampfuns"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/40 to-[#9C27B0]/40" />
        </div>

        <Container className="relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Urgency Badge */}
            <div className="inline-block mb-6 animate-bounce">
              <Badge className="bg-[#FFD700] text-gray-900 text-lg px-6 py-3 font-bold">
                ⏰ CUPOS LIMITADOS - RESERVA YA
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              ¡CELEBRA POR SOLO<br />
              <span className="text-[#FFD700] text-6xl md:text-8xl">
                $150.000!
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold mb-8">
              🎉 Todo Incluido - Sin Costos Ocultos 🎉
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border-2 border-white/30">
              <h2 className="text-3xl font-bold mb-6">Incluye:</h2>
              <div className="grid md:grid-cols-2 gap-4 text-left text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">✅</span>
                  <span>Trampolín Park Completo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">✅</span>
                  <span>Juegos Modulares 3 Pisos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">✅</span>
                  <span>Mesas y Sillas (50 personas)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">✅</span>
                  <span>Cocina Equipada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">✅</span>
                  <span>4 Horas de Arriendo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">✅</span>
                  <span>Espacio 100% Exclusivo</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl px-12 py-6" asChild>
                <a
                  href={`https://wa.me/${siteInfo.contact.whatsapp}?text=${encodeURIComponent('¡Hola! Quiero reservar con la promoción de $150.000 🎉')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  ¡RESERVAR AHORA!
                </a>
              </Button>

              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#E91E63] text-xl px-12 py-6" asChild>
                <a href={`tel:${siteInfo.contact.phone}`}>
                  📞 LLAMAR AHORA
                </a>
              </Button>
            </div>

            <p className="mt-8 text-xl opacity-90">
              🔥 Más de 100 familias ya han celebrado con nosotros
            </p>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="text-center">
            <p className="text-sm mb-2">Desliza para ver más</p>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Comparación de Valor */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent">
              ¿Por Qué Es Una Gran Oferta?
            </span>
          </h2>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-400">Si Contrataras Separado:</h3>
                <div className="space-y-3 text-gray-500">
                  <div className="flex justify-between">
                    <span>Arriendo trampolín park</span>
                    <span className="line-through">$80.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arriendo juegos modulares</span>
                    <span className="line-through">$60.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uso de instalaciones</span>
                    <span className="line-through">$40.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Limpieza</span>
                    <span className="line-through">$20.000</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-3 mt-3 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="line-through">$200.000</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#E91E63] to-[#9C27B0] text-white rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-6">Con Nuestra Promoción:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>TODO INCLUIDO</span>
                    <span>✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sin Costos Ocultos</span>
                    <span>✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Espacio Exclusivo</span>
                    <span>✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4 Horas Completas</span>
                    <span>✓</span>
                  </div>
                  <div className="border-t-2 border-white/30 pt-3 mt-3">
                    <div className="text-center">
                      <p className="text-sm opacity-90 mb-2">SOLO PAGAS</p>
                      <p className="text-5xl font-black">$150.000</p>
                      <p className="text-xl mt-2 bg-[#FFD700] text-gray-900 inline-block px-4 py-1 rounded-full font-bold">
                        ¡AHORRAS $50.000!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonios Rápidos */}
      <section className="py-20 bg-gradient-to-br from-[#00B8D4]/10 to-[#E91E63]/10">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'María González',
                text: '"¡Excelente lugar! Los niños no querían irse. Súper recomendado."',
                stars: 5,
              },
              {
                name: 'Pedro Soto',
                text: '"La mejor fiesta que hemos hecho. Todo impecable y el precio súper accesible."',
                stars: 5,
              },
              {
                name: 'Carolina Díaz',
                text: '"Mis hijos de 3 y 10 años se divirtieron por igual. Hay juegos para todas las edades."',
                stars: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">{testimonial.text}</p>
                <p className="font-bold text-[#00B8D4]">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final con Urgencia */}
      <section className="py-20 bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#00B8D4]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-full inline-block px-6 py-3 mb-6">
              <p className="text-xl font-bold">⚠️ Esta promoción no durará para siempre</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ¡NO PIERDAS ESTA OPORTUNIDAD!
            </h2>

            <p className="text-2xl mb-8">
              Reserva ahora y asegura tu fecha con esta increíble oferta
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
              <h3 className="text-3xl font-bold mb-4">Contacta Ahora Por:</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl px-12 py-6" asChild>
                  <a
                    href={`https://wa.me/${siteInfo.contact.whatsapp}?text=${encodeURIComponent('¡Quiero la promoción de $150.000!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" className="bg-white text-[#E91E63] hover:bg-gray-100 text-xl px-12 py-6" asChild>
                  <a href={`tel:${siteInfo.contact.phone}`}>
                    Teléfono
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#E91E63] text-xl px-12 py-6" asChild>
                  <Link href="/contacto">
                    Formulario
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-lg opacity-90">
              📍 {siteInfo.contact.address}, {siteInfo.contact.city}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
