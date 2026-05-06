import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EEE8] text-[#3E241D] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

        {/* BACKGROUND IMAGE */}
        <div
          className="
            absolute inset-0
            bg-cover
            bg-no-repeat
            md:bg-right-center
            bg-center
          "
          style={{
            backgroundImage:
              "url('/images/curadoria-raiz-hero-composicao.png')",
          }}
        />

        {/* MOBILE IMAGE */}
        <div
          className="
            absolute inset-0
            md:hidden
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('/images/curadoria-raiz-hero-composicao-vertical.png')",
          }}
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(18,8,5,0.92) 0%, rgba(18,8,5,0.82) 34%, rgba(18,8,5,0.36) 58%, rgba(18,8,5,0.12) 100%)",
          }}
        />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.045] bg-[url('/images/noise.png')]" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 md:px-10">

          <div className="max-w-[640px] pt-10 md:pt-0">

            {/* TOP LABEL */}
            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[#D8C6BA]/80">
                Curadoria artesanal · São Paulo
              </span>
            </div>

            {/* LOGO */}
            <div className="mb-12">
              <Image
                src="/branding/transparentes/07_vertical.png"
                alt="Curadoria Raiz"
                width={900}
                height={900}
                priority
                className="
                  h-auto
                  w-[250px]
                  md:w-[440px]
                  xl:w-[520px]
                  object-contain
                "
              />
            </div>

            {/* TITLE */}
            <h1
              className="
                max-w-[620px]
                font-serif
                text-[4rem]
                leading-[0.9]
                tracking-[-0.03em]
                text-[#F7F2EC]
                md:text-[6.3rem]
                xl:text-[7rem]
              "
              style={{ fontWeight: 400 }}
            >
              Comida, vinho e pequenos produtores em ritmo humano.
            </h1>

            {/* SUBTEXT */}
            <p className="mt-8 max-w-[500px] text-[15px] leading-[1.9] text-[#E1D1C7] md:text-[17px]">
              Uma seleção mensal de vinho natural, pão de fermentação lenta
              e produtos artesanais escolhidos para desacelerar a cidade
              por algumas horas.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="
                  rounded-full
                  bg-[#D46A3E]
                  px-8
                  py-4
                  text-[11px]
                  uppercase
                  tracking-[0.24em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E07B4F]
                "
              >
                Reservar edição atual
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-[#8F675B]
                  px-8
                  py-4
                  text-[11px]
                  uppercase
                  tracking-[0.24em]
                  text-[#F3E8E1]
                  transition-all
                  duration-300
                  hover:bg-white/5
                "
              >
                Conheça o manifesto
              </button>
            </div>

            {/* META */}
            <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-[#A88A7F]">
              Produção limitada · 30 unidades por edição
            </div>
          </div>
        </div>

        {/* LONG FADE */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[260px]
          "
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,12,6,0) 0%, rgba(90,36,18,0.12) 38%, rgba(243,238,232,0.92) 78%, #F3EEE8 100%)",
          }}
        />
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-40">

        <div className="mx-auto max-w-[1380px] px-6 md:px-10">

          <div className="grid gap-20 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C8B8AD]">
                Manifesto
              </span>

              <h2
                className="
                  mt-10
                  font-serif
                  text-[4.5rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-[#D8CBC2]
                  md:text-[7rem]
                "
                style={{ fontWeight: 400 }}
              >
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
            <div className="max-w-[620px]">

              <h3
                className="
                  font-serif
                  text-[3rem]
                  leading-[0.96]
                  tracking-[-0.03em]
                  text-[#4B2D25]
                  md:text-[4.8rem]
                "
                style={{ fontWeight: 400 }}
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
              </h3>

              <div className="mt-10 space-y-8 text-[16px] leading-[2] text-[#725F57]">

                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente.
                  Não apenas pelo sabor, mas pela história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto,
                  logística consciente e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-28 md:pb-40">

        <div className="mx-auto max-w-[1380px] px-6 md:px-10">

          <div className="mb-14">

            <span className="text-[10px] uppercase tracking-[0.34em] text-[#C7B7AB]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                font-serif
                text-[3.6rem]
                leading-[0.95]
                tracking-[-0.03em]
                text-[#D1C2B7]
                md:text-[5.8rem]
              "
              style={{ fontWeight: 400 }}
            >
              O Trio da Vez
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-[2] text-[#7C675E]">
              Uma combinação pensada para acompanhar o fim da tarde
              entre Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">

            {[
              {
                image: "/images/apagao-packshot.webp",
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
              <div key={index} className="group">

                <div className="overflow-hidden rounded-[28px] bg-[#ECE4DD]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={700}
                    className="
                      h-[420px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6
                    font-serif
                    text-[2rem]
                    leading-[1]
                    tracking-[-0.02em]
                    text-[#40261F]
                  "
                  style={{ fontWeight: 400 }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.9] text-[#76635A]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER */}
      <section className="relative h-[760px] overflow-hidden">

        <Image
          src="/images/produtor-faccin.webp"
          alt="Curadoria feita perto de quem produz"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto w-full max-w-[1380px] px-6 md:px-10">

            <div className="max-w-[620px]">

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#E5D4CA]/80">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  text-[4rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-white
                  md:text-[6.2rem]
                "
                style={{ fontWeight: 400 }}
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className="mt-10 text-[17px] leading-[2] text-[#E8DAD2]">
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40">

        <div className="mx-auto max-w-[1380px] px-6 md:px-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              bg-[#1B0C08]
              px-8
              py-24
              text-center
              md:px-16
              md:py-32
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.45),transparent_34%)]" />

            <div className="relative z-10">

              <div className="mx-auto mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B84E2D] text-sm text-white">
                R
              </div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#D0B2A5]">
                Próxima edição
              </span>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-[820px]
                  font-serif
                  text-[3.6rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-[#F7F2EC]
                  md:text-[6rem]
                "
                style={{ fontWeight: 400 }}
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[680px] text-[16px] leading-[2] text-[#DCC8BF]">
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque e Barra Funda.
              </p>

              <button
                className="
                  mt-14
                  rounded-full
                  bg-[#D96B41]
                  px-10
                  py-5
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E17A4E]
                "
              >
                Reservar meu drop
              </button>

              <div className="mt-10 text-[10px] uppercase tracking-[0.3em] text-[#A98A7E]">
                Pagamento em até 3x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E6DBD2] py-14">

        <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-10 px-6 text-center md:flex-row md:px-10">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={320}
            height={90}
            className="h-auto w-[220px]"
          />

          <span className="text-[10px] uppercase tracking-[0.32em] text-[#B3A095]">
            Curadoria artesanal · São Paulo
          </span>

          <span className="text-[10px] uppercase tracking-[0.28em] text-[#B7A79C]">
            © 2026 Curadoria Raiz
          </span>
        </div>
      </footer>
    </main>
  );
}
