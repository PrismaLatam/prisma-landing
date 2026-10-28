import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT_EMAIL, SITE_URL, LINKEDIN_URL } from "@/lib/config";

export function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-20 border-t border-slate-100 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:items-end">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <Mail size={16} strokeWidth={1.6} aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
          <a
            href={`https://${SITE_URL}`}
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <Globe size={16} strokeWidth={1.6} aria-hidden="true" />
            {SITE_URL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PRISMA en LinkedIn"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 px-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 PRISMA. Todos los derechos reservados.</p>
        <div className="flex flex-col gap-2 sm:items-end">
          <Link
            href="/politica-de-privacidad"
            className="underline-offset-4 hover:text-ink hover:underline"
          >
            Política de privacidad y tratamiento de datos personales
          </Link>
          <Link
            href="/aviso-de-privacidad"
            className="underline-offset-4 hover:text-ink hover:underline"
          >
            Aviso de privacidad
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-xs leading-relaxed text-slate-400">
        PRISMA LATAM S.A.S., identificada con NIT 902.112.529-7, es Responsable
        del tratamiento de los datos personales de los usuarios de su
        plataforma y Encargado de los datos personales que sus clientes
        corporativos cargan en ella. Usamos tus datos para habilitar y
        administrar tu cuenta, prestarte el servicio y darte soporte. Puedes
        conocer, actualizar, rectificar o suprimir tus datos y revocar tu
        autorización escribiendo a{" "}
        <a
          href="mailto:datospersonales@prisma-latam.com"
          className="underline underline-offset-4 hover:text-ink"
        >
          datospersonales@prisma-latam.com
        </a>
        . Conoce nuestro{" "}
        <Link
          href="/aviso-de-privacidad"
          className="underline underline-offset-4 hover:text-ink"
        >
          Aviso de Privacidad
        </Link>{" "}
        y nuestra{" "}
        <Link
          href="/politica-de-privacidad"
          className="underline underline-offset-4 hover:text-ink"
        >
          Política de Tratamiento de Datos Personales
        </Link>
        .
      </p>
    </footer>
  );
}
