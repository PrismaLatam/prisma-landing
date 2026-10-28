import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HexWatermark } from "@/components/HexPattern";
import { DATA_PROTECTION_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Aviso de Privacidad · PRISMA",
  description:
    "Aviso de Privacidad de PRISMA LATAM S.A.S., conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

function Seccion({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-10">
      <h2 className="text-2xl font-semibold tracking-[0.06em] text-ink">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Lista({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-teal-brand">{children}</ul>
  );
}

function Enlace({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium text-teal-brand underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

const FINALIDADES = [
  "Gestionar la relación comercial, contractual y precontractual con los clientes corporativos, incluida la facturación y el cobro del servicio.",
  "Habilitar, autenticar y administrar las cuentas de los usuarios autorizados en la plataforma y gestionar sus roles de administrador y miembro dentro de cada organización.",
  "Permitir la carga de pólizas y documentos, la extracción automatizada de sus campos mediante inteligencia artificial, su revisión y confirmación por el usuario autorizado, y su consulta en los tableros de control, en los reportes de costo total del riesgo (TCOR) y en las exportaciones a Excel.",
  "Gestionar los proyectos de renovación y suscripción de pólizas del cliente corporativo, incluidas las solicitudes de información que sus usuarios autorizados dirijan por correo electrónico a otras personas a través de la plataforma.",
  "Prestar soporte técnico y operativo, atender consultas, peticiones y reclamos, y proteger la seguridad de la plataforma.",
  "Enviar comunicaciones operativas sobre la cuenta y el servicio y, con autorización previa e independiente, boletines, novedades de la plataforma y comunicaciones comerciales.",
  "Adelantar procesos de selección y administrar las relaciones con colaboradores, contratistas y proveedores.",
  "Cumplir las obligaciones legales, contables, tributarias y regulatorias aplicables y atender los requerimientos de autoridades competentes.",
];

const DERECHOS: [string, React.ReactNode][] = [
  [
    "i",
    "Conocer, actualizar y rectificar sus datos personales frente a información parcial, inexacta, incompleta, fraccionada o que induzca a error.",
  ],
  ["ii", "Acceder en forma gratuita a los datos suministrados que hayan sido objeto de tratamiento."],
  ["iii", "Solicitar prueba de la autorización otorgada para el tratamiento de sus datos personales."],
  ["iv", "Ser informado, previa solicitud, respecto del uso que se ha dado a sus datos personales."],
  [
    "v",
    <>
      Presentar ante la Superintendencia de Industria y Comercio (
      <Enlace href="https://www.sic.gov.co">https://www.sic.gov.co</Enlace>) quejas por
      infracciones a la normatividad vigente, agotando previamente el trámite ante Prisma
      o ante el cliente corporativo, según corresponda.
    </>,
  ],
  [
    "vi",
    "Revocar la autorización y/o solicitar la supresión del dato, siempre que no exista un deber legal o contractual que impida eliminarlo.",
  ],
  [
    "vii",
    "Abstenerse de responder preguntas sobre datos sensibles o sobre datos de niños, niñas y adolescentes.",
  ],
];

export default function AvisoPrivacidad() {
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
              Aviso de Privacidad
            </h1>
            <p className="mt-5 text-sm text-slate-300">
              NIT 902.112.529-7 · Bogotá D.C., Colombia · Versión 1.0 · Vigente a partir
              del 16 de octubre de 2026
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-16">
          <article className="max-w-3xl leading-relaxed text-slate-700">
            <div className="space-y-4">
              <p>
                PRISMA LATAM S.A.S. (en adelante, “Prisma”), sociedad comercial
                identificada con NIT 902.112.529-7, con domicilio principal en Bogotá
                D.C., Colombia, que opera una plataforma de software como servicio (SaaS)
                para la centralización, organización y administración de la información
                de los programas y pólizas de seguros de empresas medianas y grandes, en
                cumplimiento de lo señalado por las normas de protección de datos
                personales, Ley 1581 de 2012 y Decreto Único Reglamentario 1074 de 2015, y
                demás normas aplicables, informa que en el desarrollo de su actividad
                tiene acceso a información personal a la que dará tratamiento en los
                términos del presente aviso.
              </p>
              <p>
                Prisma presta servicios estrictamente tecnológicos de gestión de
                información y no es una compañía aseguradora, ni corredor, agencia o
                intermediario de seguros. Trata datos personales en dos calidades: como
                Responsable del Tratamiento, respecto de los datos de los usuarios
                autorizados de la plataforma, de los representantes y contactos de sus
                clientes corporativos, de sus prospectos y suscriptores, y de sus
                proveedores, colaboradores y candidatos; y como Encargado del
                Tratamiento, respecto de los datos personales que los clientes
                corporativos y sus usuarios autorizados cargan o registran en la
                plataforma en relación con sus programas de seguros, como los de
                tomadores, asegurados, beneficiarios o terceros que figuren en las
                pólizas, que Prisma trata por cuenta y bajo las instrucciones del cliente
                corporativo, quien es el Responsable frente a ellos.
              </p>
            </div>

            <Seccion title="1. Tratamiento y finalidad.">
              <p>
                Prisma recolectará, almacenará, usará, circulará, transmitirá y suprimirá
                los datos personales con las siguientes finalidades principales:
              </p>
              <Lista>
                {FINALIDADES.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </Lista>
              <p>
                La plataforma utiliza inteligencia artificial (Claude, de Anthropic)
                únicamente como herramienta de apoyo para leer las pólizas cargadas y
                extraer sus campos. La información extraída debe ser revisada y
                confirmada por el usuario autorizado antes de guardarse, y la herramienta
                no adopta decisiones automatizadas que produzcan efectos jurídicos sobre
                los titulares. Prisma no utiliza el contenido de las pólizas para
                entrenar modelos propios de inteligencia artificial, no cruza información
                entre distintos clientes, no envía publicidad a los asegurados y no vende
                ni comercializa datos personales.
              </p>
              <p>
                La plataforma no está destinada a la gestión de pólizas de vida ni de
                salud, y Prisma no solicita a sus usuarios datos sensibles ni datos de
                niños, niñas y adolescentes. Si un documento cargado por un cliente
                corporativo llegara a contenerlos, corresponde a dicho cliente, como
                Responsable, contar con la autorización exigida por la ley.
              </p>
              <p>
                Para la prestación del servicio, Prisma se vale de encargados que prestan
                servicios de alojamiento, base de datos, almacenamiento de archivos,
                autenticación de usuarios, procesamiento de inteligencia artificial y
                envío de correos electrónicos, ubicados principalmente en Estados Unidos
                de América, conforme a la relación contenida en el{" "}
                <Enlace href="/politica-de-privacidad#transmision">
                  numeral 7.2 de la Política
                </Enlace>
                .
              </p>
            </Seccion>

            <Seccion title="2. Derechos del titular.">
              <p>
                Como titular de sus datos personales, conforme al artículo 8 de la Ley
                1581 de 2012, usted tiene derecho a:
              </p>
              <ul className="space-y-2">
                {DERECHOS.map(([n, texto]) => (
                  <li key={n} className="flex gap-2">
                    <span className="shrink-0 font-semibold text-teal-brand">({n})</span>
                    <span>{texto}</span>
                  </li>
                ))}
              </ul>
              <p>
                Tendrán carácter facultativo las respuestas que versen sobre datos
                sensibles o sobre datos de niños, niñas y adolescentes.
              </p>
            </Seccion>

            <Seccion title="3. Mecanismos para conocer la Política de Tratamiento.">
              <p>
                Si requiere mayor información para conocer nuestra Política de
                Privacidad y Tratamiento de Datos Personales y los cambios sustanciales
                que se produzcan en ella, consúltela en{" "}
                <Link
                  href="/politica-de-privacidad"
                  className="font-medium text-teal-brand underline-offset-4 hover:underline"
                >
                  https://prisma-latam.com/politica-de-privacidad
                </Link>
                .
              </p>
              <p>
                Si desea presentar una consulta o reclamo, o ejercer cualquiera de sus
                derechos como titular, puede comunicarse a través de los siguientes
                canales:
              </p>
              <Lista>
                <li>
                  Correo electrónico:{" "}
                  <Enlace href={`mailto:${DATA_PROTECTION_EMAIL}`}>
                    {DATA_PROTECTION_EMAIL}
                  </Enlace>
                </li>
                <li>
                  Teléfono: <Enlace href="tel:+573107855592">(+57) 310 785 5592</Enlace>
                </li>
                <li>
                  Dirección: Carrera 13 # 106-30, Interior 2, Apartamento 304, Bogotá
                  D.C.
                </li>
                <li>
                  Sitio web:{" "}
                  <Enlace href="https://prisma-latam.com">https://prisma-latam.com</Enlace>
                </li>
              </Lista>
              <p>
                Si sus datos personales fueron incorporados a la plataforma por un
                cliente corporativo, por ejemplo porque usted figura en una póliza o
                recibió una solicitud de información de uno de sus usuarios, puede
                dirigir sus solicitudes directamente a dicho cliente, en su calidad de
                Responsable del tratamiento. Si las presenta ante Prisma, esta las
                trasladará al cliente corporativo dentro de los dos (2) días hábiles
                siguientes a su recepción e informará de ello al titular.
              </p>
            </Seccion>

            <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
              Versión: 1.0 · Fecha de entrada en vigencia: 16 de octubre de 2026
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
