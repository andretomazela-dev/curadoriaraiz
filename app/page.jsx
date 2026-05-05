import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F3EEE8] text-[#3E241D]">

     {/* HERO */}
<section className="relative min-h-screen overflow-hidden bg-[#1A0C06] text-[#F7F1EB]">

  {/* HERO IMAGE */}
  <div className="absolute inset-0">

    <Image
      src="/images/curadoria-raiz-hero-composicao.png"
      alt="Curadoria Raiz"
      fill
      priority
      className="
        object-cover
        object-center
        lg:object-[center_top]
      "
    />

    {/* cinematic overlay */}
    <div className="absolute inset-0 bg-black/38" />

    {/* left readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-transparent" />

    {/* warm vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,48,24,0.24),transparent_36%)]" />

    {/* subtle texture */}
    <div className="absolute inset-0 opacity-[0.045] bg-[url('/images/noise.png')]" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 py-12 sm:px-8 lg:px-12">

    <div className="max-w-[640px]">

      {/* EYEBROW */}
      <div className="mb-10">
        <span className="text-[10px] uppercase tracking-[0.34em] text-[#E5D5CA]/85">
          Curadoria artesanal · São Paulo
        </span>
      </div>

      {/* LOGO */}
      <div className="mb-10">

        <Image
          src="/branding/transparentes/07_vertical.png"
          alt="Curadoria Raiz"
          width={760}
          height={760}
          priority
          className="
            h-auto
            w-[260px]
            sm:w-[340px]
            lg:w-[520px]
            xl:w-[620px]
            object-contain
          "
        />
      </div>

      {/* HEADLINE */}
      <h1
        className="
          max-w-[620px]
          font-serif
          text-[3.8rem]
          font-normal
          leading-[0.92]
          tracking-[-0.03em]
          text-[#F8F3EE]
          sm:text-[4.8rem]
          lg:text-[6.2rem]
        "
      >
        Comida, vinho e pequenos produtores em ritmo humano.
      </h1>

      {/* SUBTEXT */}
      <p
        className="
          mt-8
          max-w-[520px]
          text-[15px]
          leading-[1.95]
          text-[#E2D2C8]
          sm:text-[16px]
        "
      >
        Uma seleção mensal de vinho natural, pão de fermentação lenta
        e produtos artesanais escolhidos para desacelerar a cidade
        por algumas horas.
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-wrap gap-4">

        <button
          className="
            rounded-full
            bg-[#C85F39]
            px-8
            py-4
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-white
            transition-all
            duration-300
            hover:bg-[#D46B45]
          "
        >
          Reservar edição atual
        </button>

        <button
          className="
            rounded-full
            border
            border-[#8C6557]
            px-8
            py-4
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-[#F3E7E0]
            transition-all
            duration-300
            hover:bg-white/5
          "
        >
          Conheça o manifesto
        </button>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-10 text-[9px] uppercase tracking-[0.32em] text-[#C29B8D]">
        Produção limitada · 30 unidades por edição
      </div>
    </div>
  </div>

  {/* SMOOTH TRANSITION */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[260px]">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6E2F1B]/18 to-[#F3EEE8]" />
    <div className="absolute inset-0 backdrop-blur-[12px]" />
  </div>
</section>

      {/* MANIFESTO */}
      <section className="py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-28">

            {/* LEFT */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.34em] text-[#CBBCAF]">
                Manifesto
              </span>

              <h2
                className="
                  mt-8
                  font-serif
                  text-[3.8rem]
                  font-normal
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-[#D7CAC0]
                  sm:text-[5rem]
                  lg:text-[6rem]
                "
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
                  font-normal
                  leading-[0.96]
                  tracking-[-0.02em]
                  text-[#4A2A22]
                  sm:text-[3.6rem]
                  lg:text-[4.3rem]
                "
              >
                A Curadoria Raiz nasce do desejo de aproximar pequenos produtores do ritmo da cidade.
              </h3>

              <div className="mt-10 space-y-7 text-[15px] leading-[1.95] text-[#735D54] sm:text-[16px]">
                <p>
                  Cada edição reúne vinho vivo, pão artesanal e conservas escolhidas manualmente.
                  Não apenas pelo sabor, mas pela história, origem e modo de produção.
                </p>

                <p>
                  Sem excesso. Sem pressa. Apenas alimento honesto, logística consciente
                  e encontros que fazem sentido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-24 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div className="mb-14">
            <span className="text-[10px] uppercase tracking-[0.34em] text-[#CBBCAF]">
              Drop #01
            </span>

            <h2
              className="
                mt-5
                font-serif
                text-[3.5rem]
                font-normal
                leading-[0.94]
                tracking-[-0.03em]
                text-[#D3C4B9]
                sm:text-[4.5rem]
                lg:text-[5rem]
              "
            >
              O Trio da Vez
            </h2>

            <p className="mt-5 max-w-[720px] text-[15px] leading-[1.9] text-[#7B655C] sm:text-[16px]">
              Uma combinação pensada para acompanhar o fim da tarde
              entre Santa Cecília, Higienópolis, Barra Funda e Vila Buarque.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">

            {[
              {
                image: "/images/apagao-editorial.webp",
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

                <div className="overflow-hidden rounded-[26px] bg-[#ECE4DD]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={620}
                    className="
                      h-[360px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                      sm:h-[420px]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6
                    font-serif
                    text-[2rem]
                    font-normal
                    leading-[1.02]
                    tracking-[-0.02em]
                    text-[#3C241E]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.85] text-[#7B665E]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER */}
      <section className="relative h-[560px] overflow-hidden sm:h-[640px] lg:h-[760px]">

        <Image
          src="/images/produtor-faccin.webp"
          alt="Curadoria feita perto de quem produz"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8">

            <div className="max-w-[620px]">

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#E9D9CF]/80">
                Pequenos produtores
              </span>

              <h2
                className="
                  mt-7
                  font-serif
                  text-[3.8rem]
                  font-normal
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-white
                  sm:text-[4.8rem]
                  lg:text-[5.6rem]
                "
              >
                Curadoria feita perto de quem produz.
              </h2>

              <p className="mt-8 max-w-[520px] text-[16px] leading-[1.9] text-[#E9DCD5]">
                Cada edição nasce da proximidade com produtores independentes,
                agricultura sustentável e processos artesanais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              bg-[#1E0F0B]
              px-6
              py-20
              text-center
              sm:px-10
              sm:py-24
              lg:rounded-[42px]
              lg:py-28
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(173,67,36,0.40),transparent_34%)]" />

            <div className="relative z-10">

              <div className="mx-auto mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#B84E2D] text-sm text-white">
                R
              </div>

              <span className="text-[10px] uppercase tracking-[0.34em] text-[#C8A99C]">
                Próxima edição
              </span>

              <h2
                className="
                  mx-auto
                  mt-7
                  max-w-[760px]
                  font-serif
                  text-[3.4rem]
                  font-normal
                  leading-[0.94]
                  tracking-[-0.03em]
                  text-[#F8F2EC]
                  sm:text-[4.6rem]
                  lg:text-[5.2rem]
                "
              >
                Reservas abertas para o Drop #01
              </h2>

              <p className="mx-auto mt-8 max-w-[680px] text-[15px] leading-[1.9] text-[#D7C3B9] sm:text-[16px]">
                Entregas entre sexta e sábado em Santa Cecília,
                Higienópolis, Vila Buarque e Barra Funda.
              </p>

              <button
                className="
                  mt-12
                  rounded-full
                  bg-[#D96B41]
                  px-9
                  py-5
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#E27A51]
                "
              >
                Reservar meu drop
              </button>

              <div className="mt-9 text-[9px] uppercase tracking-[0.30em] text-[#9D7B6F]">
                Pagamento em até 3x · disponível via link
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E4D9D0] py-12">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-8 px-6 text-center sm:px-8 lg:flex-row lg:text-left">

          <Image
            src="/branding/transparentes/05_horizontal_claro.svg"
            alt="Curadoria Raiz"
            width={320}
            height={90}
            className="h-auto w-[180px] lg:w-[230px]"
          />

          <span className="text-[9px] uppercase tracking-[0.34em] text-[#B2A197]">
            Curadoria artesanal · São Paulo
          </span>

          <span className="text-[9px] uppercase tracking-[0.28em] text-[#B7A69C]">
            © 2026 Curadoria Raiz
          </span>
        </div>
      </footer>
    </main>
  );
}
