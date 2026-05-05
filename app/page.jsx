import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F5F1EB] text-[#3E241D] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_35%),linear-gradient(135deg,#5A463F_0%,#2B1613_55%,#120A08_100%)] text-[#F7F1EB]">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-10 pb-24">
          {/* TOP */}
          <div className="mb-10">
            <span className="text-[10px] md:text-[11px] tracking-[0.42em] uppercase text-[#E9DCD2]/80">
              Curadoria artesanal · São Paulo
            </span>
          </div>

          {/* HERO GRID */}
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center min-h-[78vh]">
            {/* LEFT */}
            <div className="flex flex-col justify-center pt-10 md:pt-0">
              {/* LOGO */}
              <div className="mb-8">
                <Image
                  src="/branding/transparentes/02_principal_escuro.svg"
                  alt="Curadoria Raiz"
                  width={980}
                  height={560}
                  priority
                  className="
                    w-[560px]
                    md:w-[720px]
                    lg:w-[980px]
                    h-auto
                    object-contain
                    opacity-95
                    drop-shadow-[0_0_40px_rgba(145,74,58,0.10)]
                    -ml-8
                  "
                />
              </div>

              {/* TITLE */}
              <h1 className="font-serif text-[3.5rem] md:text-[5.4rem] leading-[0.94] tracking-[-0.05em] max-w-[720px] text-[#F7F1EB]">
                Comida, vinho
                <br />
                e pequenos
                <br />
                produtores
                <br />
                em ritmo
                <br />
                humano.
              </h1>

              {/* TEXT */}
              <p className="mt-8 text-[14px] md:text-[15px] leading-[2] text-[#E8D9CE]/78 max-w-[520px]">
                Uma seleção mensal de vinho natural, pão de fermentação lenta e
                produtos artesanais escolhidos para desacelerar a cidade por
                algumas horas.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-[#C65E3D] hover:bg-[#D66C4A] transition-all duration-500 text-[#FFF8F3] uppercase tracking-[0.24em] text-[11px] px-8 py-4 rounded-full">
                  Reservar edição atual
                </button>

                <button className="border border-[#CBB4A4]/40 hover:border-[#D8C4B5] hover:bg-white/5 transition-all duration-500 text-[#F3E7DE] uppercase tracking-[0.22em] text-[11px] px-8 py-4 rounded-full">
                  Conheça o manifesto
                </button>
              </div>

              {/* SMALL */}
              <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-[#D5BFB0]/55">
                Produção limitada · 30 unidades por edição
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-[34px] border border-white/20 bg-[#EFE6DD] backdrop-blur-sm shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-5">
                <Image
                  src="/images/apagao-packshot.webp"
                  alt="Apagão Rosé Natural"
                  width={760}
                  height={920}
                  className="w-full max-w-[520px] rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FADE */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F5F1EB]" />
      </section>

      {/* MANIFESTO */}
      <section className="py-28 md:py-40">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#C8B7AB]">
                Manifesto
              </span>

              <h2 className="mt-6 font-serif text-[4.4rem] md:text-[6.8rem] leading-[0.88] tracking-[-0.06em] text-[#D7CAC0]">
                Menos
                <br />
                pressa,
                <br />
                mais
                <br />
                repertório.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="max-w-[580px]">
              <h3 className="font-serif text-[3rem] md:text-[4.1rem] leading-[0.96] tracking-[-0.05em] text-[#4A2A22]">
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-10 space-y-8 text-[15px] leading-[2.1] text-[#6F5A50]">
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas
                  escolhidas manualmente. Não apenas pelo sabor, mas pela
                  história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto, logística
                  consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="pb-32">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#C8B7AB]">
              Drop #01
            </span>

            <h2 className="mt-4 font-serif text-[3.4rem] md:text-[5rem] tracking-[-0.05em] leading-[0.95] text-[#D1C2B7]">
              O Trio da Vez
            </h2>

            <p className="mt-6 text-[15px] leading-[2] text-[#746257] max-w-[620px]">
              Uma combinação pensada para acompanhar o fim da tarde entre Santa
              Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD */}
            {[
              {
                image: "/images/produtor-faccin.webp",
                title: "Apagão Rosé Natural",
                text: "Rosé de intervenção mínima da Família Faccin. Fresco, vivo e levemente frutado.",
              },
              {
                image: "/images/pao-sourdough.webp",
                title: "Sourdough Natural",
                text: "Fermentação lenta e forno artesanal. Assado poucas horas antes da entrega.",
              },
              {
                image: "/images/antepasto.webp",
                title: "Antepasto de Berinjela",
                text: "Receita artesanal preparada em pequenos lotes, com ingredientes frescos e sabor intenso.",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="overflow-hidden rounded-[28px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={760}
                    className="w-full h-[420px] object-cover hover:scale-[1.02] transition-all duration-700"
                  />
                </div>

                <h3 className="mt-6 font-serif text-[2rem] tracking-[-0.04em] text-[#4A2A22]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[2] text-[#746257]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative h-[760px] overflow-hidden">
        <Image
          src="/images/apagao-editorial.webp"
          alt="Curadoria artesanal"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 flex items-center">
          <div className="max-w-[720px]">
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#F1E3D8]/70">
              Pequenos produtores
            </span>

            <h2 className="mt-6 font-serif text-[4rem] md:text-[6rem] leading-[0.92] tracking-[-0.06em] text-[#FFF8F3]">
              Curadoria feita perto de quem produz.
            </h2>

            <p className="mt-8 text-[15px] leading-[2] text-[#F4E7DC]/80 max-w-[560px]">
              Cada edição nasce da proximidade com produtores independentes,
              agricultura sustentável e processos artesanais reais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="rounded-[42px] bg-gradient-to-br from-[#2A1714] via-[#3B1F1A] to-[#6E2E1F] px-8 md:px-20 py-20 md:py-28 text-center shadow-[0_35px_100px_rgba(62,27,17,0.22)]">
            <div className="w-12 h-12 rounded-2xl bg-[#C65E3D] text-white flex items-center justify-center mx-auto text-sm font-semibold">
              R
            </div>

            <div className="mt-6 text-[10px] uppercase tracking-[0.38em] text-[#DAB8A8]/70">
              Próxima edição
            </div>

            <h2 className="mt-8 font-serif text-[3.6rem] md:text-[5.8rem] leading-[0.92] tracking-[-0.06em] text-[#FFF7F2]">
              Reservas abertas
              <br />
              para o Drop #01
            </h2>

            <p className="mt-8 text-[15px] leading-[2] text-[#F0D9CC]/75 max-w-[700px] mx-auto">
              Entregas entre sexta e sábado em Santa Cecília, Higienópolis,
              Vila Buarque e Barra Funda.
            </p>

            <button className="mt-12 bg-[#D66C4A] hover:bg-[#E17956] transition-all duration-500 text-white uppercase tracking-[0.22em] text-[11px] px-10 py-4 rounded-full">
              Reservar meu drop
            </button>

            <div className="mt-8 text-[10px] uppercase tracking-[0.32em] text-[#CBAE9E]/45">
              Pagamento em até 3x · Disponível via link
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E8DED4] py-10">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LOGO */}
          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={340}
            height={90}
            className="w-[260px] h-auto opacity-95"
          />

          {/* CENTER */}
          <div className="text-[10px] uppercase tracking-[0.36em] text-[#B9A89D] text-center">
            Curadoria artesanal · São Paulo
          </div>

          {/* RIGHT */}
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#B9A89D]">
            © 2026 Curadoria Raiz
          </div>
        </div>
      </footer>
    </main>
  );
}
