// ============================================
//  NEUROSTUDIO — Catálogo Netflix de Servicios
// ============================================

const CATALOG = {
  automatizaciones: {
    label: 'Automatizaciones con IA',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="7" width="6" height="6" rx="1"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="10"/></svg>`,
    description: 'Chatbots, CRM y flujos inteligentes',
    industries: [
      { id: 'hoteles',        name: 'Posadas y Hoteles',   emoji: '🏨' },
      { id: 'restaurantes',   name: 'Restaurantes',         emoji: '🍽️' },
      { id: 'clinicas',       name: 'Clínicas y Estéticas', emoji: '🏥' },
      { id: 'inmobiliarias',  name: 'Inmobiliarias',        emoji: '🏠' },
      { id: 'gimnasios',      name: 'Gimnasios',            emoji: '💪' },
      { id: 'ecommerce',      name: 'E-commerce',           emoji: '🛒' },
      { id: 'colegios',       name: 'Colegios Privados',    emoji: '🎓' },
      { id: 'juridicos',      name: 'Estudios Jurídicos',   emoji: '⚖️' },
      { id: 'salones',        name: 'Salones de Belleza',   emoji: '✂️' },
      { id: 'veterinarias',   name: 'Veterinarias',         emoji: '🐾' },
      { id: 'concesionarias', name: 'Concesionarias',       emoji: '🚗' },
      { id: 'viajes',         name: 'Agencias de Viajes',   emoji: '✈️' },
    ]
  },
  community: {
    label: 'Community Management',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    description: 'Redes, contenido y comunidad',
    industries: [
      { id: 'restaurantes', name: 'Restaurantes',        emoji: '🍽️' },
      { id: 'gimnasios',    name: 'Gimnasios y Fitness', emoji: '💪' },
      { id: 'ropa',         name: 'Tiendas de Ropa',     emoji: '👗' },
      { id: 'clinicas',     name: 'Clínicas y Estéticas',emoji: '🏥' },
      { id: 'hoteles',      name: 'Hoteles Boutique',    emoji: '🏨' },
      { id: 'salones',      name: 'Salones de Belleza',  emoji: '✂️' },
      { id: 'ecommerce',    name: 'E-commerce',          emoji: '🛒' },
      { id: 'colegios',     name: 'Colegios Privados',   emoji: '🎓' },
      { id: 'cafeterias',   name: 'Cafeterías',          emoji: '☕' },
    ]
  },
  ads: {
    label: 'Publicidad Digital',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    description: 'Meta Ads, Google Ads, TikTok Ads',
    industries: [
      { id: 'inmobiliarias',  name: 'Inmobiliarias',           emoji: '🏠' },
      { id: 'clinicas',       name: 'Clínicas',                emoji: '🏥' },
      { id: 'ecommerce',      name: 'E-commerce',              emoji: '🛒' },
      { id: 'colegios',       name: 'Colegios Privados',       emoji: '🎓' },
      { id: 'concesionarias', name: 'Concesionarias',          emoji: '🚗' },
      { id: 'servicios',      name: 'Servicios Profesionales', emoji: '💼' },
      { id: 'hoteles',        name: 'Hoteles',                 emoji: '🏨' },
      { id: 'gimnasios',      name: 'Gimnasios',               emoji: '💪' },
    ]
  },
  audiovisual: {
    label: 'Contenido Audiovisual',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="14" height="11" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>`,
    description: 'Reels, carruseles y producción con IA',
    industries: [
      { id: 'restaurantes', name: 'Restaurantes',           emoji: '🍽️' },
      { id: 'ropa',         name: 'Tiendas de Ropa',        emoji: '👗' },
      { id: 'hoteles',      name: 'Hoteles Boutique',       emoji: '🏨' },
      { id: 'gimnasios',    name: 'Gimnasios',              emoji: '💪' },
      { id: 'colegios',     name: 'Colegios',               emoji: '🎓' },
      { id: 'salones',      name: 'Salones de Belleza',     emoji: '✂️' },
      { id: 'ecommerce',    name: 'E-commerce',             emoji: '🛒' },
      { id: 'cafeterias',   name: 'Cafeterías',             emoji: '☕' },
    ]
  },
  web: {
    label: 'Desarrollo Web',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 7h20M8 21h8M12 17v4"/></svg>`,
    description: 'Landings, institucionales, e-commerce',
    industries: [
      { id: 'inmobiliarias',  name: 'Inmobiliarias',           emoji: '🏠' },
      { id: 'juridicos',      name: 'Estudios Jurídicos',      emoji: '⚖️' },
      { id: 'clinicas',       name: 'Clínicas',                emoji: '🏥' },
      { id: 'colegios',       name: 'Colegios',                emoji: '🎓' },
      { id: 'ecommerce',      name: 'E-commerce',              emoji: '🛒' },
      { id: 'hoteles',        name: 'Hoteles',                 emoji: '🏨' },
      { id: 'servicios',      name: 'Servicios Profesionales', emoji: '💼' },
      { id: 'concesionarias', name: 'Concesionarias',          emoji: '🚗' },
    ]
  },
  branding: {
    label: 'Branding e Identidad',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    description: 'Marca, estrategia visual y paleta',
    industries: [
      { id: 'restaurantes', name: 'Restaurantes',         emoji: '🍽️' },
      { id: 'ropa',         name: 'Marcas de Ropa',       emoji: '👗' },
      { id: 'clinicas',     name: 'Clínicas',             emoji: '🏥' },
      { id: 'startups',     name: 'Startups',             emoji: '🚀' },
      { id: 'salones',      name: 'Salones de Belleza',   emoji: '✂️' },
      { id: 'cafeterias',   name: 'Cafeterías',           emoji: '☕' },
      { id: 'ecommerce',    name: 'E-commerce',           emoji: '🛒' },
      { id: 'gimnasios',    name: 'Gimnasios',            emoji: '💪' },
    ]
  },
};

// ─── IMPLEMENTATIONS DATA ───────────────────────────────────────
const IMPLEMENTATIONS = {
  'automatizaciones-hoteles': {
    title: 'Automatizaciones para Posadas y Hoteles Boutique',
    intro: 'Tu posada recibe consultas por WhatsApp, Instagram, Booking y correo al mismo tiempo. Tu equipo responde lo que puede cuando puede, y los que no reciben respuesta rápida reservan en otro lado. La temporada alta hace todo más caótico.',
    steps: [
      { title: 'Centralizamos todos tus canales de contacto', body: 'Conectamos WhatsApp, Instagram DMs y formulario web a un solo panel. Toda consulta entra al mismo flujo, sin importar desde dónde llegue.' },
      { title: 'Configuramos respuestas automáticas inteligentes', body: 'El bot responde disponibilidad, tarifas y preguntas frecuentes en segundos. Si la consulta es compleja, deriva al equipo con el contexto completo de la conversación.' },
      { title: 'Armamos flujo de confirmación de reserva', body: 'El cliente recibe confirmación, recordatorio 48h antes y checklist de llegada sin que nadie en tu equipo tenga que enviarlos manualmente.' },
      { title: 'Integramos con tu sistema de reservas', body: 'Si usás Booking, Airbnb o un sistema propio, conectamos el bot para verificar disponibilidad en tiempo real antes de confirmar.' },
    ],
    whatChanges: 'Tu equipo deja de responder las mismas preguntas 20 veces por semana. Las reservas que antes se perdían porque nadie respondía a las 11pm ahora se capturan automáticamente. El check-in es más prolijo porque el huésped llega con toda la info.',
    withoutIt: 'Seguís perdiendo reservas en horarios no laborales y en temporada alta, cuando más saturado está el equipo y más consultas llegan al mismo tiempo.',
    includes: [
      'Bot de WhatsApp Business con respuestas personalizadas',
      'Integración con hasta 3 canales de contacto',
      'Flujo de confirmación y recordatorio automático',
      'Panel centralizado de conversaciones',
      'Soporte técnico durante las primeras 4 semanas post-implementación',
    ],
    timeframe: '2 a 3 semanas',
    idealFor: 'Posadas, hoteles boutique y alojamientos con gestión de reservas activa',
    whatsappContext: 'Automatizaciones con IA para mi Posada/Hotel',
  },
  'automatizaciones-clinicas': {
    title: 'Automatizaciones para Clínicas y Centros Estéticos',
    intro: 'Tu recepcionista pasa buena parte del día respondiendo "¿cuánto cuesta el tratamiento X?" y coordinando turnos que después se cancelan sin aviso. Los pacientes que no obtienen respuesta rápida van a la clínica del frente.',
    steps: [
      { title: 'Bot de consultas y agendamiento', body: 'El paciente escribe, el bot explica los tratamientos disponibles, califica si es un caso que puede atender tu clínica y ofrece turnos disponibles según tu agenda real.' },
      { title: 'Recordatorios automáticos de turno', body: 'Mensaje automático 24h antes con opción de confirmar o cancelar. Si cancela, el turno vuelve a estar disponible y podés ofrecerlo a otro paciente en lista de espera.' },
      { title: 'Seguimiento post-tratamiento', body: 'A los 3 o 7 días del tratamiento, el sistema envía un mensaje de seguimiento y, si la respuesta es positiva, sugiere el próximo paso del tratamiento o una nueva consulta.' },
    ],
    whatChanges: 'Tu recepcionista atiende los casos que realmente lo necesitan. Los no-shows bajan porque los pacientes reciben recordatorio en el momento justo. El seguimiento post-turno que antes no hacía nadie ahora ocurre solo.',
    withoutIt: 'Seguís con una tasa de ausentismo alta y un equipo administrativo sobrecargado respondiendo las mismas preguntas todo el día.',
    includes: [
      'Bot de WhatsApp para consultas y pre-calificación',
      'Flujo de agendamiento integrado con Google Calendar o similar',
      'Recordatorios automáticos configurables',
      'Seguimiento post-tratamiento automatizado',
      'Soporte técnico 4 semanas post-lanzamiento',
    ],
    timeframe: '2 a 3 semanas',
    idealFor: 'Clínicas médicas, odontológicas, estéticas y centros de bienestar',
    whatsappContext: 'Automatizaciones con IA para mi Clínica/Centro Estético',
  },
  'automatizaciones-inmobiliarias': {
    title: 'Automatizaciones para Inmobiliarias',
    intro: 'Recibís consultas por portales, WhatsApp y redes. Muchos te preguntan por propiedades que ya no están disponibles, o consultan a las 10pm cuando no hay nadie para responder. El seguimiento de leads se pierde en el caos del día a día.',
    steps: [
      { title: 'Calificación automática de leads', body: 'El bot pregunta presupuesto, zona de interés y tipo de operación. Solo pasan al asesor los leads que realmente encajan con lo que tenés disponible.' },
      { title: 'Respuesta inmediata 24/7', body: 'El interesado recibe respuesta al instante con información de las propiedades que más se ajustan a su búsqueda, con fotos, precio y link a la ficha completa.' },
      { title: 'Seguimiento de leads fríos', body: 'Los que visitaron pero no cerraron reciben seguimiento automático a los 7, 15 y 30 días con novedades o propiedades similares.' },
    ],
    whatChanges: 'Tus asesores dejan de perder tiempo con consultas que no van a ningún lado y se enfocan en los leads que ya estan calificados. El seguimiento que antes dependía de la memoria de cada uno ahora ocurre automáticamente.',
    withoutIt: 'Seguís perdiendo leads fuera del horario laboral y sin un sistema de seguimiento, muchos contactos interesados quedan en el olvido.',
    includes: [
      'Bot de calificación de leads en WhatsApp',
      'Respuesta automática con fichas de propiedades',
      'Flujo de seguimiento para leads fríos',
      'Integración con CRM básico (Notion, Google Sheets o similar)',
      'Soporte técnico 4 semanas post-lanzamiento',
    ],
    timeframe: '2 a 4 semanas',
    idealFor: 'Inmobiliarias con volumen activo de consultas entrantes',
    whatsappContext: 'Automatizaciones con IA para mi Inmobiliaria',
  },
  'automatizaciones-gimnasios': {
    title: 'Automatizaciones para Gimnasios y Centros de Fitness',
    intro: 'Cada semana alguien te escribe preguntando precios, horarios o si hacen clases de X. La recepción responde lo mismo una y otra vez. Los leads que pidieron info y no volvieron a escribir se pierden sin seguimiento.',
    steps: [
      { title: 'Bot de bienvenida y consultas frecuentes', body: 'Responde planes, precios, horarios y actividades automáticamente. El interesado obtiene lo que necesita sin esperar.' },
      { title: 'Flujo de captación de nuevos socios', body: 'Si el lead muestra interés, el bot ofrece una clase de prueba gratuita y agenda el turno. El nuevo contacto entra directo al CRM.' },
      { title: 'Retención de socios existentes', body: 'Mensajes automáticos a socios con vencimiento próximo, recordatorio de renovación y, si no renuevan, un mensaje de reactivación a los 15 días.' },
    ],
    whatChanges: 'La conversión de consulta a membresía sube porque nadie espera seguimiento manual. La renovación de socios mejora con recordatorios en el momento justo. Tu equipo se enfoca en la experiencia dentro del gimnasio.',
    withoutIt: 'Leads que preguntaron y no volvieron se pierden, y socios que no renuevan no reciben ningún recordatorio hasta que ya se fueron a la competencia.',
    includes: [
      'Bot de consultas y precios en WhatsApp',
      'Flujo de agenda de clase de prueba',
      'Automatización de renovación de membresías',
      'Registro de leads en planilla o CRM',
      'Soporte técnico 4 semanas',
    ],
    timeframe: '2 semanas',
    idealFor: 'Gimnasios, estudios de yoga, pilates, crossfit y centros de fitness',
    whatsappContext: 'Automatizaciones con IA para mi Gimnasio',
  },
  'automatizaciones-ecommerce': {
    title: 'Automatizaciones para E-commerce',
    intro: 'Tu tienda online recibe consultas sobre el estado del pedido, disponibilidad de productos y plazos de envío que tu equipo responde manualmente. El abandono de carrito es alto y no hay seguimiento automático para recuperarlo.',
    steps: [
      { title: 'Bot de atención post-compra', body: 'Estado del pedido, tracking y respuestas a preguntas frecuentes disponibles las 24h sin intervención humana.' },
      { title: 'Flujo de recuperación de carrito', body: 'Si alguien agregó productos y no completó la compra, recibe un recordatorio automático a las 2h, 24h y 48h con un incentivo progresivo.' },
      { title: 'Seguimiento de recompra', body: 'Clientes que compraron hace 30 o 60 días reciben un mensaje personalizado con productos relacionados o novedades de la tienda.' },
    ],
    whatChanges: 'La tasa de abandono de carrito baja porque hay seguimiento automático. El equipo deja de responder preguntas operativas de bajo valor. La recompra sube con seguimiento automatizado.',
    withoutIt: 'El 70% de los carritos abandonados no vuelven si no hay seguimiento. Seguís respondiendo "¿cuándo llega mi pedido?" manualmente todo el día.',
    includes: [
      'Bot de consultas post-compra en WhatsApp',
      'Flujo automatizado de recuperación de carrito',
      'Secuencia de recompra para clientes existentes',
      'Integración con Shopify, WooCommerce o Tiendanube',
      'Soporte técnico 4 semanas',
    ],
    timeframe: '2 a 3 semanas',
    idealFor: 'Tiendas online con volumen mínimo de 30 pedidos mensuales',
    whatsappContext: 'Automatizaciones con IA para mi E-commerce',
  },
  'community-restaurantes': {
    title: 'Community Management para Restaurantes',
    intro: 'Tu restaurante publica en Instagram cuando hay tiempo, que generalmente no es mucho. Las fotos son del celular de quien esté disponible, sin mucha consistencia. Los comentarios y mensajes se responden cuando se acuerdan.',
    steps: [
      { title: 'Planificación editorial mensual', body: 'Definimos qué publicar cada semana: el plato del día, una historia de tu cocina, el equipo, un momento del servicio. Cada post tiene su propósito.' },
      { title: 'Gestión diaria de interacciones', body: 'Respondemos comentarios, mensajes directos y reseñas dentro de las 2 horas. Las consultas de reserva las derivamos a tu equipo con el contexto.' },
      { title: 'Contenido reaprovechado', body: 'Una sesión de fotos mensual genera material para todo el mes. Las historias, los posts y el contenido de reserva salen del mismo material trabajado con criterio.' },
    ],
    whatChanges: 'Tu perfil pasa de publicar "cuando hay tiempo" a tener una presencia consistente y profesional. Los clientes que te descubren por Instagram encuentran un perfil que da ganas de ir.',
    withoutIt: 'Un perfil inactivo o inconsistente le dice al cliente potencial que el local no está activo, o peor, que no le importa la imagen. Esa primera impresión decide si reservan o buscan otra opción.',
    includes: [
      'Calendario editorial mensual',
      'Gestión de 2 redes sociales (Instagram + Facebook)',
      'Respuesta a mensajes y comentarios en horario hábil',
      'Hasta 20 publicaciones mensuales',
      'Reporte mensual de crecimiento y engagement',
    ],
    timeframe: '1 semana para arrancar',
    idealFor: 'Restaurantes, bares, cervecerías y espacios gastronómicos',
    whatsappContext: 'Community Management para mi Restaurante',
  },
  'community-gimnasios': {
    title: 'Community Management para Gimnasios y Fitness',
    intro: 'Tu gimnasio tiene historia para contar — transformaciones, logros, el equipo de instructores — pero no hay tiempo ni estructura para publicar todo eso de manera consistente. Las redes existen pero no trabajan para atraer nuevos socios.',
    steps: [
      { title: 'Estrategia de contenido enfocada en captación', body: 'Definimos qué tipo de contenido atrae a potenciales socios: antes/después, rutinas, testimonios, día a día. Cada post tiene un objetivo.' },
      { title: 'Contenido que muestra el ambiente', body: 'Stories del día a día, reels del equipo trabajando, momentos de clase. El contenido que hace que alguien diga "quiero entrenar ahí".' },
      { title: 'Gestión de consultas entrantes', body: 'Respondemos "¿cuánto cuesta?", "¿tienen clases de X?" dentro de las 2 horas. Las leads que llegan por redes entran al flujo de captación.' },
    ],
    whatChanges: 'Tu Instagram empieza a ser un canal real de captación de nuevos socios, no solo un perfil que existe. El contenido refleja la energía y el ambiente real de tu gimnasio.',
    withoutIt: 'Potenciales socios te buscan en Instagram, encuentran el último post de hace 3 semanas y asumen que están cerrados o desorganizados.',
    includes: [
      'Estrategia y calendario editorial mensual',
      'Gestión de Instagram y Facebook',
      'Hasta 24 publicaciones mensuales (posts + stories)',
      'Respuesta a mensajes y comentarios',
      'Reporte mensual',
    ],
    timeframe: '1 semana para arrancar',
    idealFor: 'Gimnasios, estudios de yoga, crossfit, pilates y entrenamiento personal',
    whatsappContext: 'Community Management para mi Gimnasio',
  },
  'ads-inmobiliarias': {
    title: 'Publicidad Digital para Inmobiliarias',
    intro: 'Publicás en los portales y esperás que lleguen consultas. Algunos meses llegan, otros no. No tenés control sobre el volumen de leads ni sobre su calidad. Los portales son caros y no podés medir si realmente convierten.',
    steps: [
      { title: 'Campañas en Meta orientadas a zona y presupuesto', body: 'Segmentamos audiencias por radio geográfico, comportamiento de búsqueda y datos demográficos. El anuncio solo lo ve quien tiene el perfil del comprador o inquilino que buscás.' },
      { title: 'Landing de captura de datos', body: 'El lead hace clic en el anuncio y llega a una página que muestra la propiedad con formulario corto. Nombre, WhatsApp y operación de interés. Nada más.' },
      { title: 'Optimización continua', body: 'Las campañas se ajustan semanalmente en función del costo por lead y la calidad de los contactos que entran. No se deja correr sin revisar.' },
    ],
    whatChanges: 'Pasás de depender de los portales a tener un canal propio de generación de leads con costo predecible y controlable. Podés escalar cuando tenés más propiedades y reducir cuando el stock baja.',
    withoutIt: 'Seguís pagando portales con retorno opaco y sin control sobre el volumen de consultas que recibís cada mes.',
    includes: [
      'Campaña activa en Meta Ads (Facebook e Instagram)',
      'Landing page de captura con diseño profesional',
      'Configuración del Pixel de Meta y eventos de conversión',
      'Optimización semanal de anuncios',
      'Reporte quincenal con métricas de costo por lead',
    ],
    timeframe: '1 a 2 semanas para lanzar',
    idealFor: 'Inmobiliarias con propiedades activas para vender o alquilar',
    whatsappContext: 'Publicidad Digital para mi Inmobiliaria',
  },
  'ads-ecommerce': {
    title: 'Publicidad Digital para E-commerce',
    intro: 'Tu tienda online existe, tiene productos, pero las ventas dependen del tráfico orgánico o de publicaciones esporádicas. No hay un sistema predecible de captación de nuevos clientes con ROAS positivo.',
    steps: [
      { title: 'Estructura de campañas por etapa del funnel', body: 'Campañas de prospección para nuevas audiencias, retargeting para visitantes que no compraron y campañas de retención para clientes existentes. Cada etapa con su objetivo y presupuesto.' },
      { title: 'Creatividades testeadas', body: 'Lanzamos múltiples versiones de cada anuncio — imagen estática, video, carrusel — y en 7 días sabemos qué formato genera más ventas a menor costo.' },
      { title: 'Optimización orientada a ROAS', body: 'El presupuesto se concentra en lo que funciona. Escalamos las campañas ganadoras y pausamos las que no convierten. Decisiones basadas en datos, no en intuición.' },
    ],
    whatChanges: 'Las ventas dejan de depender del azar del algoritmo orgánico. Tenés un canal de ventas predecible donde cada peso invertido tiene un retorno medible.',
    withoutIt: 'Sin publicidad paga, tu tienda depende 100% del tráfico orgánico que el algoritmo de Instagram distribuye cada vez menos gratuitamente.',
    includes: [
      'Gestión mensual de campañas en Meta Ads',
      'Estrutura de 3 etapas: prospección, retargeting y retención',
      'Diseño de creatividades para anuncios (hasta 6 por mes)',
      'Configuración del Pixel y catálogo de productos',
      'Reporte semanal de ROAS y costo por compra',
    ],
    timeframe: '1 a 2 semanas para lanzar',
    idealFor: 'Tiendas online con producto definido y capacidad de despacho',
    whatsappContext: 'Publicidad Digital para mi E-commerce',
  },
  'web-inmobiliarias': {
    title: 'Desarrollo Web para Inmobiliarias',
    intro: 'Tu presencia online son los portales inmobiliarios y tal vez una página de Facebook desactualizada. No tenés un sitio propio donde el cliente pueda explorar tu cartera, conocerte como agencia y contactarte directamente.',
    steps: [
      { title: 'Sitio institucional con cartera de propiedades', body: 'Diseñamos un sitio que muestre tu agencia, tu equipo y las propiedades disponibles con filtros por tipo, zona y precio. El cliente puede explorar sin depender de los portales.' },
      { title: 'Formulario de contacto y WhatsApp integrado', body: 'Cada propiedad tiene un botón de consulta que pre-carga el mensaje en WhatsApp con el nombre de la propiedad. El lead llega con contexto completo.' },
      { title: 'SEO local', body: 'Optimizamos para que cuando alguien busque "inmobiliaria en [tu ciudad]" o "propiedades en [zona]", tu sitio aparezca en los primeros resultados.' },
    ],
    whatChanges: 'Dejás de depender exclusivamente de los portales para ser encontrado. Tu agencia tiene presencia propia y profesional que transmite confianza antes de que el cliente diga una sola palabra.',
    withoutIt: 'Sin sitio propio, cualquier cliente que te busca directo en Google no te encuentra, y los portales se quedan con el control de la relación con tu potencial comprador.',
    includes: [
      'Sitio web de hasta 6 páginas',
      'Listado de propiedades con filtros',
      'Formulario de contacto integrado con WhatsApp',
      'Optimización SEO básica',
      'Diseño responsive (mobile y desktop)',
      'Dominio y hosting por 1 año incluidos',
    ],
    timeframe: '3 a 4 semanas',
    idealFor: 'Inmobiliarias sin sitio propio o con sitio desactualizado',
    whatsappContext: 'Desarrollo Web para mi Inmobiliaria',
  },
  'branding-restaurantes': {
    title: 'Branding e Identidad para Restaurantes',
    intro: 'Tu restaurante tiene personalidad, un concepto, una cocina con carácter — pero nada de eso se ve en el logo, los colores ni la forma en que comunicás en redes. La identidad visual no cuenta la historia que vos querés contar.',
    steps: [
      { title: 'Definición de posicionamiento', body: 'Clarifícamos qué hace único a tu restaurante, para quién es, qué experiencia ofrece. Esto define todo lo demás.' },
      { title: 'Sistema de identidad visual', body: 'Logo, paleta de colores, tipografías y manual básico de uso. Todo coherente con el concepto y el tipo de cliente al que apuntás.' },
      { title: 'Aplicaciones básicas', body: 'Logo en formatos para redes, web y físico. Templates de publicaciones para Instagram. Diseño de carta o menú digital si aplica.' },
    ],
    whatChanges: 'Tu restaurante pasa de verse genérico a tener una identidad reconocible. Los materiales visuales dejan de hacerse "como se puede" y empiezan a responder a un sistema coherente.',
    withoutIt: 'Sin identidad definida, cada pieza de comunicación se crea de cero, con criterios distintos, y el resultado es una marca que se ve inconsistente y poco profesional.',
    includes: [
      'Investigación de posicionamiento y competencia',
      'Diseño de logotipo (3 propuestas, 2 rondas de revisión)',
      'Paleta de colores y tipografías',
      'Manual de identidad básico',
      'Templates para redes sociales (6 formatos)',
      'Archivos editables en AI y PDF',
    ],
    timeframe: '3 a 4 semanas',
    idealFor: 'Restaurantes nuevos o en proceso de reposicionamiento',
    whatsappContext: 'Branding e Identidad para mi Restaurante',
  },
  'audiovisual-restaurantes': {
    title: 'Contenido Audiovisual para Restaurantes',
    intro: 'Las fotos que publicás son las que tomó alguien con el celular entre servicio y servicio. Sabés que el contenido podría mostrar mejor lo que hacés, pero no tenés tiempo ni el ojo para producirlo con criterio.',
    steps: [
      { title: 'Sesión de fotos y video mensual', body: 'Venimos al local en el horario que menos interrumpe y producimos el contenido del mes: platos, ambiente, detalles del servicio. Todo con luz, composición y edición profesional.' },
      { title: 'Reels editados para redes', body: 'Videos cortos de 15 a 30 segundos pensados para parar el scroll: el emplatado de un plato, la preparación de un cóctel, la historia del lugar.' },
      { title: 'Bank de contenido mensual', body: 'Entregamos el material listo para publicar: fotos en alta resolución, videos editados, stories. Tu equipo solo elige cuándo publicar.' },
    ],
    whatChanges: 'Tus redes empiezan a mostrar realmente cómo es comer en tu lugar. El contenido que antes te daba vergüenza publicar ahora es material que genera reservas.',
    withoutIt: 'El contenido amateur resta credibilidad y hace que potenciales clientes pasen de largo, especialmente en Instagram donde la primera impresión es visual.',
    includes: [
      'Sesión de producción mensual en el local (2 horas)',
      'Hasta 20 fotos editadas en alta resolución',
      '4 reels editados con música y subtítulos',
      'Material adicional para stories',
      'Entrega de archivos listos para publicar',
    ],
    timeframe: '1 semana de pre-producción + sesión mensual',
    idealFor: 'Restaurantes, bares y espacios gastronómicos con identidad visual definida',
    whatsappContext: 'Contenido Audiovisual para mi Restaurante',
  },
};

// ─── HELPERS ──────────────────────────────────────────────────
function buildWhatsAppLink(serviceLabel, industryName, context) {
  const text = context
    ? `Hola, me interesa el servicio de *${serviceLabel}* para mi negocio de *${industryName}*. Vi la descripción en su web y quería saber más.`
    : `Hola, me interesa el servicio de *${serviceLabel}* para mi negocio de *${industryName}*. ¿Pueden darme más información?`;
  return `https://wa.me/59899421323?text=${encodeURIComponent(text)}`;
}

function getImplementation(serviceId, industryId) {
  return IMPLEMENTATIONS[`${serviceId}-${industryId}`] || null;
}

function renderGenericPanel(serviceKey, industryItem) {
  const svc = CATALOG[serviceKey];
  const waLink = buildWhatsAppLink(svc.label, industryItem.name);
  return `
    <div class="impl-main">
      <h3>${svc.label} para ${industryItem.name}</h3>
      <p class="impl-intro">Aplicamos ${svc.label.toLowerCase()} con estrategia específica para el rubro de ${industryItem.name.toLowerCase()}, considerando sus dinámicas, clientes y objetivos de negocio particulares.</p>
      <div class="impl-section-label">¿CÓMO LO HACEMOS?</div>
      <p style="font-size:0.875rem;color:#94a3b8;line-height:1.7">El proceso comienza con una sesión de diagnóstico donde entendemos tu operación actual, tus objetivos y tus recursos. A partir de ahí definimos el plan exacto de implementación adaptado a tu negocio.</p>
      <div class="block-blue" style="margin-top:1.5rem">
        <div class="block-label">PRÓXIMO PASO</div>
        Conversemos sobre tu negocio específico para darte una propuesta concreta con tiempos y alcance definido.
      </div>
    </div>
    <div class="impl-sidebar">
      <div>
        <div class="sidebar-block-title">SERVICIO</div>
        <p class="meta-value">${svc.label}</p>
      </div>
      <div class="sidebar-divider"></div>
      <div>
        <div class="sidebar-block-title">RUBRO</div>
        <p class="meta-value">${industryItem.emoji} ${industryItem.name}</p>
      </div>
      <div class="sidebar-divider"></div>
      <a href="${waLink}" target="_blank" rel="noopener" class="sidebar-cta-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
        Consultar este servicio →
      </a>
      <p class="sidebar-cta-note">Te respondemos en menos de 24hs · Sin compromiso</p>
    </div>
  `;
}

function renderDetailPanel(data, serviceKey, industryItem) {
  const svc = CATALOG[serviceKey];
  const waLink = buildWhatsAppLink(svc.label, industryItem.name, data.whatsappContext);
  const stepsHTML = data.steps.map((s, i) => `
    <div class="step-item">
      <button class="step-trigger" onclick="this.closest('.step-item').classList.toggle('open');this.closest('.step-item').querySelector('.step-body').classList.toggle('open')">
        <span class="step-num">${i+1}</span>
        <span class="step-title">${s.title}</span>
        <span class="step-chevron">▾</span>
      </button>
      <div class="step-body">${s.body}</div>
    </div>
  `).join('');

  const includesHTML = data.includes.map(inc => `<li>${inc}</li>`).join('');

  return `
    <div class="impl-main">
      <h3>${data.title}</h3>
      <p class="impl-intro">${data.intro}</p>
      <div class="impl-section-label">CÓMO LO IMPLEMENTAMOS</div>
      ${stepsHTML}
      <div class="block-blue" style="margin-top:1.5rem">
        <div class="block-label">QUÉ CAMBIA EN TU NEGOCIO</div>
        ${data.whatChanges}
      </div>
      <div class="block-red">
        <div class="block-label">SIN ESTO</div>
        ${data.withoutIt}
      </div>
    </div>
    <div class="impl-sidebar">
      <div>
        <div class="sidebar-block-title">QUÉ INCLUYE</div>
        <ul class="includes-list">${includesHTML}</ul>
      </div>
      <div class="sidebar-divider"></div>
      <div class="meta-item">
        <span class="meta-label">TIEMPO ESTIMADO</span>
        <span class="meta-value">${data.timeframe}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">IDEAL PARA</span>
        <span class="meta-value">${data.idealFor}</span>
      </div>
      <div class="sidebar-divider"></div>
      <a href="${waLink}" target="_blank" rel="noopener" class="sidebar-cta-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
        Consultar este servicio →
      </a>
      <p class="sidebar-cta-note">Te respondemos en menos de 24hs · Sin compromiso</p>
    </div>
  `;
}

// ─── CATALOG CONTROLLER ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
(function() {
  const selectorEl    = document.getElementById('service-selector');
  const industryGridEl = document.getElementById('industry-grid');
  const implPanelEl   = document.getElementById('impl-panel');
  const implBodyEl    = document.getElementById('impl-body');
  const implBackBtn   = document.getElementById('impl-back');
  const implCloseBtn  = document.getElementById('impl-close');
  const drawerEl      = document.getElementById('mobile-drawer');
  const drawerContent = document.getElementById('drawer-content');
  const overlayEl     = document.getElementById('drawer-overlay');

  if (!selectorEl) return;

  let activeService = null;
  let activeIndustry = null;
  const isMobile = () => window.innerWidth < 768;

  // ── Render service tabs ──
  function renderTabs() {
    selectorEl.innerHTML = Object.entries(CATALOG).map(([key, svc]) => `
      <button class="service-tab${activeService === key ? ' active' : ''}" data-service="${key}">
        <div class="service-tab-icon">${svc.icon}</div>
        <span class="service-tab-name">${svc.label}</span>
        <span class="service-tab-count">${svc.industries.length} rubros</span>
      </button>
    `).join('');

    selectorEl.querySelectorAll('.service-tab').forEach(tab => {
      tab.addEventListener('click', () => selectService(tab.dataset.service));
    });
  }

  // ── Select service ──
  function selectService(key) {
    activeService = key;
    activeIndustry = null;
    closePanel();
    renderTabs();
    renderIndustries();
  }

  // ── Render industry grid ──
  function renderIndustries() {
    if (!activeService) { industryGridEl.classList.remove('visible'); return; }
    const svc = CATALOG[activeService];
    industryGridEl.innerHTML = svc.industries.map(ind => `
      <button class="industry-btn${activeIndustry === ind.id ? ' active' : ''}" data-industry="${ind.id}" data-name="${ind.name}" data-emoji="${ind.emoji}">
        <span class="ind-emoji">${ind.emoji}</span>
        <span class="ind-name">${ind.name}</span>
        <span class="ind-arrow">→</span>
      </button>
    `).join('');

    industryGridEl.querySelectorAll('.industry-btn').forEach(btn => {
      btn.addEventListener('click', () => selectIndustry(btn.dataset.industry, btn.dataset.name, btn.dataset.emoji));
    });

    requestAnimationFrame(() => {
      industryGridEl.classList.add('visible');
    });
  }

  // ── Select industry → open panel ──
  function selectIndustry(industryId, industryName, industryEmoji) {
    activeIndustry = industryId;
    renderIndustries();

    const implData = getImplementation(activeService, industryId);
    const svc = CATALOG[activeService];
    const industryItem = { id: industryId, name: industryName, emoji: industryEmoji };
    const panelHTML = implData
      ? renderDetailPanel(implData, activeService, industryItem)
      : renderGenericPanel(activeService, industryItem);

    if (isMobile()) {
      drawerContent.innerHTML = `
        <button onclick="closeMobileDrawer()" style="position:sticky;top:0;display:block;width:100%;padding:12px;background:#0d1017;border:none;color:#64748b;font-size:0.85rem;text-align:left;border-bottom:1px solid rgba(255,255,255,0.05)">
          ← Cerrar
        </button>
        <div style="display:grid;grid-template-columns:1fr;gap:0">${panelHTML}</div>
      `;
      drawerEl.classList.add('open');
      overlayEl.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      implBodyEl.innerHTML = panelHTML;
      implPanelEl.classList.add('open');
      setTimeout(() => {
        implPanelEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }

  // ── Close panel ──
  function closePanel() {
    implPanelEl.classList.remove('open');
    activeIndustry = null;
  }

  window.closeMobileDrawer = function() {
    drawerEl.classList.remove('open');
    overlayEl.classList.remove('open');
    document.body.style.overflow = '';
    activeIndustry = null;
    renderIndustries();
  };

  if (implBackBtn) implBackBtn.addEventListener('click', closePanel);
  if (implCloseBtn) implCloseBtn.addEventListener('click', closePanel);
  if (overlayEl) overlayEl.addEventListener('click', window.closeMobileDrawer);

  // ── Init ──
  renderTabs();

  // ── Wire up "Explorar todos los servicios" from quiz ──
  const exploreBtn = document.getElementById('guia-explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const catalogSection = document.getElementById('catalogo');
      if (catalogSection) {
        const offset = 80;
        const top = catalogSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        // Auto-select first service
        setTimeout(() => selectService(Object.keys(CATALOG)[0]), 600);
      }
    });
  }

  // ── Wire up quiz progress bar ──
  const progressFill = document.getElementById('quiz-progress-fill');
  function updateProgress(step) {
    if (!progressFill) return;
    const pct = step === 1 ? 33 : step === 2 ? 66 : 100;
    progressFill.style.width = pct + '%';
  }

  // Patch switchStep to update progress
  const origSwitchStep = window.switchStep;
  window.switchStep = function(hideEl, showEl) {
    if (origSwitchStep) origSwitchStep(hideEl, showEl);
    else {
      hideEl.classList.remove('active');
      showEl.classList.add('active');
    }
    const stepId = showEl.id;
    if (stepId === 'guia-step-1') updateProgress(1);
    else if (stepId === 'guia-step-2') updateProgress(2);
    else if (stepId === 'guia-step-3') updateProgress(3);
  };

  // Handle netflix card selection (visual feedback)
  document.querySelectorAll('.guia__netflix-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.guia__netflix-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // Handle challenge card selection
  document.querySelectorAll('.guia__challenge-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.guia__challenge-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
  });
});
