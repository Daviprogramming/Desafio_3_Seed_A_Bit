import Button from "../Button";
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-12 min-h-[calc(100vh-100px)]">
      <div className="text-center md:text-left space-y-6">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
          Nova Coleção 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Tecnologia que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            define seu estilo.
          </span>
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0">
          Descubra produtos inteligentes com design exclusivo SmartPink.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <Button href="/vitrine">Ver Ofertas</Button>
          <Button variant="secundary" href="#sobre">
            Sobre Nós
          </Button>
        </div>
      </div>
    </section>
  );
}
