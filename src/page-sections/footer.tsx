import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-secondary shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            aria-label="Inicio"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo-codeluxe.webp"
              className="h-8 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:shadow-2xl hover:shadow-primary/50"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-txt">
              Codeluxe
            </span>
          </Link>
          <ul className="flex flex-wrap items-center [&>li>a]:p-2 md:[&>li>a]:p-0 gap-2 mb-6 text-sm text-secondary-txt sm:mb-0">
            <li>
              <Link
                href="/info"
                className="hover:underline me-4 md:me-6"
                aria-label="Sobre nosotros"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/terminos"
                className="hover:underline me-4 md:me-6"
                aria-label="Términos y condiciones"
              >
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link
                href="/propuesta"
                className="hover:underline"
                aria-label="Solicitá una propuesta"
              >
                Solicitá una propuesta
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-primary/10 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-secondary-txt sm:text-center ">
          © 2025{" "}
          <Link href="/" className="hover:underline" aria-label="Inicio">
            Codeluxe™
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
