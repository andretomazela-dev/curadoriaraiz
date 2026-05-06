import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F3EEE8] text-[#3E241D]">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

        {/* DESKTOP IMAGE */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/curadoria-raiz-hero-composicao.png')",
            backgroundPosition: "center center",
          }}
        />

        {/* MOBILE IMAGE */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/curadoria-raiz-hero-composicao-vertical.png')",
            backgroundPosition: "center center",
          }}
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(16,8,5,0.96) 0%, rgba(16,8,5,0.88) 32%, rgba(16,8,5,0.48) 58%, rgba(16,8,5,0.12) 100%)",
          }}
        />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/noise.png')]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-8 pb-28 pt-10 md:px-12 lg:px-16">

          <div className="max-w-[620px]">

            {/* LOGO */}
            <div className="mb-14">
              <Image
                src="/branding/transparentes/07_vertical.png"
                alt="Curadoria Raiz"
                width={1400}
                height={1400}
                priority
                className="
                  h-auto
                  w-[420px]
                  md:w-[760px]
                  xl:w-[860px]
                  object-contain
                  -ml-2
                "
              />
            </div>

            {/* HEADLINE */}
            <h1
              className="
                max-w-[620px]
                font-serif
                text-[4.2rem]
                leading-[0.9]
                tracking-[-0.035em]
                text-[#F7F2EC]
                md:text-[6.3rem]
                xl:text-[7rem]
              "
              style={{ fontWeight: 400 }}
            >
              Comida, vinho e pequenos produtores em ritmo humano.
            </h1>

            {/* SUBTEXT */}
            <p className="mt-8 max-w-[500px] text-[15px] leading-[1.95] text-[#E0D0C5] md:text-[17px]">
              Uma seleção mensal de vinho natural, pão de fermentação lenta e
              produtos artesanais escolhidos para desacelerar a cidade por
              algumas horas.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="
                  rounded-full
                  bg-[#D56A3F]
                  px-8
                  py-4
                  text-[11px]
                  uppercase
                  tracking-[0.24em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E1784C]
                "
              >
                Reservar edição atual
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-[#8B6458]
                  px-8
                  py-4
                  text-[11px]
                  uppercase
                  tracking-[0.24em]
                  text-[#F3E7E0]
                  transition-all
                  duration-300
                  hover:bg-white/5
                "
              >
                Conheça os produtos
              </button>
            </div>

            {/* META */}
            <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-[#A6877B]">
              Produção limitada · 30 unidades por edição
            </div>
          </div>
        </div>

        {/* TRANSITION */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[260px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,12,6,0) 0%, rgba(92,38,20,0.14) 42%, rgba(243,238,232,0.94) 82%, #F3EEE8 100%)",
          }}
        />
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-40">

        <div className="mx-auto max-w-[1380px] px-8 md:px-12 lg:px-16">

          <div className="grid gap-24 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C2B1A6]">
                Manifesto
              </span>

              <h2
                className="
                  mt-10
                  font-serif
                  text-[4.8rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-[#B8A398]
                  md:text-[7.4rem]
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
            <div className="max-w-[640px]">

              <h3
                className="
                  font-serif
                  text-[3.2rem]
                  leading-[0.97]
                  tracking-[-0.03em]
                  text-[#4B2B24]
                  md:text-[5rem]
                "
                style={{ fontWeight: 400 }}
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos
                produtores do ritmo da cidade.
              </h3>

              <div className="mt-10 space-y-8 text-[16px] leading-[2] text-[#6E5B53]">

                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas
                  escolhidas manualmente. Não apenas pelo sabor, mas pela
                  história, origem e modo de produção.
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

        <div className="mx-auto max-w-[1380px] px-8 md:px-12 lg:px-16">

          <div className="mb-16">

            <span className="text-[10px] uppercase tracking-[0.34em] text-[#BFAEA3]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                font-serif
                text-[3.8rem]
                leading-[0.95]
                tracking-[-0.03em]
                text-[#B49F93]
                md:text-[5.8rem]
              "
              style={{ fontWeight: 400 }}
            >
              O Trio da Vez
            </h2>

            <p className="mt-6 max-w-[760px] text-[16px] leading-[2] text-[#76645B]">
              Uma combinação pensada para acompanhar o fim da tarde entre Santa
              Cecília, Higienópolis, Barra Funda e Vila Buarque.
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

                <div className="overflow-hidden rounded-[30px] bg-[#ECE4DD]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={700}
                    className="
                      h-[430px]
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
                    mt-7
                    font-serif
                    text-[2rem]
                    leading-[1]
                    tracking-[-0.02em]
                    text-[#3F251F]
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

        <div className="absolute inset-0 bg-black/42" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto w-full max-w-[1380px] px-8 md:px-12 lg:px-16">

            <div className="max-w-[620px]">

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#E7D7CD]/80">
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

              <p className="mt-10 text-[17px] leading-[2] text-[#E7DAD3]">
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40">

        <div className="mx-auto max-w-[1380px] px-8 md:px-12 lg:px-16">

          <div
            className="
              relative
              overflow-hidden
              rounded-[44px]
              bg-[#1A0C08]
              px-8
              py-24
              text-center
              md:px-16
              md:py-32
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.42),transparent_34%)]" />

            <div className="relative z-10">

              <div className="mx-auto mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B84E2D] text-sm text-white">
                R
              </div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#D1B3A7]">
                Próxima edição
              </span>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-[860px]
                  font-serif
                  text-[3.8rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-[#F7F2EC]
                  md:text-[6rem]
                "
                style={{ fontWeight: 400 }}
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-10 max-w-[760px] text-[16px] leading-[2] text-[#DCC9BF]">
                Entregas feitas de bicicleta às sextas-feiras e sábados em
                Santa Cecília, Higienópolis, Vila Buarque e Barra Funda.
              </p>

              <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

                <button
                  className="
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
                    hover:bg-[#E27B4F]
                  "
                >
                  Reservar meu drop
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5511999999999",
                      "_blank"
                    )
                  }
                  className="
                    rounded-full
                    border
                    border-[#7F5A4E]
                    px-10
                    py-5
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-[#F2E7E0]
                    transition-all
                    duration-300
                    hover:bg-white/5
                  "
                >
                  Tirar dúvidas no WhatsApp
                </button>
              </div>

              <div className="mt-10 text-[10px] uppercase tracking-[0.3em] text-[#A98A7E]">
                Parcelamento em 2x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5DAD2] py-14">

        <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-10 px-8 text-center md:flex-row md:px-12 lg:px-16">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={520}
            height={160}
            className="h-auto w-[320px]"
          />

          <span className="text-[10px] uppercase tracking-[0.32em] text-[#B19F94]">
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
