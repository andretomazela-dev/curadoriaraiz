export default function Home() {
  return (
    <main className="bg-[#F3EEE8] text-[#3E241D] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">

          <img
            src="/images/curadoria-raiz-hero-composicao.png"
            alt="Curadoria Raiz"
            className="hidden md:block h-full w-full object-cover object-[72%_center]"
          />

          <img
            src="/images/curadoria-raiz-hero-composicao-vertical.png"
            alt="Curadoria Raiz"
            className="md:hidden h-full w-full object-cover object-center"
          />

          {/* OVERLAY */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(12,6,4,0.96) 0%, rgba(12,6,4,0.88) 24%, rgba(12,6,4,0.58) 46%, rgba(12,6,4,0.12) 70%, transparent 88%)",
            }}
          />

          <div className="absolute inset-0 bg-black/18" />

          <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/noise.png')]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-16">

          <div className="max-w-[560px]">

            {/* EYEBROW */}
            <div className="mb-10">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[#E0D0C5]/78">
                Curadoria artesanal · São Paulo
              </span>
            </div>

            {/* LOGO */}
            <div className="mb-12">
              <img
                src="/branding/transparentes/07_vertical.png"
                alt="Curadoria Raiz"
                className="w-[340px] sm:w-[520px] lg:w-[760px] xl:w-[860px] max-w-none h-auto"
              />
            </div>

            {/* TITLE */}
            <h1
              className="
                max-w-[540px]
                font-serif
                text-[3.2rem]
                sm:text-[4.6rem]
                lg:text-[5.8rem]
                leading-[0.9]
                tracking-[-0.03em]
                font-normal
                text-[#F8F3EE]
              "
            >
              Comida,
              <br />
              vinho e pequenos
              <br />
              produtores
              <br />
              em ritmo humano.
            </h1>

            {/* TEXT */}
            <p className="mt-8 max-w-[420px] text-[15px] leading-[1.9] text-[#D6C6BC]">
              Uma seleção mensal de vinho natural, pão de fermentação lenta
              e produtos artesanais escolhidos para desacelerar a cidade
              por algumas horas.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-full bg-[#C95F39] px-8 py-4 text-[10px] uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-[#D56D46]">
                Reservar edição atual
              </button>

              <button className="rounded-full border border-[#705044] px-8 py-4 text-[10px] uppercase tracking-[0.28em] text-[#E7DBD3] transition-all duration-300 hover:bg-white/5">
                Conheça o manifesto
              </button>
            </div>

            {/* FOOTNOTE */}
            <div className="mt-10 text-[9px] uppercase tracking-[0.32em] text-[#9D7C6D]">
              Produção limitada · 30 unidades por edição
            </div>
          </div>
        </div>

        {/* HERO FADE */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4A1E11]/10 to-[#F3EEE8]" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-36 lg:py-44">

        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-24 lg:gap-32 items-start">

            {/* LEFT */}
            <div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C8B9AE]">
                Manifesto
              </span>

              <h2 className="mt-10 font-serif text-[4.8rem] lg:text-[6.4rem] leading-[0.92] tracking-[-0.04em] font-normal text-[#D7CAC0]">
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
            <div className="max-w-[640px]">

              <h3 className="font-serif text-[3rem] lg:text-[4rem] leading-[0.96] tracking-[-0.03em] font-normal text-[#4A2A22]">
                A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
              </h3>

              <div className="mt-12 space-y-8 text-[16px] leading-[2] text-[#6F5A52]">
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente. Não apenas pelo sabor, mas pela história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-40">

        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

            <div>
              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C8B9AE]">
                Drop #01
              </span>

              <h2 className="mt-5 font-serif text-[4rem] lg:text-[5rem] leading-[0.94] tracking-[-0.03em] font-normal text-[#D0C0B4]">
                O Trio da Vez
              </h2>
            </div>

            <p className="max-w-[520px] text-[16px] leading-[2] text-[#7A655C]">
              Uma combinação pensada para acompanhar o fim da tarde entre Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">

            {[
              {
                image: "/images/apagao-packshot.webp",
                title: "Apagão Rosé Natural",
                text: "Rosé de intervenção mínima da Família Faccin.",
              },
              {
                image: "/images/pao-sourdough.webp",
                title: "Sourdough Natural",
                text: "Fermentação lenta e forno artesanal.",
              },
              {
                image: "/images/antepasto.webp",
                title: "Antepasto de Berinjela",
                text: "Receita artesanal preparada em pequenos lotes.",
              },
            ].map((item, index) => (
              <div key={index} className="group">

                <div className="overflow-hidden rounded-[24px] bg-[#ECE4DD]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-7 font-serif text-[2rem] leading-[1] tracking-[-0.03em] font-normal text-[#3C241E]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[300px] text-[14px] leading-[1.9] text-[#7B665E]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER */}
      <section className="relative h-[760px] overflow-hidden">

        <img
          src="/images/produtor-faccin.webp"
          alt="Produtor"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/42" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/26 to-transparent" />

        <div className="relative z-10 flex h-full items-end">

          <div className="mx-auto w-full max-w-[1380px] px-6 pb-20 sm:px-10 lg:px-16 lg:pb-24">

            <div className="max-w-[520px]">

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#E5D8CF]/82">
                Pequenos produtores
              </span>

              <h2 className="mt-8 font-serif text-[4rem] lg:text-[5.2rem] leading-[0.92] tracking-[-0.04em] font-normal text-white">
                Curadoria feita perto de quem produz.
              </h2>

              <p className="mt-8 max-w-[460px] text-[16px] leading-[2] text-[#E4D8D1]">
                Cada edição nasce da proximidade com produtores independentes, agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40">

        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-16">

          <div className="relative overflow-hidden rounded-[40px] bg-[#1C0D09] px-8 py-24 text-center lg:px-20 lg:py-28">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.34),transparent_34%)]" />

            <div className="relative z-10 mx-auto max-w-[760px]">

              <div className="mx-auto mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#B84E2D] text-[10px] text-white">
                R
              </div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C8A99C]">
                Próxima edição
              </span>

              <h2 className="mt-8 font-serif text-[3.8rem] lg:text-[5rem] leading-[0.94] tracking-[-0.03em] font-normal text-[#F8F2EC]">
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[620px] text-[16px] leading-[2] text-[#D7C3B9]">
                Entregas entre sexta e sábado em Santa Cecília, Higienópolis, Vila Buarque e Barra Funda.
              </p>

              <button className="mt-14 rounded-full bg-[#D96B41] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#E27A51]">
                Reservar meu drop
              </button>

              <div className="mt-10 text-[9px] uppercase tracking-[0.32em] text-[#9D7B6F]">
                Pagamento em até 3x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E4D9D0] py-16">

        <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-8 px-6 text-center sm:px-10 lg:flex-row lg:px-16 lg:text-left">

          <img
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            className="w-[220px] h-auto"
          />

          <span className="text-[10px] uppercase tracking-[0.34em] text-[#B2A197]">
            Curadoria artesanal · São Paulo
          </span>

          <span className="text-[10px] uppercase tracking-[0.28em] text-[#B7A69C]">
            © 2026 Curadoria Raiz
          </span>
        </div>
      </footer>
    </main>
  );
}
