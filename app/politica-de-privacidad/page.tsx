import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HexWatermark } from "@/components/HexPattern";
import { DATA_PROTECTION_EMAIL, CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos Personales · PRISMA",
  description:
    "Política de Privacidad y Tratamiento de Datos Personales de PRISMA LATAM S.A.S., conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.",
  alternates: { canonical: "/politica-de-privacidad" },
};

const INDICE = [
  { id: "identificacion", label: "1. Identificación y presentación" },
  { id: "definiciones", label: "2. Definiciones" },
  { id: "principios", label: "3. Principios del Tratamiento" },
  { id: "recoleccion", label: "4. Recolección de Datos" },
  { id: "informacion-recolectada", label: "5. Información Recolectada" },
  { id: "finalidad", label: "6. Generalidades de la Finalidad" },
  { id: "transmision", label: "7. Transmisión y Transferencia" },
  { id: "datos-sensibles", label: "8. Autorización para Datos Sensibles" },
  { id: "nuevos-usos", label: "9. Autorización para nuevos usos" },
  { id: "aviso", label: "10. Aviso de Privacidad" },
  { id: "cookies", label: "11. Cookies y tecnologías similares" },
  { id: "manifestaciones", label: "12. Manifestaciones de los Titulares" },
  { id: "conservacion", label: "13. Término y conservación" },
  { id: "seguridad", label: "14. Seguridad e incidentes" },
  { id: "supresion", label: "15. Eliminación y supresión" },
  { id: "confidencialidad", label: "16. Confidencialidad y anonimización" },
  { id: "veracidad", label: "17. Veracidad y calidad" },
  { id: "derechos", label: "18. Derechos de los Titulares" },
  { id: "procedimiento", label: "19. Procedimiento para ejercer tus derechos" },
  { id: "deberes", label: "20. Deberes de la Sociedad" },
  { id: "otra-informacion", label: "21. Otra información" },
];

/** Pregunta guía que agrupa una o varias secciones de la Política. */
function Pregunta({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-16 border-t border-slate-200 pt-8 text-sm font-medium tracking-[0.04em] text-teal-brand">
      {children}
    </p>
  );
}

function Seccion({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-6">
      <h2 className="text-2xl font-semibold tracking-[0.06em] text-ink">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-4 text-lg font-semibold tracking-[0.04em] text-ink">{children}</h3>
  );
}

function Lista({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-teal-brand">{children}</ul>
  );
}

/** Ítem de lista con un rótulo destacado ("Rótulo: texto"). */
function Item({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <li>
      {label && <strong className="font-semibold text-ink">{label}: </strong>}
      {children}
    </li>
  );
}

function Nota({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border-l-4 border-cyan-brand bg-cyan-50/60 px-4 py-3 text-sm">
      {children}
    </p>
  );
}

function Mail({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="font-medium text-teal-brand underline-offset-4 hover:underline"
    >
      {email}
    </a>
  );
}

const DEFINICIONES: [string, React.ReactNode][] = [
  [
    "Autorización",
    "es el consentimiento previo, expreso e informado que nos das como Titular para realizar el Tratamiento de tus Datos Personales, cuando éste sea exigible conforme a la ley. Debe poder ser consultado o acreditado posteriormente.",
  ],
  [
    "Aviso de Privacidad",
    "es la comunicación verbal o escrita (física, electrónica o en pantalla) dirigida al Titular para informarle sobre la existencia de esta Política, cómo consultarla y los aspectos esenciales del Tratamiento de sus datos.",
  ],
  [
    "Base de Datos",
    "es el conjunto estructurado y organizado de Datos Personales que es objeto de Tratamiento por parte de la Sociedad.",
  ],
  [
    "Cliente Corporativo” o “Cliente",
    "es la persona jurídica (empresa mediana o grande) que evalúa, contrata o utiliza la Plataforma SaaS de la Sociedad para centralizar, organizar y administrar la información relacionada con sus programas y pólizas de seguros.",
  ],
  [
    "Consulta",
    "es la solicitud realizada por el Titular (o sus causahabientes) para conocer la información personal que reposa sobre él en nuestras Bases de Datos.",
  ],
  [
    "Dato Personal",
    "es cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables. (La información puramente corporativa o comercial de una empresa o persona jurídica no constituye por sí misma un Dato Personal, salvo que identifique o se relacione con una persona natural).",
  ],
  [
    "Dato Personal Privado",
    "es aquel dato que por su naturaleza íntima, reservada o confidencial sólo es relevante para ti como Titular.",
  ],
  [
    "Dato Personal Semiprivado",
    "es aquel dato que no tiene naturaleza íntima, reservada ni pública y cuyo conocimiento o divulgación puede interesar no sólo al Titular sino a un sector o grupo específico de personas (por ejemplo: datos de identificación comercial, información financiera o antecedentes crediticios).",
  ],
  [
    "Dato Público",
    "es el dato calificado como tal por la ley o la Constitución y todos aquellos que no sean semiprivados, privados o sensibles.",
  ],
  [
    "Dato Sensible",
    "es aquel dato que afecta la intimidad del Titular o cuyo uso indebido puede generar discriminación. Incluye, entre otros, datos sobre el origen racial o étnico, convicciones religiosas o filosóficas, pertenencia a sindicatos, datos relativos a la salud, a la vida sexual y datos biométricos.",
  ],
  [
    "Encargado del Tratamiento",
    "es la persona natural o jurídica, pública o privada, que realiza el Tratamiento de Datos Personales por cuenta del Responsable y bajo sus instrucciones. La Sociedad actúa en esta calidad únicamente respecto de los Datos Personales que un Cliente Corporativo carga, procesa o guarda en la Plataforma en relación con sus programas de seguros (ej. datos de tomadores o terceros en las pólizas).",
  ],
  [
    "Finalidad",
    "es el propósito específico, legítimo y comunicado previa o simultáneamente al Titular para el cual la Sociedad tratará sus Datos Personales.",
  ],
  [
    "Plataforma",
    "es la plataforma tecnológica de software como servicio (SaaS) operada por la Sociedad, accesible a través de https://prisma-latam.com e infraestructuras asociadas, destinada a la administración centralizada de programas de seguros.",
  ],
  [
    "Reclamo",
    "es la solicitud formulada por el Titular para corregir, actualizar o suprimir sus Datos Personales, o para alegar el presunto incumplimiento de cualquiera de los deberes contenidos en la ley.",
  ],
  [
    "Responsable del Tratamiento",
    "es la persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros decide sobre la Base de Datos y/o el Tratamiento de los Datos Personales. La Sociedad es Responsable de tus Datos Personales cuando los recolecta directamente para su propia operación comercial, administrativa y de soporte; mientras que respecto a la información cargada por un Cliente en la Plataforma, dicho Cliente es el único Responsable del Tratamiento.",
  ],
  [
    "Requisito de Procedibilidad",
    "es el paso previo y obligatorio que debes cumplir (consistente en presentar una Consulta o Reclamo directo ante el Responsable o Encargado) antes de poder interponer una queja o denuncia ante la Superintendencia de Industria y Comercio (SIC).",
  ],
  [
    "Subencargado",
    "es aquel proveedor tecnológico externo contratado por la Sociedad (como Encargado) para ejecutar parte de los servicios de alojamiento, infraestructura, autenticación o extracción de datos por cuenta del Responsable, garantizando estándares equivalentes de seguridad y confidencialidad (ej. Netlify, Cloudflare, Anthropic/Claude, Clerk, etc.).",
  ],
  ["Titular", "es la persona natural cuyos Datos Personales sean objeto de Tratamiento."],
  [
    "Tratamiento",
    "es cualquier operación o conjunto de operaciones sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación, análisis, procesamiento, transmisión, transferencia, actualización, corrección, bloqueo o supresión. El Tratamiento puede ser nacional (dentro de Colombia) o internacional (fuera de Colombia).",
  ],
  [
    "Transmisión",
    "es la comunicación o entrega de Datos Personales a un Encargado del Tratamiento (dentro o fuera de Colombia) para que realice el Tratamiento por cuenta y bajo las instrucciones del Responsable.",
  ],
  [
    "Transferencia",
    "es el envío o entrega de Datos Personales a un tercero (dentro o fuera de Colombia) que actuará como un Responsable autónomo, decidiendo sobre los fines y medios del Tratamiento.",
  ],
  [
    "Usuario Autorizado",
    "es el empleado, colaborador, representante o usuario que el Cliente Corporativo habilita y le asigna una credencial para acceder y operar su espacio en la Plataforma SaaS.",
  ],
];

const PRINCIPIOS: [string, string][] = [
  [
    "Principio de Legalidad",
    "El Tratamiento de Datos Personales es una actividad reglada que debe sujetarse a lo establecido en la Ley 1581 de 2012, el Decreto 1074 de 2015 y en las demás disposiciones que las desarrollen, modifiquen o adicionen.",
  ],
  [
    "Principio de Finalidad",
    "El Tratamiento obedece a una finalidad legítima de acuerdo con la Constitución y la Ley, la cual es informada de manera previa y clara al Titular.",
  ],
  [
    "Principio de Necesidad y Razonabilidad",
    "Los Datos Personales solicitados por la Sociedad serán estrictamente aquellos necesarios y pertinentes para el cumplimiento de las finalidades informadas al Titular.",
  ],
  [
    "Principio de Temporalidad",
    "Los Datos Personales se conservarán únicamente durante el tiempo necesario para alcanzar la finalidad para la cual fueron recolectados, o durante los plazos legal o contractualmente exigibles.",
  ],
  [
    "Principio de Libertad",
    "El Tratamiento solo puede ejercerse con el consentimiento previo, expreso e informado del Titular. Los datos no podrán ser obtenidos o divulgados sin autorización previa, o en ausencia de mandato legal o judicial que reemplace el consentimiento.",
  ],
  [
    "Principio de Veracidad o Calidad",
    "La información sujeta a Tratamiento debe ser cierta, completa, exacta, actualizada, comprobable y comprensible. La Sociedad se abstendrá de tratar datos parciales, incompletos, fraccionados o que induzcan a error.",
  ],
  [
    "Principio de Transparencia",
    "Se garantiza el derecho del Titular a obtener de la Sociedad, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan en nuestras Bases de Datos.",
  ],
  [
    "Principio de Acceso y Circulación Restringida",
    "El Tratamiento se sujeta a los límites que se derivan de la naturaleza de los Datos Personales y de las disposiciones legales. Los datos no públicos no estarán disponibles en Internet u otros medios de divulgación masiva, salvo que el acceso sea técnicamente controlable para ofrecer un conocimiento restringido solo a los Titulares o terceros autorizados.",
  ],
  [
    "Principio de Seguridad",
    "La información sujeta a Tratamiento se manejará con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.",
  ],
  [
    "Principio de Confidencialidad",
    "Todas las personas que intervengan en el Tratamiento de Datos Personales que no tengan la naturaleza de públicos, están obligadas a garantizar la reserva de la información, inclusive después de finalizada la relación con la Sociedad.",
  ],
  [
    "Principio de No Discriminación",
    "La Sociedad no utilizará los Datos Personales recaudados para realizar actos de discriminación o exclusión injustificada de los Titulares.",
  ],
  [
    "Principio de Responsabilidad Demostrada (Accountability)",
    "La Sociedad adoptará medidas de responsabilidad demostrada, apropiadas, efectivas y verificables para garantizar el cumplimiento normativo de la protección de datos personales ante la autoridad de control.",
  ],
];

const PROVEEDORES: [string, string][] = [
  [
    "Netlify",
    "Infraestructura y alojamiento en la nube para la operación de la aplicación web y Plataforma SaaS (servidores ubicados en la Región Este de Estados Unidos / Ohio).",
  ],
  [
    "Neon",
    "Proveedor de base de datos relacional para el almacenamiento de campos estructurados, datos de pólizas y tableros de control (servidores ubicados en West Virginia, EE. UU.).",
  ],
  [
    "Cloudflare",
    "Servicio de red y almacenamiento en la nube (cloud storage) utilizado para guardar las copias digitales cifradas de los archivos PDF cargados por los usuarios.",
  ],
  [
    "Claude / Anthropic",
    "Proveedor de procesamiento de lenguaje natural e Inteligencia Artificial utilizado exclusivamente para la lectura técnica y extracción automatizada de texto desde las pólizas cargadas.",
  ],
  [
    "Clerk",
    "Servicio especializado para la gestión de usuarios, creación de cuentas de administrador, invitaciones, autenticación cifrada y control de sesiones seguras.",
  ],
  [
    "Resend",
    "Plataforma técnica utilizada para la gestión y envío transaccional de correos electrónicos operativos (notificaciones de cuenta, soporte e invitaciones; servidores en Virginia, EE. UU.).",
  ],
  [
    "GitHub",
    "Repositorios de código fuente y herramientas de desarrollo bajo estrictos controles de acceso técnico y credenciales cifradas.",
  ],
  [
    "Notion / Correo Corporativo",
    "Herramientas internas utilizadas para la gestión administrativa de proyectos, documentación y atención de soporte al cliente (ej. fpardo@prisma-latam.com).",
  ],
];

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Encabezado */}
        <section className="relative overflow-hidden bg-ink text-white">
          <HexWatermark className="-right-24 -top-24 h-[380px] w-[380px]" />
          <HexWatermark className="-bottom-40 -left-32 h-[320px] w-[320px]" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-20">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-cyan-brand">
              PRISMA LATAM S.A.S.
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[0.06em] sm:text-4xl">
              Política de Privacidad y Tratamiento de Datos Personales
            </h1>
            <p className="mt-5 text-sm text-slate-300">
              NIT 902.112.529-7 · Bogotá D.C., Colombia · Vigente a partir del 5 de
              octubre de 2026
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[240px_1fr]">
          {/* Índice */}
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
            <nav aria-label="Contenido de la Política">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-brand">
                Contenido
              </p>
              <ol className="mt-4 space-y-1.5 text-sm">
                {INDICE.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-slate-600 transition-colors hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-3xl leading-relaxed text-slate-700">
            <div className="space-y-4">
              <p>
                PRISMA LATAM S.A.S., sociedad comercial identificada con NIT.
                902.112.529-7, con domicilio principal en Bogotá D.C., Colombia (en
                adelante, la “Sociedad” o “Prisma”), es una compañía respetuosa de los
                datos personales que le suministran sus actuales y potenciales clientes
                corporativos, usuarios autorizados de su plataforma de software como
                servicio (SaaS), trabajadores, candidatos, proveedores, aliados y demás
                interesados en los servicios de la Sociedad. En cumplimiento de la
                normativa colombiana de protección de datos, ha implementado esta
                Política de Tratamiento de Datos Personales (en adelante, la
                “Política”), donde te contamos qué datos personales tratamos, para qué
                los tratamos, las calidades en las que intervenimos, cuáles son tus
                derechos como Titular y los mecanismos con los que cuentas para
                ejercerlos.
              </p>
              <p>
                La utilización del sitio web, la Plataforma SaaS de la Sociedad y/o la
                aceptación expresa e inequívoca de los Términos y Condiciones y de esta
                Política, implican que aceptas que tratemos tus datos personales de
                acuerdo con lo establecido en este documento.
              </p>
            </div>

            <Seccion id="identificacion" title="1. Identificación y presentación">
              <p>
                PRISMA LATAM S.A.S. es una empresa de tecnología que ofrece una
                plataforma de software como servicio (SaaS) para la centralización,
                organización y administración de información relacionada con programas y
                pólizas de seguros de empresas medianas y grandes. Prisma presta
                servicios estrictamente tecnológicos de gestión de información. Prisma no
                es una compañía aseguradora, ni corredor, agencia o intermediario de
                seguros, y no ofrece ni sustituye asesoría sobre contratación, cobertura,
                determinación de primas, suscripción, tramitación de reclamaciones o
                decisiones de aseguramiento.
              </p>
              <p>
                Esta Política explica, en lenguaje claro y accesible, qué datos
                personales trata Prisma, de dónde provienen, con qué finalidades se
                utilizan, en qué calidad interviene la Sociedad (como Responsable o como
                Encargado del Tratamiento), con quién se comparten, cómo se protegen, por
                cuánto tiempo se conservan y cómo pueden ejercerse los derechos de los
                Titulares. Asimismo, establece las reglas aplicables a la información
                tratada por cuenta de los clientes corporativos que utilizan la
                Plataforma.
              </p>
              <p>
                Esta Política se aplica a la página web (https://prisma-latam.com), los
                formularios de registro, la Plataforma SaaS, los canales de soporte
                técnico y comercial, y a cualquier otra actividad de Prisma que involucre
                el Tratamiento de datos personales. Comprende tanto los tratamientos
                realizados por medios automatizados y digitales como aquellos que
                eventualmente se realicen en medios físicos. Si una nueva funcionalidad o
                servicio supone finalidades o categorías de datos distintas a las
                reguladas en este documento, Prisma actualizará esta Política y, cuando
                corresponda, obtendrá la autorización previa del Titular antes de iniciar
                dicho Tratamiento.
              </p>
              <p>
                El marco normativo aplicable incluye el artículo 15 de la Constitución
                Política de Colombia, la Ley Estatutaria 1581 de 2012, el Decreto Único
                Reglamentario 1074 de 2015 (que incorporó el Decreto 1377 de 2013), y las
                demás normas, circulares e instrucciones aplicables expedidas por la
                Superintendencia de Industria y Comercio (SIC) de Colombia, en sus
                versiones vigentes.
              </p>
            </Seccion>

            <Pregunta>¿Cómo puedes entender mejor esta Política?</Pregunta>
            <Seccion id="definiciones" title="2. Definiciones">
              <p>
                Para que puedas comprender con total claridad el alcance de esta
                Política, te explicamos el significado de los términos clave utilizados a
                lo largo del documento. Salvo que el contexto exija algo distinto, los
                términos definidos en singular incluyen el plural y viceversa.
              </p>
              <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200">
                {DEFINICIONES.map(([term, def]) => (
                  <div key={term} className="px-5 py-4">
                    <dt className="font-semibold text-ink">“{term}”</dt>
                    <dd className="mt-1 text-sm">{def}</dd>
                  </div>
                ))}
              </dl>
              <p>
                Las definiciones legales contenidas en la Ley 1581 de 2012 y en el
                Decreto 1074 de 2015 prevalecerán en caso de diferencia con estas
                descripciones explicativas.
              </p>
            </Seccion>

            <Seccion id="principios" title="3. Principios del Tratamiento de Datos Personales">
              <p>
                El Tratamiento de Datos Personales realizado por PRISMA LATAM S.A.S. se
                sujetará estrictamente a los principios contenidos en el artículo 4° de
                la Ley 1581 de 2012 y sus normas reglamentarias, los cuales constituyen
                las reglas de obligatorio cumplimiento para la Sociedad:
              </p>
              <Lista>
                {PRINCIPIOS.map(([label, text]) => (
                  <Item key={label} label={label}>
                    {text}
                  </Item>
                ))}
              </Lista>
            </Seccion>

            <Pregunta>
              ¿Cuándo recolectamos tus Datos Personales y qué Datos Personales
              recolectamos?
            </Pregunta>
            <Seccion id="recoleccion" title="4. Recolección de Datos">
              <p>La Sociedad recolecta Datos Personales de los Titulares en los siguientes casos:</p>
              <Lista>
                <Item>
                  Cuando un Cliente Corporativo contrata los Servicios SaaS de la
                  Sociedad y designa representantes, administradores o contactos para la
                  gestión de la cuenta y la relación comercial.
                </Item>
                <Item>
                  Cuando un Usuario Autorizado crea su cuenta, inicia sesión o interactúa
                  con la Plataforma SaaS (autenticación, gestión de cuentas, configuración
                  de perfiles y soporte técnico).
                </Item>
                <Item>
                  Cuando un Usuario Autorizado de un Cliente Corporativo carga, almacena o
                  procesa documentos y pólizas de seguros en la Plataforma mediante la
                  función de arrastrar y soltar (drag and drop).
                </Item>
                <Item>
                  Cuando un aliado o proveedor nos transfiere o suministra Datos Personales
                  de Titulares en el marco de una relación comercial o de servicios.
                </Item>
                <Item>
                  Cuando los Titulares brindan Datos Personales de forma voluntaria, por
                  ejemplo, al diligenciar formularios en el sitio web
                  (https://prisma-latam.com), solicitar una demostración (demo),
                  suscribirse a nuestros boletines informativos o contactarnos por
                  nuestros canales digitales y de soporte.
                </Item>
                <Item>
                  Cuando los Titulares están interesados en formar parte del equipo de la
                  Sociedad y envían su hoja de vida o se someten a un proceso de
                  selección.
                </Item>
                <Item>
                  Cuando vas a celebrar un contrato de cualquier tipo con la Sociedad, por
                  ejemplo, laboral, de prestación de servicios, de alianza comercial o de
                  proveeduría.
                </Item>
              </Lista>
            </Seccion>

            <Seccion id="informacion-recolectada" title="5. Información Recolectada">
              <p>
                La Sociedad podrá pedirte o recolectar, salvo las excepciones
                relacionadas con datos sensibles o datos de niños, niñas y adolescentes,
                los datos que sean estrictamente necesarios para cumplir la finalidad del
                servicio, los cuales se detallan a continuación:
              </p>
              <Lista>
                <Item label="Datos que recolectamos de todos los Titulares">
                  Nombre y apellidos, correo electrónico (principalmente corporativo),
                  teléfono de contacto, y otros Datos Personales estrictamente necesarios
                  para finalidades específicas informadas al Titular, según la relación o
                  servicio correspondiente.
                </Item>
                <Item label="Datos que recolectamos de los colaboradores, excolaboradores y candidatos de la Sociedad">
                  Adicional a los datos mencionados en “datos que recolectamos de todos
                  los Titulares”, recolectaremos cargo, género, tipo y clase de contrato,
                  estado del contrato, salario, conceptos y valores de pago, auxilio de
                  transporte o de conectividad, primas y demás prestaciones, fecha de
                  pago, aportes a salud y pensión, datos de salud derivados de los
                  exámenes médicos ocupacionales, hoja de vida, información del proceso de
                  selección, y datos de familiares cuando el colaborador los presenta como
                  beneficiarios de prestaciones sociales.
                </Item>
                <Item label="Datos que recolectamos de nuestros Clientes corporativos y sus representantes, administradores y contactos">
                  Adicional a los datos mencionados en “datos que recolectamos de todos
                  los Titulares”, recolectaremos RUT y NIT del Cliente para efectos de
                  facturación y contratación, cargo, empresa, área, documentos de
                  identificación del representante legal, información de la cuenta y de la
                  relación comercial. (Para los usuarios operativos de la Plataforma, solo
                  se solicitará nombre y correo electrónico corporativo; no se exigirán por
                  defecto teléfonos personales ni documentos de identidad).
                </Item>
                <Item label="Datos que recolectamos de los Usuarios Autorizados de la Plataforma">
                  Nombre, correo electrónico corporativo, credenciales cifradas o
                  mecanismos equivalentes de autenticación y registros técnicos básicos de
                  uso (tales como fecha y hora de último ingreso, eventos de
                  autenticación, organización asignada y permisos).
                </Item>
                <Item label="Datos que recolectamos de nuestros proveedores y sus contactos">
                  Adicional a los datos mencionados en “datos que recolectamos de todos
                  los Titulares”, recolectaremos información tributaria, legal y bancaria
                  necesaria para la relación de proveeduría y pagos.
                </Item>
                <Item label="Datos que recolectamos, como Encargados, contenidos en los documentos y pólizas de los Clientes">
                  Los que el Cliente Corporativo o sus Usuarios Autorizados carguen,
                  almacenen o procesen en la Plataforma sobre sus programas de seguros.
                  Esto incluye: datos de identificación o contacto de tomadores,
                  asegurados, beneficiarios o terceros que figuren en las pólizas (nombre,
                  razón social, CC/NIT, correo o dirección que consten en el archivo);
                  datos técnicos del seguro (número de póliza, ramo general, vigencias,
                  amparos, deducibles, primas, valores asegurados y comisiones); y los
                  campos extraídos mediante la herramienta de inteligencia artificial
                  (Claude de Anthropic) para visualización en el dashboard de la
                  organización.
                </Item>
              </Lista>

              <Sub>Datos de carácter sensible y su tratamiento</Sub>
              <p>
                La Sociedad trata Datos Sensibles únicamente en escenarios específicos y
                acotados:
              </p>
              <Lista>
                <Item label="Como Responsable">
                  Trata datos de salud de sus colaboradores derivados de los exámenes
                  médicos ocupacionales, en el marco del Sistema de Gestión de Seguridad y
                  Salud en el Trabajo (SG-SST). Cuando solicite Datos Sensibles, informará
                  el carácter facultativo de su suministro y la finalidad concreta, y
                  obtendrá Autorización explícita cuando sea legalmente exigible, salvo
                  excepción legal.
                </Item>
                <Item label="Como Encargada">
                  La Plataforma SaaS está diseñada para la gestión de ramos de seguros
                  generales (daños, responsabilidad civil, autos, cumplimiento, etc.) y no
                  está destinada a gestionar pólizas de vida ni de salud individual. Sin
                  embargo, si un documento cargado por un Cliente llega a incorporar de
                  forma incidental información sensible de un tercero, corresponderá a
                  dicho Cliente, en su calidad de Responsable, cumplir con los deberes de
                  información y obtener la Autorización explícita correspondiente. La
                  Sociedad únicamente tratará dicha información conforme a las
                  instrucciones documentadas de dicho Cliente y bajo estrictas medidas de
                  seguridad digital.
                </Item>
              </Lista>
              <p>
                Fuera de estos escenarios, la Sociedad no recolecta directamente datos
                biométricos, de afiliación sindical, de orientación política o religiosa.
              </p>

              <Sub>Datos personales relacionados con menores de edad</Sub>
              <p>
                Los Servicios de la Sociedad están dirigidos exclusivamente al mercado B2B
                corporativo y a personas mayores de edad. La Sociedad no recolecta
                directamente Datos Personales de niños, niñas o adolescentes. Si en un
                documento o póliza cargada por un Cliente Corporativo llegara a figurar un
                menor de edad (por ejemplo, como beneficiario en un ramo de seguro
                general), corresponderá al Cliente Corporativo, como Responsable,
                garantizar que el Tratamiento responda al interés superior del menor y
                contar con la autorización legal de sus representantes. La Sociedad
                tratará dichos datos en estricta calidad de Encargado y bajo las
                finalidades exclusivas del servicio contratado.
              </p>
            </Seccion>

            <Pregunta>¿Para qué recolectamos tus Datos Personales?</Pregunta>
            <Seccion id="finalidad" title="6. Generalidades de la Finalidad">
              <p>
                PRISMA LATAM S.A.S. realizará el Tratamiento de los Datos Personales de
                acuerdo con las condiciones establecidas en esta Política y la
                legislación colombiana aplicable. En general, la Sociedad recolectará,
                almacenará, organizará, usará, circulará, transmitirá y transferirá los
                Datos Personales según el grupo de Titulares y el rol que desempeñe (como
                Responsable o Encargado del Tratamiento), conforme a las siguientes
                finalidades:
              </p>

              <Sub>6.1. Finalidades comunes a todos los Titulares</Sub>
              <Lista>
                <Item>Cumplir con el objeto social de la Sociedad y prestar los servicios contratados.</Item>
                <Item>
                  Conservar y administrar la información relativa a las relaciones
                  laborales, comerciales, contractuales o de servicios con los Titulares.
                </Item>
                <Item>
                  Dar cumplimiento a las obligaciones legales, tributarias, contables,
                  comerciales y regulatorias aplicables a la Sociedad.
                </Item>
                <Item>
                  Controlar y preservar la seguridad digital, de la información, de las
                  personas y de los activos tecnológicos de la Sociedad.
                </Item>
                <Item>
                  Atender Consultas, peticiones, solicitudes, PQRS y Reclamos formulados
                  por los Titulares o sus representantes autorizados.
                </Item>
                <Item>
                  Contactar al Titular a través de correo electrónico, llamadas, mensajes
                  directos o herramientas digitales para fines operacionales,
                  informativos, contractuales y de soporte.
                </Item>
                <Item>
                  Compartir información con autoridades judiciales, administrativas o
                  regulatorias cuando exista una orden legal o un requerimiento formal en
                  el ejercicio de sus funciones.
                </Item>
              </Lista>

              <Sub>
                6.2. Finalidades para las cuales tratamos los Datos Personales de los
                colaboradores, excolaboradores y candidatos de la Sociedad
              </Sub>
              <p>Adicional a las finalidades comunes, estos datos se tratarán para:</p>
              <Lista>
                <Item>Evaluar y desarrollar procesos de selección y vinculación laboral o de contratación.</Item>
                <Item>
                  Administrar las relaciones laborales, contratos de trabajo y pago de
                  nómina, prestaciones sociales y auxilios.
                </Item>
                <Item>
                  Realizar los aportes correspondientes al Sistema General de Seguridad
                  Social (salud, pensión, riesgos laborales) y fondos de pensiones o
                  cesantías.
                </Item>
                <Item>
                  Proteger la salud de los colaboradores en el marco del Sistema de
                  Gestión de Seguridad y Salud en el Trabajo (SG-SST) y el manejo de los
                  exámenes médicos ocupacionales.
                </Item>
              </Lista>

              <Sub>
                6.3. Finalidades para las cuales tratamos los Datos Personales de nuestros
                Clientes corporativos y sus representantes, administradores y contactos
              </Sub>
              <p>Adicional a las finalidades comunes, tratamos estos datos como Responsable para:</p>
              <Lista>
                <Item>Gestionar la relación comercial, contractual y precontractual con el Cliente Corporativo.</Item>
                <Item>
                  Habilitar, configurar y administrar las cuentas de organización y las
                  credenciales de acceso de los Usuarios Autorizados en la Plataforma SaaS
                  (vía Clerk).
                </Item>
                <Item>
                  Gestionar la facturación empresarial, el cobro de la suscripción y el
                  recaudo de cartera.
                </Item>
                <Item>
                  Prestar soporte técnico especializado, resolver errores de la Plataforma
                  y atender requerimientos de la cuenta.
                </Item>
                <Item>
                  Enviar comunicaciones administrativas u operativas relacionadas con
                  cambios técnicos, actualizaciones del software, mantenimientos
                  programados o avisos de seguridad.
                </Item>
              </Lista>

              <Sub>
                6.4. Finalidades para las cuales tratamos los Datos Personales de nuestros
                proveedores y sus contactos
              </Sub>
              <p>Adicional a las finalidades comunes, estos datos se tratarán para:</p>
              <Lista>
                <Item>
                  Evaluar, seleccionar, contratar y administrar la relación comercial con
                  el proveedor o contratista.
                </Item>
                <Item>
                  Gestionar órdenes de compra o de servicio, efectuar pagos y gestionar
                  certificados tributarios y retenciones.
                </Item>
              </Lista>

              <Sub>
                6.5. Finalidades para las cuales tratamos, como ENCARGADOS, los Datos
                Personales contenidos en las pólizas y documentos de nuestros Clientes
              </Sub>
              <p>
                Respecto a la información contenida en los documentos (PDFs de pólizas)
                que los Clientes Corporativos o sus Usuarios Autorizados cargan en la
                Plataforma, Prisma actúa de forma exclusiva como Encargado del
                Tratamiento. En esta calidad, las finalidades se limitan estrictamente a
                lo pactado contractualmente y a las instrucciones documentadas del
                Cliente:
              </p>
              <Lista>
                <Item>
                  Recibir y alojar temporal o permanentemente las copias de los archivos
                  PDF en servidores seguros en la nube (Cloudflare).
                </Item>
                <Item>
                  Procesar y leer los documentos mediante herramientas automatizadas de
                  inteligencia artificial (Claude de Anthropic) con el único fin de
                  extraer y estructurar los campos clave de la póliza (ej. número de
                  póliza, aseguradora, ramo general, vigencias, primas, deducibles,
                  comisiones y amparos).
                </Item>
                <Item>
                  Presentar los campos extraídos en pantalla al Usuario Autorizado para su
                  verificación, revisión y confirmación antes de ser consolidados en la
                  base de datos (Neon).
                </Item>
                <Item>
                  Organizar y proyectar los datos confirmados dentro de los tableros de
                  control (dashboards) y reportes de Costo Total del Riesgo (TCOR) de la
                  organización del Cliente.
                </Item>
                <Item>
                  Permitir la búsqueda, consulta, filtrado, descarga y exportación de las
                  bases de datos estructuradas en formatos tipo Excel para uso interno del
                  Cliente.
                </Item>
                <Item>
                  Prestar soporte técnico operativo respecto a la visualización de los
                  datos o errores de lectura de archivos.
                </Item>
                <Item>
                  Ejecutar instrucciones de rectificación, devolución, exportación o
                  supresión definitiva de los documentos y campos extraídos al momento de
                  finalizar la relación contractual con el Cliente.
                </Item>
              </Lista>
              <Nota>
                (Garantía de Uso Limitado: Prisma NUNCA consolidará o cruzará la
                información entre distintos Clientes, ni utilizará el contenido de las
                pólizas cargadas para enviar publicidad a terceros, comercializar bases de
                datos, elaborar perfiles comerciales de personas o entrenar modelos
                propios de inteligencia artificial).
              </Nota>

              <Sub>
                6.6. Finalidades para las cuales tratamos los datos de suscriptores y
                prospectos de nuestras comunicaciones
              </Sub>
              <Lista>
                <Item>
                  Enviar boletines informativos (newsletters), novedades de la Plataforma,
                  noticias del sector o comunicaciones comerciales y de mercadeo, siempre
                  que contemos con la Autorización previa, expresa e informada del
                  Titular.
                </Item>
                <Item>
                  En cada envío o comunicación comercial, Prisma incluirá siempre un
                  enlace o mecanismo sencillo e inmediato de un solo clic para que el
                  Titular pueda cancelar su suscripción o revocar su autorización en
                  cualquier momento.
                </Item>
              </Lista>

              <Sub>6.7. Inteligencia Artificial y decisiones automatizadas</Sub>
              <p>
                La Plataforma SaaS de la Sociedad utiliza algoritmos de Inteligencia
                Artificial (Claude de Anthropic) exclusivamente como una herramienta
                técnica auxiliar para la lectura de texto y extracción de campos
                estructurados desde los archivos PDF cargados por el Cliente.
              </p>
              <Lista>
                <Item label="Revisión Humana Requerida">
                  La extracción no genera un registro automático e irrevocable; el Usuario
                  Autorizado del Cliente debe revisar y validar la información en
                  pantalla antes de confirmarla y guardarla en la base de datos de la
                  Plataforma.
                </Item>
                <Item label="Ausencia de Efectos Jurídicos Automatizados">
                  Las funciones de Inteligencia Artificial empleadas por Prisma NO
                  producen decisiones automatizadas que afecten jurídicamente a los
                  Titulares, ni realizan perfilamientos de conducta, ni evalúan riesgos o
                  coberturas personales. La Plataforma no sustituye la lectura de la
                  póliza de origen ni la asesoría legal o técnica de intermediarios y
                  aseguradoras.
                </Item>
              </Lista>
            </Seccion>

            <Seccion id="transmision" title="7. Transmisión y Transferencia de Datos Personales">
              <p>
                Cada operación de Tratamiento se realizará conforme a su naturaleza y al
                rol que desempeñe la Sociedad en cada caso (como Responsable o como
                Encargada). La Sociedad podrá realizar operaciones de Transmisión y
                Transferencia nacional o internacional de Datos Personales conforme a las
                reglas fijadas por la Ley 1581 de 2012 y el Decreto 1074 de 2015.
              </p>

              <Sub>7.1. Diferencia entre Transmisión y Transferencia</Sub>
              <Lista>
                <Item label="Transmisión">
                  Se configura cuando la Sociedad (o el Cliente Corporativo) entrega o
                  comunica Datos Personales a un tercero que actúa en calidad de Encargado
                  del Tratamiento (o Subencargado), para que este procese o almacene la
                  información por cuenta y bajo las instrucciones documentadas del
                  Responsable.
                </Item>
                <Item label="Transferencia">
                  Se configura cuando la Sociedad entrega o comunica Datos Personales a un
                  tercero que actuará como un Responsable independiente, decidiendo de
                  forma autónoma sobre los fines y medios del Tratamiento de dicha
                  información.
                </Item>
              </Lista>

              <Sub>7.2. Proveedores de Infraestructura Tecnológica y Subencargados</Sub>
              <p>
                Para la prestación de sus Servicios SaaS, soporte, administración y
                operación de la Plataforma, la Sociedad se apoya en proveedores de
                infraestructura tecnológica en la nube, servicios de autenticación,
                alojamiento, bases de datos e Inteligencia Artificial. Dichos proveedores
                actúan en calidad de Encargados o Subencargados del Tratamiento y sus
                servidores o centros de procesamiento de datos se encuentran ubicados
                principalmente en los Estados Unidos de América y otras jurisdicciones
                internacionales.
              </p>
              <p>
                El mapa de proveedores tecnológicos autorizados de la Sociedad comprende
                los siguientes servicios principales:
              </p>
              <dl className="grid gap-3 sm:grid-cols-2">
                {PROVEEDORES.map(([name, desc]) => (
                  <div key={name} className="rounded-xl border border-slate-200 p-5">
                    <dt className="font-semibold text-ink">{name}</dt>
                    <dd className="mt-1 text-sm">{desc}</dd>
                  </div>
                ))}
              </dl>

              <Sub>7.3. Garantías en las Transmisiones Internacionales</Sub>
              <p>
                Cuando la Sociedad o un Cliente Corporativo transmitan Datos Personales a
                un Encargado o Subencargado ubicado fuera del territorio colombiano (como
                los proveedores de infraestructura indicados en el numeral anterior), la
                operación se amparará en un Contrato de Transmisión de Datos Personales
                (o DPA - Data Processing Agreement), o en la adhesión a términos
                contractuales de procesamiento que exijan al destinatario el cumplimiento
                de las siguientes salvaguardas:
              </p>
              <Lista>
                <Item>
                  Tratar la información únicamente conforme a las instrucciones
                  documentadas del Responsable y para las finalidades exclusivas del
                  servicio contratado.
                </Item>
                <Item>
                  Implementar y mantener medidas de seguridad técnicas, humanas y
                  administrativas necesarias para proteger la información contra pérdida,
                  alteración o acceso no autorizado.
                </Item>
                <Item>
                  Mantener estricta confidencialidad sobre los datos personales
                  procesados, inclusive después de finalizada la prestación del servicio.
                </Item>
                <Item>
                  Abstenerse de utilizar la información o los archivos procesados para
                  fines propios, venta de datos o entrenamiento no autorizado de modelos
                  comerciales de Inteligencia Artificial.
                </Item>
                <Item>
                  Suprimir o devolver los Datos Personales una vez finalizado el encargo o
                  cuando sea requerido por la Sociedad o el Cliente.
                </Item>
              </Lista>
              <p>
                Conforme al marco reglamentario vigente en Colombia (Decreto 1074 de
                2015), las transmisiones internacionales respaldadas en un contrato de
                transmisión entre Responsable y Encargado no requieren una autorización
                previa o adicional por parte del Titular, sin perjuicio del deber de
                informar de esta condición en la presente Política y en los Avisos de
                Privacidad respectivos.
              </p>

              <Sub>7.4. Reglas sobre Transferencia Internacional de Datos</Sub>
              <p>
                La Sociedad NO vende, alquila ni comercializa Datos Personales con
                terceros. La Transferencia Internacional de Datos Personales a un tercero
                que actúe como Responsable autónomo solo se realizará hacia países que
                proporcionen un nivel adecuado de protección de datos conforme a las
                declaraciones o estándares fijados por la Superintendencia de Industria y
                Comercio (SIC), o cuando concurra alguna de las excepciones previstas en
                el artículo 26 de la Ley 1581 de 2012 (tales como autorización explícita
                del Titular, cumplimiento de una obligación contractual, o requerimiento
                judicial o legal).
              </p>

              <Sub>7.5. Comunicaciones a Autoridades Competentes</Sub>
              <p>
                La Sociedad podrá comunicar información o Datos Personales de los
                Titulares a autoridades judiciales, administrativas o de control cuando
                exista un mandato legal, una orden judicial formal o un requerimiento
                expreso en ejercicio de sus funciones legales. En dichos casos, la
                Sociedad entregará únicamente la información estrictamente necesaria para
                atender el requerimiento y velará por la reserva y confidencialidad de la
                actuación.
              </p>
            </Seccion>

            <Pregunta>
              ¿Qué sucede con la autorización que nos das para tratar tus Datos
              Sensibles o si vamos a usar tus Datos Personales para otra Finalidad?
            </Pregunta>
            <Seccion id="datos-sensibles" title="8. Autorización para el Tratamiento de Datos Sensibles.">
              <p>
                La Sociedad tratará tus Datos Personales únicamente para las finalidades
                informadas y autorizadas previamente por ti o por la ley. En caso de que
                la Sociedad pretenda utilizar tus Datos Personales para nuevos usos o
                finalidades sustancialmente distintas o incompatibles con las comunicadas
                inicialmente, se aplicará el siguiente procedimiento:
              </p>
              <Lista>
                <Item label="Notificación Previa">
                  Publicaremos la versión actualizada de esta Política en nuestro sitio
                  web (https://prisma-latam.com) y en la Plataforma SaaS, e informaremos a
                  los Titulares mediante correo electrónico o avisos visibles en el
                  sistema antes de implementar la nueva finalidad.
                </Item>
                <Item label="Solicitud de Nueva Autorización">
                  Si la nueva finalidad exige legalmente tu consentimiento, solicitaremos
                  tu nueva Autorización previa y explícita por medios electrónicos o
                  digitales habilitados.
                </Item>
                <Item label="Derecho a la Revocatoria y Supresión">
                  En caso de que no estés de acuerdo con los nuevos usos o finalidades
                  propuestas, podrás revocar la Autorización otorgada y solicitar la
                  supresión de tus Datos Personales de nuestras Bases de Datos, siempre
                  que no exista un deber legal, tributario, contable o contractual que
                  obligue a la Sociedad a conservar la información.
                </Item>
              </Lista>
              <Nota>
                (Garantía de Transparencia: La simple actualización o publicación de una
                nueva versión de esta Política no constituye ni se interpretará por sí
                sola como una autorización automática para dar uso secundario o no
                previsto a los datos personales de los Titulares).
              </Nota>
            </Seccion>

            <Seccion id="nuevos-usos" title="9. Autorización para nuevos usos o finalidades.">
              <p>
                La Sociedad tratará tus Datos Personales únicamente para las finalidades
                informadas y autorizadas previamente por ti, por tu organización o por
                las excepciones contempladas en la ley. En caso de que la Sociedad
                pretenda utilizar tus Datos Personales para nuevos usos o finalidades
                sustancialmente distintas, adicionales o incompatibles con las
                comunicadas inicialmente en esta Política, se aplicará el siguiente
                procedimiento:
              </p>
              <Lista>
                <Item label="Notificación Previa">
                  Publicaremos la versión actualizada de esta Política en nuestro sitio
                  web (https://prisma-latam.com) y en la Plataforma SaaS, e informaremos a
                  los Titulares mediante correo electrónico dirigido a la dirección
                  registrada o mediante avisos de pantalla visibles en la aplicación antes
                  de implementar el nuevo tratamiento.
                </Item>
                <Item label="Solicitud de Nueva Autorización">
                  Si la nueva finalidad exige legalmente tu consentimiento (por ejemplo,
                  usos con fines publicitarios o analíticas no conexas con la prestación
                  del servicio contratado), solicitaremos tu nueva Autorización previa,
                  explícita e informada a través de mecanismos digitales diferenciados
                  (casillas de verificación o botones de aceptación electrónica).
                </Item>
                <Item label="Derecho a la Revocatoria y Supresión">
                  En caso de que no estés de acuerdo con los nuevos usos o finalidades
                  propuestas, podrás revocar la Autorización otorgada para dicha finalidad
                  opcional y/o solicitar la supresión de tus Datos Personales de nuestras
                  Bases de Datos, siempre y cuando no exista un deber legal, tributario,
                  contable o contractual que obligue a la Sociedad a conservar la
                  información.
                </Item>
              </Lista>
              <Nota>
                (Garantía de Transparencia: La simple actualización o publicación de una
                nueva versión de esta Política no constituye ni se interpretará por sí
                sola como una autorización automática para dar uso secundario, comercial
                o no previsto a los datos personales ni a las pólizas cargadas en la
                Plataforma).
              </Nota>
            </Seccion>

            <Pregunta>¿Qué es el Aviso de Privacidad y para qué lo usamos?</Pregunta>
            <Seccion id="aviso" title="10. Aviso de Privacidad.">
              <p>
                Mediante el Aviso de Privacidad que la Sociedad dispondrá en el sitio web
                (https://prisma-latam.com), en las pantallas de registro e inicio de
                sesión de la Plataforma SaaS, en formularios digitales o de forma física,
                te informaremos sobre la existencia de esta Política, sus características
                esenciales y las condiciones bajo las cuales se dará Tratamiento a tus
                Datos Personales.
              </p>
              <p>
                Este Aviso de Privacidad contendrá, como mínimo, la siguiente información
                de conformidad con la ley:
              </p>
              <Lista>
                <Item>
                  La Razón Social, NIT, domicilio y datos formales de contacto de la
                  Sociedad como Responsable (PRISMA LATAM S.A.S., NIT 902.112.529-7,
                  correo: fpardo@prisma-latam.com).
                </Item>
                <Item>
                  El tipo de Tratamiento al cual serán sometidos tus Datos Personales y las
                  Finalidades principales del mismo.
                </Item>
                <Item>
                  Los derechos que te asisten como Titular (acceso, actualización,
                  rectificación, supresión y revocatoria) y los canales dispuestos por la
                  Sociedad para consultarlos y ejercerlos.
                </Item>
                <Item>
                  El enlace directo o mecanismo habilitado para consultar el texto
                  completo de esta Política de Tratamiento de Datos Personales.
                </Item>
              </Lista>
            </Seccion>

            <Pregunta>¿Qué son las “Cookies” y para qué las usamos?</Pregunta>
            <Seccion id="cookies" title="11. Cookies y tecnologías similares">
              <p>
                Una cookie o tecnología de rastreo es un archivo inofensivo de texto o
                fragmento de código que se descarga en tu navegador o dispositivo al
                acceder a determinadas páginas web o aplicaciones informáticas. Permiten,
                entre otras cosas, guardar preferencias de usuario, recordar credenciales
                de sesión activa, garantizar la seguridad de la navegación y generar
                métricas sobre la usabilidad del software.
              </p>
              <p>
                Respecto al sitio web y a la Plataforma SaaS de PRISMA LATAM S.A.S., el
                uso de cookies y herramientas de rastreo se rige por las siguientes
                reglas:
              </p>

              <Sub>11.1. Estado actual del sitio y la Plataforma</Sub>
              <p>
                Conforme a la configuración técnica informada por la Sociedad, el sitio
                web público y la Plataforma SaaS de Prisma NO utilizan actualmente
                cookies publicitarias, de perfilamiento comercial ni herramientas de
                analítica web de terceros de rastreo masivo (tales como Google Analytics o
                píxeles de redes sociales).
              </p>

              <Sub>11.2. Cookies estrictamente necesarias y de funcionamiento</Sub>
              <p>
                La Plataforma SaaS podrá utilizar cookies técnicas estrictamente
                necesarias y almacenamiento local (Local Storage / Session Storage)
                asociados a los proveedores de autenticación e infraestructura (Clerk,
                Netlify, Cloudflare). Dichas cookies tienen la única finalidad de:
              </p>
              <Lista>
                <Item>Mantener tu sesión abierta y segura mientras utilizas la Plataforma SaaS.</Item>
                <Item>Validar tus permisos de acceso como Usuario Autorizado del Cliente Corporativo.</Item>
                <Item>
                  Proteger la aplicación contra accesos automatizados maliciosos o ataques
                  de denegación de servicio (Anti-bot / DDoS).
                </Item>
              </Lista>
              <p>
                Dadas sus finalidades puramente operativas e indispensables para la
                prestación del servicio técnico solicitado, estas cookies se consideran
                técnicas y no requieren autorización previa del Titular.
              </p>

              <Sub>11.3. Gestión y desactivación de cookies</Sub>
              <p>
                Puedes configurar tu navegador web en cualquier momento para bloquear,
                rechazar o eliminar la descarga de cookies. Sin embargo, ten en cuenta que
                si desactivas o bloqueas las cookies técnicas necesarias en la Plataforma
                SaaS de Prisma, es posible que el sistema no pueda autenticar tu cuenta,
                no mantenga tu sesión activa o no funcione adecuadamente.
              </p>
              <p>
                En caso de que en el futuro la Sociedad decida implementar cookies de
                analítica, comportamiento o mercadeo no indispensables para el
                funcionamiento del software, informará previamente a los usuarios
                mediante un banner de configuración o aviso de privacidad y habilitará los
                controles correspondientes para obtener tu autorización explícita antes
                de su activación.
              </p>
            </Seccion>

            <Pregunta>
              ¿Qué estás manifestando cuando aceptas esta Política o autorizas el
              tratamiento de tus Datos Personales?
            </Pregunta>
            <Seccion id="manifestaciones" title="12. Manifestaciones de los Titulares de los Datos Personales.">
              <p>
                Al momento de suministrar voluntariamente tus Datos Personales, crear una
                cuenta o registrarte en la Plataforma, diligenciar formularios web y/o
                conceder la Autorización respectiva, manifiestas que:
              </p>
              <Lista>
                <Item label="Voluntariedad y Autorización">
                  Suministras tus Datos Personales de manera libre, voluntaria, informada
                  y nos autorizas de forma expresa e inequívoca para recolectarlos,
                  almacenarlos, utilizarlos y realizar cualquier otro Tratamiento sobre
                  ellos de conformidad con lo establecido en esta Política.
                </Item>
                <Item label="Claridad sobre Datos Sensibles">
                  Fuiste informado y comprendes qué son los Datos Sensibles, y que, en
                  caso de que en alguna interacción se soliciten datos de esta naturaleza,
                  tienes el derecho absoluto de no entregarlos ni responder las preguntas
                  correspondientes.
                </Item>
                <Item label="Conocimiento de las Finalidades">
                  Fuiste informado claramente acerca de las finalidades específicas y
                  legítimas para las cuales se utilizarán tus Datos Personales, las cuales
                  se encuentran descritas en el numeral 6 de esta Política.
                </Item>
                <Item label="Seguridad e Infraestructura">
                  Fuiste informado y comprendes las medidas de seguridad técnicas,
                  humanas y administrativas que la Sociedad implementa para proteger tus
                  datos, incluyendo el uso de proveedores de infraestructura y
                  almacenamiento en la nube (Netlify, Neon, Cloudflare, Clerk, Resend,
                  Claude/Anthropic).
                </Item>
                <Item label="Conocimiento de Derechos y Canales">
                  Fuiste informado acerca de tus derechos en materia de protección de
                  datos (conocer, actualizar, rectificar, suprimir tu información o
                  revocar la autorización) y los mecanismos para ejercerlos enviando una
                  solicitud a <Mail email={DATA_PROTECTION_EMAIL} />.
                </Item>
                <Item label="Declaración del Cliente Corporativo / Carga de Pólizas">
                  Cuando actúas en representación de un Cliente Corporativo o como Usuario
                  Autorizado y procedes a cargar archivos, documentos o pólizas de seguros
                  en la Plataforma, manifiestas y garantizas que tu organización cuenta
                  con la debida habilitación legal o Autorización de los Titulares cuyos
                  datos figuren en dichos documentos (tomadores, asegurados o
                  beneficiarios) para transmitir o permitir el procesamiento de su
                  información por parte de la Sociedad en su calidad de Encargada.
                </Item>
              </Lista>
            </Seccion>

            <Pregunta>¿Durante cuánto tiempo trataremos tus datos?</Pregunta>
            <Seccion id="conservacion" title="13. Término de la Autorización y conservación de tus Datos Personales.">
              <p>
                Trataremos y conservaremos tus Datos Personales desde el momento en que
                nos otorgas la Autorización o inicias la interacción con la Sociedad,
                hasta que se cumpla la Finalidad para la cual fueron recolectados, o
                durante los plazos mínimos y máximos exigidos por la legislación
                colombiana aplicable (incluyendo obligaciones comerciales, tributarias,
                contables, contractuales y probatorias).
              </p>
              <p>
                Los criterios específicos de conservación según la categoría de Titulares
                y el rol de la Sociedad son los siguientes:
              </p>

              <Sub>13.1. Datos de Clientes Corporativos, Usuarios Autorizados y Cuentas SaaS</Sub>
              <Lista>
                <Item label="Durante la relación contractual">
                  Los datos de cuenta, credenciales de acceso (Clerk), identificación de
                  representantes y contactos comerciales se conservarán mientras la
                  suscripción a la Plataforma SaaS se mantenga activa y vigente.
                </Item>
                <Item label="Posterior a la terminación">
                  Finalizada la relación comercial o cancelada la cuenta, la Sociedad
                  conservará la información básica de contacto y facturación durante los
                  plazos de prescripción de las acciones legales, comerciales, contables y
                  tributarias fijados por la ley colombiana (hasta diez [10] años para
                  soportes contables y fiscales).
                </Item>
              </Lista>

              <Sub>
                13.2. Datos contenidos en las pólizas y documentos cargados en la
                Plataforma (Calidad de Encargado)
              </Sub>
              <Lista>
                <Item label="Durante el servicio">
                  Los archivos PDF (alojados en Cloudflare) y los campos extraídos
                  (almacenados en Neon) se conservarán únicamente durante la vigencia del
                  contrato SaaS suscrito con el Cliente Corporativo y conforme a sus
                  instrucciones documentadas (DPA).
                </Item>
                <Item label="Al finalizar el contrato">
                  A la terminación de los Servicios, la Sociedad otorgará un plazo
                  razonable al Cliente Corporativo para la exportación y descarga de sus
                  bases estructuradas en Excel. Vencido dicho plazo, la Sociedad procederá
                  a la devolución, supresión segura o borrado de todos los documentos y
                  campos procesados en sus servidores y en los de sus Subencargados, salvo
                  que exista una obligación legal o judicial que exija su retención
                  restringida.
                </Item>
              </Lista>

              <Sub>13.3. Datos de Colaboradores, Excolaboradores y Candidatos</Sub>
              <Lista>
                <Item label="Colaboradores y contratistas">
                  Los datos se conservarán durante el término de la relación laboral o
                  contractual y por el plazo de prescripción de las acciones laborales
                  (mínimo tres [3] años contados desde la liquidación, o los plazos
                  aplicables para efectos pensionales).
                </Item>
                <Item label="Candidatos no seleccionados">
                  Se conservarán por un período máximo de doce (12) meses para futuros
                  procesos de selección, salvo que el Titular solicite su supresión
                  previa.
                </Item>
              </Lista>

              <Sub>13.4. Datos de Proveedores y Aliados</Sub>
              <p>
                Se conservarán durante la vigencia de la relación comercial y por los
                plazos de prescripción legales, comerciales y tributarios aplicables a
                los contratos corporativos.
              </p>

              <Sub>13.5. Datos de Suscriptores y Prospectos</Sub>
              <p>
                Se conservarán hasta que el Titular revoque su autorización, solicite su
                supresión o cancele su suscripción a través del enlace dispuesto para tal
                fin en cada comunicación.
              </p>

              <Sub>13.6. Supresión Segura, Anonimización y Copias de Seguridad</Sub>
              <p>
                Vencidos los términos de conservación descritos o aprobada una solicitud
                de supresión que resulte procedente, la Sociedad ejecutará los
                procedimientos de borrado seguro o anonimización irreversible de la
                información en sus sistemas activos. En caso de existir copias de
                seguridad (backups) de infraestructura, los datos permanecerán protegidos
                bajo estrictos controles de cifrado, no serán objeto de tratamiento
                operativo y serán eliminados definitivamente al completarse el ciclo
                técnico de rotación de respaldos.
              </p>
            </Seccion>

            <Pregunta>¿Cómo cuidamos tus Datos Personales?</Pregunta>
            <Seccion id="seguridad" title="14. Medidas de seguridad y gestión de incidentes.">
              <p>
                La Sociedad, de forma diligente, implementa y mantiene medidas de
                protección humanas, administrativas y técnicas que razonablemente están a
                su alcance para impedir la adulteración, pérdida, consulta, uso o acceso
                no autorizado o fraudulento de tus Datos Personales.
              </p>

              <Sub>14.1. Medidas de seguridad técnicas y de infraestructura</Sub>
              <p>
                En el marco de la Plataforma SaaS, la Sociedad adopta los siguientes
                controles de seguridad digital:
              </p>
              <Lista>
                <Item label="Cifrado en Transmisión">
                  Todas las comunicaciones y conexiones entre los usuarios, el sitio web y
                  la Plataforma se realizan mediante protocolos de transmisión cifrada
                  segura (TLS/HTTPS).
                </Item>
                <Item label="Cifrado en Reposo">
                  Cifrado de la base de datos de campos estructurados (Neon) y del
                  almacenamiento digital de archivos PDF (Cloudflare).
                </Item>
                <Item label="Autenticación Fuerte y MFA">
                  Gestión de identidad y credenciales cifradas mediante Clerk, soportando
                  mecanismos de autenticación de múltiples factores (MFA).
                </Item>
                <Item label="Segregación de Roles y Permisos">
                  Control de acceso basado en perfiles diferenciados por organización
                  (Administrador y Miembro). El Usuario Administrador asignado por el
                  Cliente Corporativo es el único facultado para crear y gestionar otros
                  miembros dentro de su espacio de organización.
                </Item>
                <Item label="Control de Acceso de Soporte">
                  Acceso técnico restringido al personal de desarrollo y soporte de la
                  Sociedad exclusivamente cuando sea indispensable para la atención de
                  incidentes o mantenimiento del backend.
                </Item>
              </Lista>

              <Sub>14.2. Protocolo de gestión de incidentes de seguridad</Sub>
              <p>
                Ante la detección de un evento o sospecha de incidente de seguridad (tales
                como accesos no autorizados, compromiso de credenciales, vulnerabilidades
                técnicas o filtración de información), la Sociedad aplicará el siguiente
                procedimiento:
              </p>
              <Lista>
                <Item label="Escalamiento e Investigación">
                  El evento se escalará de inmediato al Responsable Técnico /
                  Representante Legal de la Sociedad, quien coordinará las acciones de
                  contención, aislamiento y mitigación del riesgo.
                </Item>
                <Item label="Análisis y Registro">
                  Se realizará el análisis de causa raíz, la documentación de evidencias y
                  la implementación de las acciones correctivas inmediatas.
                </Item>
                <Item label="Notificación a Clientes (Calidad de Encargado)">
                  Cuando el incidente involucre información tratada por cuenta de un
                  Cliente Corporativo (pólizas o documentos), la Sociedad notificará al
                  Cliente sin demora injustificada a través de los canales de contacto
                  autorizados (DPA), entregando la información disponible para facilitar
                  su evaluación como Responsable.
                </Item>
                <Item label="Reporte a Autoridades y Titulares">
                  Cuando corresponda conforme a la ley o cuando la Sociedad actúe como
                  Responsable, se informará a la Superintendencia de Industria y Comercio
                  (SIC) en las oportunidades previas o posteriores fijadas por la
                  normativa colombiana (artículos 17, literal n, y 18, literal k, de la
                  Ley 1581 de 2012), y se comunicará el incidente a los Titulares
                  afectados cuando proceda.
                </Item>
              </Lista>
            </Seccion>

            <Seccion id="supresion" title="15. Política para la eliminación y/o supresión de Datos Personales.">
              <p>
                Una vez cumplida la Finalidad del Tratamiento de tus Datos Personales, o
                cuando lo solicites directamente a la Sociedad mediante el ejercicio de
                tus derechos, y siempre que no exista un deber u obligación contractual,
                contable, tributaria o legal que lo impida, la Sociedad procederá a la
                supresión o eliminación segura de tus Datos Personales de sus Bases de
                Datos.
              </p>

              <Sub>15.1. Reglas de procedencia para la supresión</Sub>
              <Lista>
                <Item label="Solicitud de parte">
                  Procede cuando solicites revocar la Autorización o suprimir tus datos de
                  cuentas personales, listas de correo comercial o registros comerciales
                  donde la Sociedad actúa como Responsable, sin que exista un contrato
                  activo o norma legal que exija la conservación.
                </Item>
                <Item label="Cumplimiento de la Finalidad">
                  Los datos serán eliminados de oficio cuando la Sociedad identifique que
                  la finalidad para la cual fueron recolectados se ha cumplido a cabalidad
                  o ha expirado la relación precontractual o comercial.
                </Item>
                <Item label="Improcedencia legal de la supresión">
                  La supresión no procederá en los casos en que la conservación de la
                  información sea necesaria para dar cumplimiento a una obligación legal,
                  fiscal o contable (por ejemplo, facturas y soportes de pago exigidos por
                  la DIAN durante el término de prescripción), o para la defensa jurídica
                  de la Sociedad ante reclamaciones judiciales o administrativas.
                </Item>
              </Lista>

              <Sub>15.2. Supresión de documentos de pólizas (Calidad de Encargado)</Sub>
              <p>
                Respecto a las pólizas y documentos cargados en la Plataforma por un
                Cliente Corporativo, la eliminación procederá previa instrucción directa
                del Cliente Responsable o al finalizar el contrato de servicios SaaS.
                Cumplido el plazo de gracia otorgado para la exportación de información en
                Excel, la Sociedad eliminará de manera definitiva los archivos PDF
                almacenados en Cloudflare y los registros estructurados de la base de
                datos Neon.
              </p>

              <Sub>15.3. Procedimiento técnico y canal</Sub>
              <p>
                Para solicitar la supresión o eliminación de tus datos, el Titular o la
                empresa cliente deberá enviar una solicitud formal al correo electrónico
                oficial: <Mail email={DATA_PROTECTION_EMAIL} />. La Sociedad responderá y
                tramitará la solicitud dentro de los plazos legales previstos en el{" "}
                <a href="#procedimiento" className="text-teal-brand underline-offset-4 hover:underline">
                  numeral 19
                </a>{" "}
                de esta Política.
              </p>
            </Seccion>

            <Seccion id="confidencialidad" title="16. Confidencialidad y anonimización de los Datos Personales.">
              <p>
                PRISMA LATAM S.A.S. es estrictamente respetuosa de los derechos
                fundamentales a la intimidad, la libertad, la honra y el buen nombre de
                los Titulares. Por ello, el Tratamiento de la información se rige bajo los
                siguientes compromisos de confidencialidad y anonimización:
              </p>

              <Sub>16.1. Deber de Confidencialidad y Reserva</Sub>
              <Lista>
                <Item label="Uso Exclusivo e Instruido">
                  La Sociedad se abstendrá de divulgar, publicar, ceder, transferir o
                  comercializar la información confidencial de los Titulares y de los
                  Clientes Corporativos para fines distintos a los autorizados en esta
                  Política o a los instruidos en el contrato de servicios SaaS.
                </Item>
                <Item label="Compromiso del Personal y Terceros">
                  Todas las personas que intervengan en el Tratamiento de Datos Personales
                  que no tengan la naturaleza de públicos (colaboradores, desarrolladores,
                  asesores y proveedores de infraestructura) están obligadas a garantizar
                  la reserva y confidencialidad de la información. Esta obligación
                  subsistirá aún después de finalizada la relación laboral, contractual o
                  de prestación de servicios con la Sociedad.
                </Item>
              </Lista>

              <Sub>16.2. Segregación y Privacidad de Datos B2B</Sub>
              <Lista>
                <Item>
                  La Sociedad implementa controles de segregación lógica en la Plataforma
                  SaaS para garantizar que la información de los programas de seguros y
                  usuarios de un Cliente Corporativo no sea visible ni accesible para
                  usuarios pertenecientes a otras organizaciones.
                </Item>
                <Item>
                  Los archivos fuente (PDFs) y los datos extraídos de las pólizas cargadas
                  por un Cliente NUNCA se utilizarán para realizar análisis comparativos
                  identificables entre empresas, ni para enviar ofertas comerciales
                  dirigidas a los asegurados de dichos programas.
                </Item>
              </Lista>

              <Sub>16.3. Anonimización y Seudonimización</Sub>
              <Lista>
                <Item>
                  Cuando la Sociedad requiera procesar métricas agregadas de uso,
                  desempeño técnico del software o estadísticas generales de operación,
                  realizará procedimientos de anonimización o seudonimización irreversible
                  de los Datos Personales.
                </Item>
                <Item>
                  Una vez anonimizada de forma que no sea técnicamente posible
                  reidentificar o asociar la información con una persona natural
                  determinada o determinable, la información dejará de tener el carácter
                  de Dato Personal y podrá ser utilizada para la mejora del producto.
                </Item>
                <Item>
                  Asimismo, la Sociedad procederá a la anonimización de tus Datos
                  Personales cuando lo solicites de manera justificada y la ley o el
                  contrato lo permitan.
                </Item>
              </Lista>
            </Seccion>

            <Seccion id="veracidad" title="17. Políticas de veracidad y calidad de la información.">
              <p>
                De conformidad con el principio de veracidad o calidad regulado en el
                artículo 4° de la Ley 1581 de 2012, la información sujeta a Tratamiento
                por parte de PRISMA LATAM S.A.S. debe ser cierta, completa, exacta,
                actualizada, comprobable y comprensible. La Sociedad se abstendrá de dar
                Tratamiento a Datos Personales parciales, incompletos, fraccionados o que
                induzcan a error.
              </p>
              <p>Para garantizar este principio en sus operaciones, se aplican las siguientes reglas:</p>

              <Sub>17.1. Veracidad en los Datos de Cuenta y Usuarios</Sub>
              <Lista>
                <Item>
                  La Sociedad tomará las medidas razonables para verificar y mantener
                  actualizada la información de contacto de sus Clientes Corporativos,
                  representantes legales y Usuarios Autorizados de la Plataforma.
                </Item>
                <Item>
                  El Titular o Usuario Autorizado se compromete a suministrar información
                  veraz durante el registro y a solicitar la actualización o rectificación
                  de sus datos cuando ocurra alguna modificación en los mismos.
                </Item>
              </Lista>

              <Sub>17.2. Calidad de la Información en Pólizas y Archivos (Calidad de Encargado)</Sub>
              <Lista>
                <Item label="Responsabilidad de la Fuente">
                  El Cliente Corporativo es el único responsable de la veracidad,
                  integridad, origen y calidad de los documentos (PDFs de pólizas) y datos
                  que carga o hace incorporar en la Plataforma SaaS.
                </Item>
                <Item label="Herramienta de Extracción Asistida">
                  La función de extracción automatizada de texto mediante Inteligencia
                  Artificial (Claude de Anthropic) constituye una herramienta tecnológica
                  auxiliar de apoyo. La información extraída debe ser revisada, verificada
                  y confirmada en pantalla por el Usuario Autorizado del Cliente antes de
                  su guardado definitivo en la base de datos (Neon).
                </Item>
                <Item label="No Certificación Legal">
                  La Plataforma facilita la organización técnica y la visualización de
                  datos, pero la Sociedad no certifica la validez legal de las pólizas, no
                  garantiza que la lectura automática esté libre de errores ni sustituye
                  la revisión del documento de origen.
                </Item>
              </Lista>

              <Sub>17.3. Corrección y Actualización de Registros</Sub>
              <Lista>
                <Item>
                  Si el Cliente Corporativo o un Usuario Autorizado identifica un error en
                  los campos estructurados de sus pólizas, podrá corregirlo directamente
                  mediante las herramientas de edición disponibles en la Plataforma o
                  solicitar asistencia al canal de soporte técnico.
                </Item>
                <Item>
                  Si el error proviene de una falla técnica del sistema, la Sociedad
                  adoptará las medidas correctivas oportunas sobre la aplicación para
                  garantizar la precisión de la información presentada en los tableros de
                  control (dashboards).
                </Item>
              </Lista>
            </Seccion>

            <Pregunta>¿Cuáles son tus derechos como Titular y cómo puedes ejercerlos?</Pregunta>
            <Seccion id="derechos" title="18. Derechos de los Titulares">
              <p>
                De conformidad con lo dispuesto en el artículo 8° de la Ley 1581 de 2012
                y el Decreto 1074 de 2015, tú como Titular de los Datos Personales tienes
                los siguientes derechos frente a PRISMA LATAM S.A.S.:
              </p>
              <Lista>
                <Item label="Derecho a Conocer, Actualizar y Rectificar">
                  Tienes derecho a conocer, acceder, actualizar y rectificar tus Datos
                  Personales en cualquier momento frente a la Sociedad. Este derecho se
                  podrá ejercer, entre otros, frente a datos parciales, inexactos,
                  incompletos, fraccionados, que induzcan a error, o aquellos cuyo
                  Tratamiento esté expresamente prohibido o no haya sido autorizado.
                </Item>
                <Item label="Derecho a Solicitar Prueba de la Autorización">
                  Tienes derecho a solicitar prueba de la Autorización otorgada a la
                  Sociedad para el Tratamiento de tus Datos Personales, salvo en los casos
                  en que la ley exceptúa expresamente dicho requisito (conforme al
                  artículo 10 de la Ley 1581 de 2012).
                </Item>
                <Item label="Derecho a ser Informado">
                  Tienes derecho a ser informado por la Sociedad, previa solicitud,
                  respecto del uso y las finalidades que se le han dado a tus Datos
                  Personales.
                </Item>
                <Item label="Derecho a Presentar Quejas ante la Autoridad de Control">
                  Puedes presentar quejas ante la Superintendencia de Industria y Comercio
                  (SIC) por infracciones a lo dispuesto en la normativa vigente de
                  protección de datos personales, una vez hayas agotado el trámite previo
                  de Consulta o Reclamo directo ante la Sociedad o ante el Cliente
                  Corporativo Responsable (Requisito de Procedibilidad).
                </Item>
                <Item label="Derecho a Revocar la Autorización y/o Solicitar la Supresión del Dato">
                  Puedes revocar la Autorización otorgada para el Tratamiento de tus Datos
                  Personales y/o solicitar su supresión de nuestras Bases de Datos cuando
                  en el Tratamiento no se respeten los principios, derechos y garantías
                  constitucionales y legales, o de manera libre y voluntaria cuando no
                  exista un deber legal, contable, tributario o contractual que impida su
                  eliminación o que obligue a la Sociedad a conservar la información.
                </Item>
                <Item label="Derecho a Abstenerse de Responder sobre Datos Sensibles o de Menores">
                  Tienes derecho a responder de manera totalmente facultativa y libre las
                  preguntas o requerimientos que versen sobre Datos Sensibles o sobre
                  datos de niños, niñas y adolescentes.
                </Item>
                <Item label="Derecho de Oposición y Opciones de Cancelación">
                  Puedes oponerte al Tratamiento de tus datos para finalidades específicas
                  opcionales (tales como el envío de boletines o comunicaciones
                  comerciales). En cada envío comercial, la Sociedad dispondrá de un
                  mecanismo sencillo de un solo clic para cancelar la suscripción de forma
                  inmediata.
                </Item>
                <Item label="Derecho de Acceso Gratuito">
                  Tienes derecho a acceder en forma gratuita a tus Datos Personales que
                  hayan sido objeto de Tratamiento por parte de la Sociedad, en las
                  condiciones fijadas por la reglamentación vigente.
                </Item>
              </Lista>
            </Seccion>

            <Seccion id="procedimiento" title="19. Procedimiento para ejercer tus derechos">
              <p>
                Para garantizar el pleno y efectivo ejercicio de tus derechos (conocer,
                actualizar, rectificar, suprimir información o revocar la autorización),
                PRISMA LATAM S.A.S. ha establecido el siguiente procedimiento
                transparente, accesible y gratuito, en cumplimiento de los artículos 14,
                15 y 16 de la Ley 1581 de 2012:
              </p>

              <Sub>19.1. Canales Oficiales de Atención</Sub>
              <p>
                El Titular, sus causahabientes, apoderados o representantes legales podrán
                presentar sus Consultas, Peticiones o Reclamos a través del siguiente
                canal oficial habilitado:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm">
                <ul className="space-y-2">
                  <Item label="Correo electrónico de Habeas Data / Protección de Datos">
                    <Mail email={DATA_PROTECTION_EMAIL} />
                  </Item>
                  <Item label="Dirección física de notificaciones">
                    Carrera 13 # 106-30, Interior 2, Apartamento 304, Bogotá D.C.,
                    Colombia
                  </Item>
                  <Item label="Teléfono de contacto">
                    <a href="tel:+573107855592" className="hover:text-ink">
                      (+57) 310 785 5592
                    </a>
                  </Item>
                </ul>
              </div>

              <Sub>19.2. Requisitos Mínimos de la Solicitud</Sub>
              <p>
                Para tramitar adecuadamente tu solicitud, la comunicación enviada por el
                canal oficial deberá contener como mínimo los siguientes datos:
              </p>
              <Lista>
                <Item>
                  Nombre completo e identificación del Titular (número de cédula o
                  documento de identidad).
                </Item>
                <Item>
                  Documentos que acrediten la identidad del solicitante o la calidad de su
                  representante o apoderado (fotocopia del documento de identidad o poder
                  según corresponda).
                </Item>
                <Item>
                  Descripción clara y precisa de los hechos que dan lugar a la petición y
                  de las pretensiones concretas (ej. solicitud de acceso, corrección de
                  correo, supresión de cuenta o revocatoria).
                </Item>
                <Item>
                  Indicación de la empresa cliente o relación comercial con la Sociedad,
                  en caso de conocerla.
                </Item>
                <Item>
                  Dirección física o correo electrónico donde deseas recibir la respuesta
                  a tu solicitud.
                </Item>
                <Item>Documentos o pruebas pertinentes que quieras hacer valer.</Item>
              </Lista>

              <Sub>19.3. Trámite de CONSULTAS (Conocer o Acceder a Datos)</Sub>
              <p>
                Cuando solicites conocer o acceder a la información personal que reposa
                sobre ti en nuestras Bases de Datos donde la Sociedad actúa como
                Responsable:
              </p>
              <Lista>
                <Item label="Plazo de respuesta ordinario">
                  La Sociedad dará respuesta en un término máximo de diez (10) días
                  hábiles contados a partir de la fecha de recibo de la solicitud
                  completa.
                </Item>
                <Item label="Prórroga extraordinaria">
                  Cuando no fuere posible atender la Consulta dentro de dicho término, la
                  Sociedad te informará los motivos de la demora antes de vencer el plazo
                  y señalará la fecha en que se responderá, la cual en ningún caso podrá
                  superar los cinco (5) días hábiles adicionales al vencimiento del primer
                  término.
                </Item>
              </Lista>

              <Sub>
                19.4. Trámite de RECLAMOS (Actualización, Rectificación, Supresión o
                Revocatoria)
              </Sub>
              <p>
                Cuando consideres que la información contenida en nuestras Bases de Datos
                debe ser corregida, actualizada o suprimida, o cuando adviertas un
                presunto incumplimiento de los deberes legales por parte de la Sociedad:
              </p>
              <Lista>
                <Item label="Incompleta">
                  Si el Reclamo resulta incompleto, la Sociedad te requerirá dentro de los
                  cinco (5) días hábiles siguientes a su recepción para que subsanes las
                  fallas. Transcurridos dos (2) meses desde la fecha del requerimiento sin
                  que presentes la información requerida, se entenderá que has desistido
                  del Reclamo.
                </Item>
                <Item label="Registro de Leyenda">
                  Una vez recibido el Reclamo completo, la Sociedad incluirá en la Base de
                  Datos respectiva la leyenda “Reclamo en trámite” y el motivo del mismo
                  en un término no mayor a dos (2) días hábiles, la cual se mantendrá
                  hasta que el Reclamo sea resuelto de fondo.
                </Item>
                <Item label="Plazo de respuesta ordinario">
                  El término máximo para atender el Reclamo será de quince (15) días
                  hábiles contados a partir del día siguiente a la fecha de su recibo
                  completo.
                </Item>
                <Item label="Prórroga extraordinaria">
                  Cuando no fuere posible resolver el Reclamo dentro de dicho término, la
                  Sociedad informará los motivos de la demora antes del vencimiento y la
                  fecha en que se atenderá, la cual no podrá superar los ocho (8) días
                  hábiles adicionales al vencimiento del primer término.
                </Item>
              </Lista>

              <Sub>
                19.5. Procedimiento sobre Datos Procesados por Cuenta de un Cliente
                Corporativo (Calidad de Encargado)
              </Sub>
              <p>
                Si la solicitud del Titular se refiere a Datos Personales contenidos en
                archivos (PDFs de pólizas) que un Cliente Corporativo ha cargado en la
                Plataforma SaaS:
              </p>
              <Lista>
                <Item>
                  La Sociedad no resolverá la solicitud de fondo de forma autónoma, dado
                  que el Responsable de decidir sobre dicha información es el Cliente
                  Corporativo.
                </Item>
                <Item>
                  La Sociedad traslada la solicitud formalmente al Cliente Corporativo
                  Responsable dentro de los dos (2) días hábiles siguientes a su
                  recepción, informándote de dicha remisión e indicándote los datos de
                  contacto del Cliente para el seguimiento de tu requerimiento.
                </Item>
                <Item>
                  La Sociedad colaborará activamente con el Cliente para ubicar,
                  restringir, exportar o rectificar el archivo o campo solicitado
                  conforme a sus instrucciones documentadas.
                </Item>
              </Lista>

              <Sub>19.6. Requisito de Procedibilidad ante la SIC</Sub>
              <p>
                De conformidad con el artículo 16 de la Ley 1581 de 2012, deberás agotar
                primero el trámite previo de Consulta o Reclamo directo ante la Sociedad
                (o ante el Cliente Corporativo Responsable según corresponda), antes de
                interponer cualquier queja o reclamación formal ante la Delegatura para
                la Protección de Datos Personales de la Superintendencia de Industria y
                Comercio (SIC).
              </p>
            </Seccion>

            <Pregunta>
              ¿Qué deberes tiene la Sociedad respecto del Tratamiento de tus Datos
              Personales?
            </Pregunta>
            <Seccion id="deberes" title="20. Deberes de la Sociedad.">
              <p>
                PRISMA LATAM S.A.S., en el desarrollo de su objeto social y la operación
                de su Plataforma SaaS, está plenamente comprometida con el cumplimiento de
                las obligaciones legales en materia de protección de datos personales.
                Dado que la Sociedad reúne simultáneamente las calidades de Responsable y
                de Encargada del Tratamiento (conforme al parágrafo del artículo 18 de la
                Ley 1581 de 2012), le son exigibles los deberes previstos en la ley para
                ambas condiciones, los cuales se detallan a continuación:
              </p>

              <Sub>20.1. Deberes de la Sociedad cuando actúa como RESPONSABLE</Sub>
              <p>
                Respecto de los Datos Personales de usuarios de la Plataforma, contactos
                comerciales, prospectos, colaboradores, contratistas y proveedores sobre
                los cuales la Sociedad decide sus fines y medios, le corresponde:
              </p>
              <Lista>
                <Item label="Garantía de Derechos">
                  Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del
                  derecho de Habeas Data y de los demás derechos reconocidos en esta
                  Política y en la ley.
                </Item>
                <Item label="Autorización y Conservación">
                  Solicitar y conservar, en las condiciones previstas en la ley, copia de
                  la respectiva Autorización otorgada por el Titular.
                </Item>
                <Item label="Deber de Información">
                  Informar debidamente al Titular sobre la finalidad de la recolección y
                  los derechos que le asisten en virtud de la Autorización otorgada.
                </Item>
                <Item label="Seguridad e Integridad">
                  Conservar la información bajo las condiciones de seguridad necesarias
                  para impedir su adulteración, pérdida, consulta, uso o acceso no
                  autorizado o fraudulento.
                </Item>
                <Item label="Veracidad y Calidad">
                  Garantizar que la información que se suministre a los Encargados del
                  Tratamiento sea veraz, completa, exacta, actualizada, comprobable y
                  comprensible.
                </Item>
                <Item label="Actualización Operativa">
                  Actualizar la información, comunicando de forma oportuna a los
                  Encargados del Tratamiento todas las novedades respecto de los datos que
                  previamente les haya suministrado y adoptar las demás medidas necesarias
                  para que la información se mantenga actualizada.
                </Item>
                <Item label="Rectificación">
                  Rectificar la información cuando sea incorrecta y comunicar lo
                  pertinente a los Encargados del Tratamiento.
                </Item>
                <Item label="Instrucciones a Encargados">
                  Suministrar a los Encargados del Tratamiento (proveedores de
                  infraestructura, almacenamiento y herramientas tecnológicas) únicamente
                  datos cuyo Tratamiento esté previamente autorizado conforme a la ley.
                </Item>
                <Item label="Exigencia de Seguridad">
                  Exigir a los Encargados del Tratamiento en todo momento el respeto a las
                  condiciones de seguridad y privacidad de la información del Titular.
                </Item>
                <Item label="Tramitación de PQRS">
                  Tramitar las Consultas y Reclamos formulados por los Titulares en los
                  términos y plazos señalados en la ley y en esta Política.
                </Item>
                <Item label="Procedimientos Internos">
                  Adoptar un manual interno de políticas y procedimientos para garantizar
                  el adecuado cumplimiento de la ley y, en especial, para la atención de
                  consultas y reclamos.
                </Item>
                <Item label="Inclusión de Leyenda">
                  Informar a los Encargados del Tratamiento cuando determinada información
                  se encuentre en discusión por parte del Titular, una vez se haya
                  presentado el reclamo y no se haya finalizado el trámite respectivo.
                </Item>
                <Item label="Información a Autoridades">
                  Informar a la autoridad de protección de datos (Superintendencia de
                  Industria y Comercio - SIC) cuando se presenten violaciones a los
                  códigos de seguridad y existan riesgos en la administración de la
                  información de los Titulares.
                </Item>
                <Item label="Instrucciones de la SIC">
                  Cumplir las instrucciones y requerimientos que imparta la
                  Superintendencia de Industria y Comercio.
                </Item>
              </Lista>

              <Sub>20.2. Deberes de la Sociedad cuando actúa como ENCARGADA</Sub>
              <p>
                Respecto de la información contenida en las pólizas, anexos y documentos
                que los Clientes Corporativos cargan y procesan en la Plataforma SaaS, la
                Sociedad cumplirá los siguientes deberes:
              </p>
              <Lista>
                <Item label="Garantía de Derechos en su Ámbito">
                  Garantizar al Titular el pleno y efectivo ejercicio del derecho de
                  Habeas Data dentro del alcance técnico y contractual de sus funciones.
                </Item>
                <Item label="Tratamiento Instruido">
                  Tratar los datos personales únicamente conforme a las instrucciones
                  documentadas del Cliente Corporativo Responsable, sin utilizarlos para
                  finalidades propias incompatibles o no autorizadas.
                </Item>
                <Item label="Seguridad">
                  Conservar la información bajo las condiciones de seguridad técnica y
                  digital necesarias para impedir su adulteración, pérdida, consulta, uso
                  o acceso no autorizado o fraudulento (utilizando conexiones TLS y
                  cifrado en reposo en Cloudflare y Neon).
                </Item>
                <Item label="Actualización por Reporte">
                  Realizar la actualización, rectificación o supresión de los datos dentro
                  de los cinco (5) días hábiles siguientes a su reporte por parte del
                  Cliente Corporativo Responsable.
                </Item>
                <Item label="Tránsito de Reclamaciones">
                  Trasladar al Cliente Corporativo Responsable las Consultas y Reclamos
                  formulados por los Titulares de las pólizas dentro de los dos (2) días
                  hábiles siguientes a su recepción.
                </Item>
                <Item label="Leyenda “Reclamo en Trámite”">
                  Registrar en la base de datos la leyenda “Reclamo en trámite” en la
                  forma en que se regula en la ley, cuando sea instruido por el
                  Responsable o por la autoridad.
                </Item>
                <Item label="Control de Accesos">
                  Permitir el acceso a la información únicamente a las personas que puedan
                  tener acceso a ella conforme a los perfiles y permisos asignados por el
                  Cliente.
                </Item>
                <Item label="Reporte de Incidentes">
                  Informar al Cliente Corporativo Responsable sobre cualquier incidente de
                  seguridad o vulnerabilidad que afecte la confidencialidad, integridad o
                  disponibilidad de sus datos personales.
                </Item>
                <Item label="Devolución o Supresión Final">
                  Eliminar o devolver los datos al Cliente Corporativo al finalizar la
                  prestación de los Servicios SaaS, de conformidad con lo pactado en el
                  contrato de transmisión de datos (DPA).
                </Item>
              </Lista>
            </Seccion>

            <Pregunta>¿Qué otra información necesitas conocer?</Pregunta>
            <Seccion id="otra-informacion" title="21. Otra información">
              <Sub>21.1. Canales Oficiales de Contacto</Sub>
              <p>
                Cualquier duda, Consulta, Petición, Solicitud de ejercicio de derechos
                ARCO o Reclamo relacionado con esta Política de Tratamiento de Datos
                Personales será recibida y tramitada a través del siguiente canal
                oficial:
              </p>
              <dl className="grid gap-x-6 gap-y-3 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm sm:grid-cols-[auto_1fr]">
                <dt className="font-semibold text-ink">Razón Social</dt>
                <dd>PRISMA LATAM S.A.S.</dd>
                <dt className="font-semibold text-ink">NIT</dt>
                <dd>902.112.529 - 7</dd>
                <dt className="font-semibold text-ink">Representante Legal</dt>
                <dd>Francis Daniel Pardo Rueda</dd>
                <dt className="font-semibold text-ink">
                  Correo Electrónico de Habeas Data / Protección de Datos
                </dt>
                <dd>
                  <Mail email={DATA_PROTECTION_EMAIL} />
                </dd>
                <dt className="font-semibold text-ink">Dirección Física de Notificaciones</dt>
                <dd>Carrera 13 # 106-30, Interior 2, Apartamento 304, Bogotá D.C., Colombia</dd>
                <dt className="font-semibold text-ink">Teléfono de Contacto</dt>
                <dd>
                  <a href="tel:+573107855592" className="hover:text-ink">
                    (+57) 310 785 5592
                  </a>
                </dd>
                <dt className="font-semibold text-ink">Sitio Web Oficial</dt>
                <dd>
                  <a
                    href="https://prisma-latam.com"
                    className="text-teal-brand underline-offset-4 hover:underline"
                  >
                    https://prisma-latam.com
                  </a>
                </dd>
              </dl>
              <p className="text-sm">
                (En cumplimiento de lo dispuesto en el artículo 12, literal d, de la Ley
                1581 de 2012, la Sociedad mantendrá habilitados estos canales para que los
                Titulares puedan ponerse en contacto formalmente con el Responsable del
                Tratamiento).
              </p>

              <Sub>21.2. Registro Nacional de Bases de Datos (RNBD)</Sub>
              <p>
                De conformidad con lo establecido en el Decreto 090 de 2018 (que modificó
                el Decreto 1074 de 2015), la obligación legal de inscribir las bases de
                datos en el Registro Nacional de Bases de Datos (RNBD) ante la
                Superintendencia de Industria y Comercio (SIC) aplica a las personas
                jurídicas del sector privado que cuenten con activos totales superiores a
                100.000 Unidades de Valor Tributario (UVT).
              </p>
              <Lista>
                <Item label="Estado Actual de la Sociedad">
                  A la fecha de expedición de esta Política, PRISMA LATAM S.A.S. no supera
                  el umbral de activos brutos fijado por el Decreto 090 de 2018, por lo que
                  sus bases de datos no se encuentran sujetas a la obligación de registro
                  en el RNBD.
                </Item>
                <Item label="Compromiso de Monitoreo">
                  La Sociedad monitoreará anualmente la evolución de sus activos totales al
                  cierre de cada ejercicio contable. En el evento en que sobrepase el
                  umbral legal aplicable, procederá a efectuar la inscripción de sus Bases
                  de Datos en el portal habilitado por la SIC dentro de los plazos
                  reglamentarios previstos por la norma.
                </Item>
              </Lista>

              <Sub>21.3. Articulación con los Contratos de Procesamiento de Datos (DPA)</Sub>
              <p>
                Para la relación con sus Clientes Corporativos, las reglas de Tratamiento,
                confidencialidad, límites de uso de la Inteligencia Artificial y
                protocolos de devolución o supresión de pólizas se complementan con las
                cláusulas fijadas en los Términos y Condiciones del Servicio SaaS y en el
                correspondiente Acuerdo de Procesamiento de Datos (DPA - Data Processing
                Agreement) suscrito entre PRISMA LATAM S.A.S. y el Cliente Corporativo. En
                caso de discrepancia entre esta Política y lo pactado en un DPA específico
                respecto de los datos procesados en calidad de Encargado, prevalecerán las
                condiciones estipuladas en el DPA en todo aquello que no contravenga las
                normas imperativas de la ley colombiana.
              </p>

              <Sub>21.4. Canal Especial de Reporte de Incidentes de Seguridad Digital</Sub>
              <p>
                Adicionalmente a los canales de Habeas Data, la Sociedad dispone del canal
                técnico <Mail email={CONTACT_EMAIL} /> para la recepción de reportes de
                seguridad, hallazgos de vulnerabilidades técnicas o alertas de posibles
                incidentes de información. Cualquier reporte será analizado de inmediato
                por el equipo directivo y técnico para la activación del Protocolo de
                Respuesta a Incidentes (numeral 14.2).
              </p>

              <Sub>21.5. Cambios y Modificaciones en la Política</Sub>
              <p>
                PRISMA LATAM S.A.S. se reserva el derecho de modificar o actualizar la
                presente Política en cualquier momento, como consecuencia de cambios
                legislativos o jurisprudenciales, novedades operativas, mejoras técnicas
                en la Plataforma SaaS, cambios en las finalidades o incorporación de
                nuevos proveedores e infraestructura tecnológica.
              </p>
              <Lista>
                <Item label="Comunicación Oportuna">
                  Cualquier cambio sustancial en esta Política (tales como modificaciones
                  en la identificación del Responsable, inclusión de nuevas finalidades,
                  cambios en canales de atención o transferencias/transmisiones a nuevos
                  países) te será comunicado oportunamente antes de su entrada en vigencia
                  mediante la publicación de la nueva versión en nuestro sitio web
                  (https://prisma-latam.com) y en la Plataforma SaaS, o a través de correo
                  electrónico dirigido a la dirección registrada.
                </Item>
                <Item label="Nuevas Autorizaciones">
                  Cuando los cambios impliquen nuevas finalidades que requieran legalmente
                  tu consentimiento, la Sociedad solicitará tu nueva Autorización previa y
                  explícita por medios electrónicos antes de iniciar el nuevo Tratamiento.
                </Item>
                <Item label="Periodicidad de Revisión">
                  Esta Política será revisada como mínimo una vez al año, o cada vez que
                  ocurran cambios sustanciales en el software o en el modelo de negocio de
                  la Sociedad.
                </Item>
              </Lista>

              <Sub>21.6. Vigencia de la Política y de las Bases de Datos</Sub>
              <Lista>
                <Item label="Entrada en Vigencia de la Política">
                  La presente Política rige y entra en vigencia a partir del 5 de octubre
                  de 2026.
                </Item>
                <Item label="Vigencia de las Bases de Datos">
                  Las Bases de Datos bajo la responsabilidad de la Sociedad se conservarán
                  y mantendrán activas durante el tiempo que sea razonable y necesario
                  para cumplir con las finalidades para las cuales fueron recolectados los
                  datos, durante la vigencia de las relaciones contractuales o comerciales
                  correspondientes, y durante los términos de conservación exigidos por
                  las normas contables, comerciales, tributarias y laborales aplicables en
                  Colombia.
                </Item>
              </Lista>
            </Seccion>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
