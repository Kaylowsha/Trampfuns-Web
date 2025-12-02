import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { KuulaEmbed } from '@/components/tour360/KuulaEmbed';

export const metadata: Metadata = {
  title: 'Tour Virtual 360°',
  description: 'Recorre Trampfuns desde tu casa con nuestro tour virtual 360°. Conoce el Trampolín Park, juegos modulares y todas las instalaciones.',
};

const scenes = [
  {
    id: 'entrada',
    name: 'Entrada Principal',
    icon: '🚪',
    description: 'Vista general del espacio',
  },
  {
    id: 'trampolin',
    name: 'Trampolín Park',
    icon: '🤸',
    description: 'Área de trampolines y escalada',
  },
  {
    id: 'juegos',
    name: 'Juegos Modulares',
    icon: '🎮',
    description: 'Juego de 3 pisos',
  },
  {
    id: 'servicios',
    name: 'Área de Servicios',
    icon: '🍽️',
    description: 'Cocina y mesas',
  },
];

export default function TourVirtualPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#00B8D4]/10 to-[#9C27B0]/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="cyan" className="mb-4">Experiencia Inmersiva</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00B8D4] to-[#9C27B0] bg-clip-text text-transparent">
                Tour Virtual 360°
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Recorre Trampfuns desde la comodidad de tu casa. Explora cada espacio como si estuvieras aquí.
            </p>
          </div>
        </Container>
      </section>

      {/* Tour Embed */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-xl p-6 border-2 border-[#FFD700]/50 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4">
                <span className="text-4xl">💡</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Cómo Usar el Tour:</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>🖱️ <strong>Click y arrastra</strong> para mirar alrededor</li>
                    <li>🔍 <strong>Usa el scroll</strong> para hacer zoom</li>
                    <li>📱 <strong>En móvil:</strong> mueve tu dispositivo para explorar</li>
                    <li>⚙️ <strong>Click en los puntos</strong> para cambiar de área</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder para Kuula - Actualizar con tu URL real */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl" style={{ height: '80vh', minHeight: '600px' }}>
            {/* TODO: Reemplazar con tu URL de Kuula cuando la tengas */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">360°</div>
                <h3 className="text-2xl font-bold mb-4">Tour 360° Próximamente</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Estamos preparando una experiencia inmersiva increíble para que puedas recorrer
                  nuestras instalaciones desde donde estés.
                </p>
                <p className="text-sm text-gray-500">
                  Mientras tanto, puedes ver nuestra galería de fotos o visitarnos en persona.
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                  <Button asChild>
                    <Link href="/galeria">Ver Galería</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contacto">Agendar Visita</Link>
                  </Button>
                </div>
              </div>
            </div>
            {/* Descomentar cuando tengas la URL de Kuula:
            <KuulaEmbed
              tourUrl="TU_URL_DE_KUULA_AQUÍ"
              title="Tour Virtual Trampfuns"
              className="h-full"
            />
            */}
          </div>
        </Container>
      </section>

      {/* Navegación Rápida */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Áreas del Tour
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenes.map((scene) => (
              <div
                key={scene.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{scene.icon}</div>
                <h3 className="text-xl font-bold mb-2">{scene.name}</h3>
                <p className="text-sm text-gray-600">{scene.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Instrucciones Detalladas */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tips Para Una Mejor Experiencia
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00B8D4] to-[#2196F3] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  🖥️
                </div>
                <h3 className="font-bold mb-2">Pantalla Grande</h3>
                <p className="text-sm text-gray-600">
                  Para la mejor experiencia, usa una computadora o tablet
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  🎧
                </div>
                <h3 className="font-bold mb-2">Modo Pantalla Completa</h3>
                <p className="text-sm text-gray-600">
                  Haz click en el botón de pantalla completa para inmersión total
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9C27B0] to-[#00B8D4] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  📱
                </div>
                <h3 className="font-bold mb-2">Giroscopio</h3>
                <p className="text-sm text-gray-600">
                  En móvil, mueve tu teléfono para explorar en 360°
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00B8D4] to-[#2196F3]">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Te Gustó lo Que Viste?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nada como verlo en persona. Agenda una visita o reserva directamente tu fecha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacto">Agendar Visita</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#00B8D4]" asChild>
                <Link href="/tarifas">Ver Precios</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
