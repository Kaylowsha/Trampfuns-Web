import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { siteInfo } from '@/lib/constants/site-info';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contacto y Reservas',
  description: `Contacta con Trampfuns para reservar tu cumpleaños. Teléfonos: ${siteInfo.contact.phone} | WhatsApp | Formulario web. En Chiguayante.`,
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#00B8D4]/10 to-[#E91E63]/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="cyan" className="mb-4">Estamos Aquí Para Ti</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00B8D4] to-[#E91E63] bg-clip-text text-transparent">
                Contacto y Reservas
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              ¿Listo para reservar? Contáctanos por el medio que prefieras
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <Card hover className="text-center">
              <CardHeader className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5">
                <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">La forma más rápida de contactarnos</p>
                <a
                  href={`https://wa.me/${siteInfo.contact.whatsapp}?text=${encodeURIComponent('Hola, quiero consultar sobre reservas 🎉')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Enviar Mensaje
                </a>
              </CardContent>
            </Card>

            {/* Teléfono */}
            <Card hover className="text-center">
              <CardHeader className="bg-gradient-to-br from-[#00B8D4]/10 to-[#2196F3]/5">
                <div className="w-20 h-20 bg-gradient-to-r from-[#00B8D4] to-[#2196F3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle>Teléfono</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-2">Llámanos directamente</p>
                <a
                  href={`tel:${siteInfo.contact.phone}`}
                  className="text-[#00B8D4] font-semibold text-lg hover:underline block mb-2"
                >
                  {siteInfo.contact.phone}
                </a>
                <a
                  href={`tel:${siteInfo.contact.phoneAlt}`}
                  className="text-[#00B8D4] font-semibold text-lg hover:underline block"
                >
                  {siteInfo.contact.phoneAlt}
                </a>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card hover className="text-center">
              <CardHeader className="bg-gradient-to-br from-[#E91E63]/10 to-[#9C27B0]/5">
                <div className="w-20 h-20 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <CardTitle>Instagram</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">Síguenos y envíanos un DM</p>
                <a
                  href="https://instagram.com/trampfuns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#E91E63] to-[#9C27B0] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-opacity"
                >
                  @trampfuns
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="bg-gradient-to-r from-[#00B8D4]/5 to-[#E91E63]/5">
                <CardTitle className="text-center text-2xl">
                  O Envíanos un Mensaje
                </CardTitle>
                <p className="text-center text-gray-600 mt-2">
                  Completa el formulario y te contactaremos pronto
                </p>
              </CardHeader>
              <CardContent className="pt-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D4] focus:border-transparent outline-none transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D4] focus:border-transparent outline-none transition-all"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bloque" className="block text-sm font-medium text-gray-700 mb-2">
                      Bloque Horario
                    </label>
                    <div className="relative">
                      <select
                        id="bloque"
                        name="bloque"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D4] focus:border-transparent outline-none transition-all appearance-none bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>Selecciona un bloque...</option>
                        <option value="Bloque 1">Bloque 1</option>
                        <option value="Bloque 2">Bloque 2</option>
                        <option value="Bloque 3">Bloque 3</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D4] focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha Deseada *
                      </label>
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D4] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="personas" className="block text-sm font-medium text-gray-700 mb-2">
                        Número de Personas
                      </label>
                      <input
                        type="number"
                        id="personas"
                        name="personas"
                        min="1"
                        max="50"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D4] focus:border-transparent outline-none transition-all"
                        placeholder="30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje / Consulta *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8D4] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Cuéntanos sobre tu evento..."
                    />
                  </div>

                  <div className="bg-[#FFD700]/10 rounded-lg p-4 border border-[#FFD700]/30">
                    <p className="text-sm text-gray-700">
                      <strong>💡 Tip:</strong> Para una respuesta más rápida, contáctanos por WhatsApp.
                      Los formularios son revisados en horario laboral.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00B8D4] to-[#2196F3] text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    Enviar Consulta
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Campos obligatorios. Tus datos están protegidos y solo se usan para contactarte.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestra Ubicación
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-[#00B8D4] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Dirección:</p>
                    <p className="text-gray-700">{siteInfo.contact.address}</p>
                    <p className="text-gray-700">{siteInfo.contact.city}, {siteInfo.contact.region}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-[#00B8D4] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Horarios:</p>
                    <p className="text-gray-700">{siteInfo.hours.weekdays}</p>
                    <p className="text-gray-700">{siteInfo.hours.weekends}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-[#00B8D4] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Contacto:</p>
                    <p className="text-gray-700">{siteInfo.contact.phone}</p>
                    <p className="text-gray-700">{siteInfo.contact.phoneAlt}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.contact.address + ', ' + siteInfo.contact.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#00B8D4] hover:underline font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>
            </div>

            <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.5!2d-73.0!3d-36.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU0JzAwLjAiUyA3M8KwMDAnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Trampfuns"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
