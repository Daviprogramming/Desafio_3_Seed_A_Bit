import Image from "next/image";
export default function About() {
  return (
    <section id="sobre" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <Image
              src="/tecnologiaimagem.png"
              alt="Foto da empresa"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Quem somos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Criando tecnologia com <br />
            <span className="text-primary">alma e estilo.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            A SmartPink não é apenas uma loja de eletrônicos. Nós acreditamos
            que seus gadgets devem combinar com seu outfit. Selecionamos o
            melhor da tecnologia mundial com um toque de design exclusivo.
          </p>
        </div>
      </div>
    </section>
  );
}
