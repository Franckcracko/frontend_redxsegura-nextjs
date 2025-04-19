import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col h-[calc(100vh-450px)] items-center justify-center gap-4 ">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "red" })}>Red X&nbsp;</span>
        <span className={title()}>Segura&nbsp;</span>
        <br />
        <span className={title()}>
          Seguro de ingresos colaborativo con IA y Blockchain.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Una red financiera para trabajadores informales, con transparencia y
          apoyo comunitario.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Inicia Sesión
        </Link>
        <Link className={buttonStyles({ variant: "bordered", radius: "full" })}>
          Registrate
        </Link>
      </div>
    </section>
  );
}
